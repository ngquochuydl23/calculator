import { actionTypes } from "./actions";

export const initialState = {
  font_Size: '',
  orientation: '',
}
export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORIENTATION:
      const newState = {
        font_Size: action.payload.orientation === 'PORTRAIT' ? '4' : '3',
        orientation: action.payload.orientation
      }
      return {
        ...state,
        ...newState
      }
    default:
      return state;
  }
}