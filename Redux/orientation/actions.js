export const actionTypes = {
  SET_ORIENTATION: 'SET_ORIENTATION'
};


export const setOrientation = orientation => {
  return {
    type: actionTypes.SET_ORIENTATION,
    payload: {
      orientation
    }
  }
}