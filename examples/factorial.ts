import { Calculator } from '../src/calculator'

const { factorial } = new Calculator()

const value = 4
const result = factorial(value)

console.log('Factorial of %s is %s', value, result)
