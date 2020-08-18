class CounterComponent extends HTMLElement {
  set count(value) {
    this._count = value
    this.render()
  }

  get count() {
    return this._count
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.reset()
  }

  reset() {
    this.count = 0
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <div>
        <button onclick="this.getRootNode().host.increment()">+</button>
        <button onclick="this.getRootNode().host.decrement()">-</button>
        <button onclick="this.getRootNode().host.reset()">Reset</button>

        <p>The count is ${this.count}</p>
      </div>
    `
  }
}

module.exports = CounterComponent
