import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql, Query, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RECORD_QUERY = gql`
  query records($id: ID!) {
    records(id: $id){
      player
      wins
    }
  }
`;

const RecordsContainer = (props) => {
  const {records: {loading, records, error}} = props;
  if(loading) return <div>Loading...</div>
  if(error) return <div>Ups. We have a problem.</div>
  return ( 
    <div>
      <Typography variant="h3" gutterBottom>
        Records
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>player</TableCell>
              <TableCell align="right">victories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map(record => (
              <TableRow key={record.player}>
                <TableCell component="th" scope="row">
                  {record.player}
                </TableCell>
                <TableCell align="right">{record.wins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div style={{marginTop: '3rem'}}>
        <Link to="/">Lets play!</Link>
      </div>
    </div>
  );
}

export default graphql(RECORD_QUERY, {
  name: 'records',
  options: props => ({
    variables: {
      id: 1
    }
  })
})(RecordsContainer);