import { useState } from "react";
import Values from 'values.js';
import DisplayColor from "./DisplayColor";
import FormColor from "./FormColor";

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  return (
    <section>
      <FormColor setList={setList} />
      <DisplayColor list={list} />
    </section>
  );
}

export default App;
