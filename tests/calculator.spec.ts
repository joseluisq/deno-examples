import { runTests, test } from 'https://deno.land/std/testing/mod.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { Calculator } from '../src/calculator'

test(function calculator () {
    const { factorial } = new Calculator()

    assertEquals(factorial(4), 24)
})

runTests()
