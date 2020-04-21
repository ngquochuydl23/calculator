import { ALL_CLEAR, SHOW_RESULT, DELETE, ON_CHANGE_TEXT, CHANGE_MODE, RAD_TO_DEG, MEMORY } from './Action_Type';

export const Screen = (text, typeParameter) => {
  return {
    type: ON_CHANGE_TEXT,
    text,
    typeParameter
  }
}

export const All_Clear = () => {
  return {
    type: ALL_CLEAR
  }
}

export const Delete = () => {
  return {
    type: DELETE
  }
}

export const Show = () => {
  return {
    type: SHOW_RESULT
  }
}

export const Change_mode = () => {
  return {
    type: CHANGE_MODE
  }
}

export const Rad_To_Deg = () => {
  return {
    type: RAD_TO_DEG,
  }
}

export const Memory = (typeParameter) => {
  return {
    type: MEMORY,
    typeParameter
  }
}