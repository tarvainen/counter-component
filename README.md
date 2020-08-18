# COUNTER-COMPONENT

## Usage

1. Install package

```
npm i @tarvainen/counter-component
```

2. Import and register `custom element`

```
import CounterComponent from '@tarvainen/counter-component'

customElements.define('app-counter', CounterComponent)
```

3. Use it

```
<html>
  <body>
    // ...
    <app-counter></app-counter>
  </body>
</html>
```

## Development

Start development server by issuing following command.

```
npm run serve
```

Running tests

```
npm test
```

# License

MIT
