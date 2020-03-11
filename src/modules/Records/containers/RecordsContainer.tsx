import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RECORD_QUERY = gql`
  query records {
    records {
      player
      wins
    }
  }
`;

interface Record {
  player: string;
  wins: number;
}

interface RecordData {
  records: Record[];
}

export interface RecordsContainerProps {}

const RecordsContainer: React.SFC<RecordsContainerProps> = () => {
  const { loading, data, error } = useQuery<RecordData>(RECORD_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Ups. We have a problem.</div>;
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
            {data &&
              data.records.map(record => (
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
      <div style={{ marginTop: '3rem' }}>
        <Link to="/">Lets play!</Link>
      </div>
    </div>
  );
};

export default RecordsContainer;
