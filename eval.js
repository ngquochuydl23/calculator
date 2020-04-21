import { create, all } from 'mathjs'

const math = create(all, config)
const config = {
  angles: 'rad'
}
let replacements = {}


const fns1 = ['sin', 'cos', 'tan', 'sec', 'cot', 'csc']
fns1.forEach(function (name) {
  const fn = math[name]
  const fnNumber = function (x) {
    switch (config.angles) {
      case 'deg':
        return fn(x / 360 * 2 * Math.PI)
      default:
        return fn(x)
    }
  }
  replacements[name] = math.typed(name, {
    'number': fnNumber,
    'Array | Matrix': function (x) {
      return math.map(x, fnNumber)
    }
  })
})

const fns2 = ['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec']
fns2.forEach(function (name) {
  const fn = math[name] // the original function

  const fnNumber = function (x) {
    const result = fn(x)
    if (typeof result === 'number') {
      switch (config.angles) {
        case 'deg': return result / 2 / Math.PI * 360
        default: return result
      }
    }

    return result
  }
  replacements[name] = math.typed(name, {
    'number': fnNumber,
    'Array | Matrix': function (x) {
      return math.map(x, fnNumber)
    }
  })
})

math.import(replacements, { override: true })

export default evaluate = (expression, angles) => {
  config.angles = String(angles)
  return math.evaluate(expression)
}