import { ON_CHANGE_TEXT, DELETE, ALL_CLEAR, SHOW_RESULT, MEMORY, RAD_TO_DEG } from "../Action/Action_Type";
import Toast from 'react-native-simple-toast';

import evaluate from "../../eval";

const initialState = {
  text: '',
  number: '',
  memory: 0,
  rad_to_deg: false,
};
isOperator = (text) => {
  if (text === '+' || text === '×' || text === '÷' || text === '%' || text === '^') {
    return true
  }
  return false;
}
isNumber = (text) => {
  var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  if (number.includes(text)) {
    return true
  }
  return false
}
var countOperator = 1;
var countBracket = 0;
var countPointer = 0;
var countNumber = 0;
var temp = 0;
export const reducer = (state = initialState, action) => {
  var tempStr = state.text
  var Paramater = action.text
  var length = tempStr.length
  var lastChar = tempStr[length - 1]
  var typeParameter = action.typeParameter
  var memoryCalculator = state.memory
  var radOrDeg = state.rad_to_deg
  switch (action.type) {
    case ON_CHANGE_TEXT:
      tempStr = (state.number !== '' && state.number !== undefined) ? state.number : tempStr
      if (typeParameter === 'number') {  //Chuẩn
        var Invalid = ['(', '-', '.']
        if (countNumber > 15) {
          Toast.show("Không quá 15 chữ số")
          return {
            text: tempStr,
            memory: memoryCalculator,
            rad_to_deg: radOrDeg
          }
        }
        if ((tempStr === '' || isNumber(lastChar) || Invalid.includes(lastChar) || isOperator(lastChar) || lastChar === '-'))
          tempStr += Paramater
        else tempStr += ('×' + Paramater)
        countNumber++
        countOperator = 0
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      } else if (typeParameter === 'operation') { //Chạy tốt
        if (countOperator < 1) {
          tempStr += Paramater
          countOperator++
        } else if (countOperator === 1 && isOperator(lastChar)) {
          tempStr = tempStr.substring(0, tempStr.length - 1) + Paramater
        }
        countNumber = 0
        countPointer = 0
      } else if (typeParameter === 'pointer') {
        if (countPointer < 1) {
          var Invalid = ['(', '-']
          var Absurd = ['!', ')', 'e']
          if ((tempStr[length - 2] === '^' && (lastChar === '2' || lastChar === '3')) || Absurd.includes(lastChar))
            tempStr += ('×0' + Paramater)
          else if (isNumber(lastChar))
            tempStr += Paramater
          else if (isOperator(lastChar) || Invalid.includes(lastChar) || tempStr === '')
            tempStr += ('0' + Paramater)
          countPointer = 1
        } else if (countPointer === 1) {
          Toast.show("Kí tự không hợp lệ !")
          return {
            text: tempStr,
            memory: memoryCalculator,
            rad_to_deg: radOrDeg
          }
        }
      } else if (typeParameter === 'negative') { //Cần sửa
        if (countOperator <= 1 && countOperator !== undefined) {
          tempStr += Paramater
          countOperator++
        } else if (countOperator > 1 && lastChar !== '.' && lastChar !== '(' && lastChar !== ')' && isOperator(tempStr[length - 2])) {
          tempStr = tempStr.substring(0, tempStr.length - 2) + '--'
        }
        countNumber = 0
        countPointer = 0
      } else if (Paramater === '(' && typeParameter === 'bracket') {
        var Invalid = ['(', '-']
        tempStr = ((tempStr === '' || countOperator > 0 || Invalid.includes(lastChar)) && lastChar !== '.') ? tempStr += Paramater : tempStr += ('×' + Paramater)
        countBracket++
        countOperator = 1
        countNumber = 0
        countPointer = 0
      } else if (Paramater === ')' && typeParameter === 'bracket') {
        if (countOperator === 0 && countBracket > 0 && lastChar !== '(') {
          tempStr += Paramater
          countBracket--
          countOperator = 0
          countNumber = 0
          countPointer = 0
        } else Toast.show("Kí tự không hợp lệ !")
      } else if (typeParameter === 'factorial' || typeParameter === 'pow2' || typeParameter === 'pow3') {
        if ((isNumber(lastChar) || lastChar === ')') && countOperator === 0 && tempStr !== '' && lastChar !== '!' && lastChar !== '(') {
          if (typeParameter === 'pow2')
            tempStr += '^2'
          else if (typeParameter === 'pow3')
            tempStr += '^3'
          else tempStr += Paramater
        } else Toast.show("Kí tự không hợp lệ !")
        countNumber = 0
        countPointer = 0
      } else if (typeParameter === 'const') {
        tempStr = (tempStr === '' || countOperator > 0 || lastChar === '(') ? tempStr += Paramater : tempStr += ('×' + Paramater)
        countOperator = 0
        countNumber = 0
        countPointer = 0
      } else if (typeParameter === 'function') {
        tempStr = (tempStr === '' || countOperator > 0 || lastChar === '(') ? tempStr += Paramater : tempStr += ('×' + Paramater)
        countOperator = 1
        countBracket++
        countNumber = 0
        countPointer = 0
      } else if (typeParameter === 'powy') {
        if (countOperator === 0 && lastChar !== '(' && isNumber(lastChar)) {
          tempStr += '^('
          countBracket++
          countOperator = 1
        } else Toast.show("Kí tự không hợp lệ !")
        countNumber = 0
        countPointer = 0
      }
      return {
        text: tempStr,
        memory: memoryCalculator,
        rad_to_deg: radOrDeg
      }
    case MEMORY:
      temp = !isNaN(Number(tempStr)) ? Number(tempStr) : temp
      if (typeParameter === 'm+') {
        memoryCalculator += temp
        tempStr += 'm+'
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg,
          number: memoryCalculator
        }
      } else if (typeParameter === 'm-') {
        memoryCalculator -= temp
        tempStr += 'm-'
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg,
          number: memoryCalculator
        }
      } else if (typeParameter === 'mc') {
        memoryCalculator = 0
        temp = 0
        return {
          text: tempStr,
          memory: 0,
          rad_to_deg: radOrDeg
        }
      }
    case ALL_CLEAR:
      tempStr = ''
      countOperator = 1;
      countBracket = 0;
      countPointer = 0;
      countNumber = 0;
      return {
        text: '',
        memory: memoryCalculator,
        rad_to_deg: radOrDeg
      }
    case DELETE:
      if (length <= 1) {
        tempStr = ''
        countOperator = 1
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      } else if (lastChar === '.') {
        countPointer = 0
        tempStr = tempStr.substring(0, length - 1)
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      } else if (tempStr[length - 2] === '^' && (isNumber(lastChar) || lastChar === '(')) {
        tempStr = tempStr.substring(0, length - 2)
        countOperator = 0
        countBracket--
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      } else if ((isOperator(tempStr[length - 2]) || tempStr[length - 2] === '-') && isNumber(lastChar)) {
        countOperator = (isOperator(tempStr[length - 3])) ? 2 : 1
      } else if (isOperator(lastChar) || lastChar === '-') {
        countOperator--
      } else if (lastChar === ')' || lastChar === '(') {
        if (tempStr[tempStr.length - 1] === ')') {      //delete right Bracket
          countBracket++
          countOperator = 0
          tempStr = tempStr.substring(0, length - 1)
          return {
            text: tempStr,
            memory: memoryCalculator,
            rad_to_deg: radOrDeg
          }
        }                                               //delele function
        if (tempStr[tempStr.length - 1] === '(' && !isOperator(tempStr[tempStr.length - 2]) && tempStr[tempStr.length - 2] !== '(') {
          tempStr = tempStr.substring(0, length - 1)
          while (tempStr[tempStr.length - 1] !== '(' && !isOperator(tempStr[tempStr.length - 1])) {
            tempStr = tempStr.substring(0, tempStr.length - 1)
            if (tempStr === '') {
              countOperator = 1
              countBracket = 0
              return {
                text: tempStr,
                memory: memoryCalculator,
                rad_to_deg: radOrDeg
              }
            }
          }
        }
        tempStr = tempStr.substring(0, length - 1)    //delete left Bracket
        countBracket--
        countOperator = 1
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      } else if (lastChar === 'e' || lastChar === 'π')
        countOperator = 1
      tempStr = tempStr.substring(0, length - 1)
      return {
        text: tempStr,
        memory: memoryCalculator,
        rad_to_deg: radOrDeg
      }
    case RAD_TO_DEG:
      return {
        rad_to_deg: !state.rad_to_deg,
        text: tempStr,
        memory: memoryCalculator,
      }
    case SHOW_RESULT:
      if (tempStr.includes('÷0')) {
        Toast.show("Không thể chia cho 0")
        return {
          text: tempStr,
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      }
      if (lastChar === '+' || lastChar === '-' || lastChar === '.')
        tempStr += '0'
      else if (lastChar === '×' || lastChar === '÷' || lastChar === '^')
        tempStr += '1'
      else if (lastChar === '%')
        tempStr += '100'
      while (tempStr.includes('√'))
        tempStr = tempStr.replace('√', 'sqrt')
      while (tempStr.includes('∛'))
        tempStr = tempStr.replace('∛', 'cbrt')
      while (tempStr.includes('×'))
        tempStr = tempStr.replace('×', '*')
      while (tempStr.includes('π'))
        tempStr = tempStr.replace('π', 'pi')
      while (tempStr.includes('÷'))
        tempStr = tempStr.replace('÷', '/')
      while (tempStr.includes('m'))
        tempStr = tempStr.replace('m', memoryCalculator)
      try {
        return {
          text: state.text,
          number: evaluate(String(tempStr), radOrDeg ? "deg" : 'rad'),
          memory: memoryCalculator,
          rad_to_deg: radOrDeg
        }
      }
      catch (error) {
        Toast.show('Lỗi');
      }
  }
  return state;
}


