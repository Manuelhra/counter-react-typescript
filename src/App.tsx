import { Counter } from "./bases/Counter";
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./bases/CounterReducer";

function App() {
  return (
    <>
      <Counter />
      <CounterBy initialValue={5} />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;
