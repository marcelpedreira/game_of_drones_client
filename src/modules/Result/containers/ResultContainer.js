import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Score from '../../../components/Score';

const RECORD_MUTATION = gql`
  mutation updateRecord($record: RecordInput!) {
    updateRecord(record: $record){
      title
      description
    }
  }
`;

class ResultContainer extends Component {
  componentDidMount() {
    const {winner, players, updateRecord} = this.props;
    updateRecord({
      variables: { record: {player: players[winner]} },
    })
  }

  render(){
    const {winner, players} = this.props;
    return ( 
      <div>
        <Typography variant="h3" gutterBottom>
          We have a WINNER!!
        </Typography>
        <Typography variant="h4" gutterBottom>
          {`${players[winner]} is the new EMPEROR!`}
        </Typography>
        <div style={{margin: '2rem 0'}}>
          <Link to="/">Play again!</Link>
        </div>
        <Score />
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.game.players,
    winner: state.game.winner,
  };
}

export default compose(
  graphql(RECORD_MUTATION, {
    name: 'updateRecord',
  }),
  connect(
    mapStateToProps,
))(ResultContainer);