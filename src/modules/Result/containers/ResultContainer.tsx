import React, { Component, useEffect, useContext } from 'react';
// import connect from "react-redux/es/connect/connect";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Score from '../../../components/Score';
import { GameContext } from '../../../GameContext';

const RECORD_MUTATION = gql`
  mutation updateRecord($record: RecordInput!) {
    updateRecord(record: $record) {
      title
      description
    }
  }
`;

interface Record {
  player: string;
}

interface Result {
  title: String;
  description: String;
}

export interface ResultContainerProps {}

const ResultContainer: React.SFC<ResultContainerProps> = () => {
  const { winner } = useContext(GameContext);

  const [updateRecord, { error, data }] = useMutation<
    { result: Result },
    { record: Record }
  >(RECORD_MUTATION);

  useEffect(() => {
    updateRecord({
      variables: { record: { player: winner } }
    });
  }, []);

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        We have a WINNER!!
      </Typography>
      <Typography variant="h4" gutterBottom>
        {`${winner} is the new EMPEROR!`}
      </Typography>
      <div style={{ margin: '2rem 0' }}>
        <Link to="/">Play again!</Link>
      </div>
      <Score />
    </div>
  );
};

export default ResultContainer;
