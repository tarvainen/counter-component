const CounterComponent = require('../')

customElements.define('app-counter', CounterComponent)

test('increment should add count', () => {
  const counter = new CounterComponent()

  expect(counter.count).toBe(0)

  counter.increment()
  counter.increment()

  expect(counter.count).toBe(2)
})

test('decrement should reduce count', () => {
  const counter = new CounterComponent()

  expect(counter.count).toBe(0)

  counter.decrement()
  counter.decrement()
  counter.decrement()

  expect(counter.count).toBe(-3)
})

test('reset should set count to zero', () => {
  const counter = new CounterComponent()

  expect(counter.count).toBe(0)

  counter.increment()
  counter.increment()

  expect(counter.count).toBe(2)

  counter.reset()

  expect(counter.count).toBe(0)
})
