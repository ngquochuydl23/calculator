import { CHANGE_MODE, RAD_TO_DEG } from "../Action/Action_Type";

export const initialState = {
  mode: false,
}
export default reducerMode = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        mode: !state.mode,
      }
    default:
      return state;
  }
}