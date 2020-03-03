import {
  UPDATE_NAMES,
  UPDATE_SCORE,
  CLEAR_SCORE
} from './types';

export const updateNames = data => {
  try {
    return {
      type: UPDATE_NAMES,
      payload: data
    };
  } catch (err) {
    console.error('err', err);
  }
};

export const updateScore = data => {
  try {
    return {
      type: UPDATE_SCORE,
      payload: data
    };
  } catch (err) {
    console.error('err', err);
  }
};

export const clearScore = () => {
  try {
    return {
      type: CLEAR_SCORE,
    };
  } catch (err) {
    console.error('err', err);
  }
};
