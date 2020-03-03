import React from 'react';
import connect from "react-redux/es/connect/connect";
import { Field } from "redux-form/immutable";
import { reduxForm } from "redux-form/lib/immutable";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "../../../components/Select";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
  },
	button: {
    marginTop: '1rem' ,
		width: '100%',
	},
}));
 
const RoundForm = (props) => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {`Round ${props.round}`}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {props.players[props.player]}
      </Typography>
      <form onSubmit={props.handleSubmit}>
        <Field name="move" label="Select Move" component={Select}>
          {props.moves.map(move => (
            <MenuItem key={move.id} value={move.name}>
              {move.name}
            </MenuItem>
          ))}
        </Field>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Ok
        </Button>
      </form>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     moves: state.game.moves,
//     players: state.game.players
//   };
// }

const InitializeFromStateForm = reduxForm({
  form: "round",
  enableReinitialize: true
})(RoundForm);

export default connect((state, props) => ({
  moves: state.game.moves,
  // players: state.game.players,
  initialValues: {
    ...props.data
  }
}))(InitializeFromStateForm);

// export default connect(
//   mapStateToProps,
// )(reduxForm({
//   form: 'round',
//   enableReinitialize: true
// })(RoundForm));