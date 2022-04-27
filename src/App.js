import { useState } from "react";

import Content from "./content";

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App" style={{ padding:20} }>
      <button onClick={() => setShow(!show)}>togge</button>
      {show && <Content />}
    </div>
  );
}

export default App;
