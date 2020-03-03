import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form/immutable';
import game from './gameReducer';

export default combineReducers({
  game,
  form,
});