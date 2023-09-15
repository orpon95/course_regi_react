import { useState } from "react";

import "./App.css";
import Courses from "./component/courses/courses";
import Header from "./component/header/header";
// import Courses from "./component/courses/courses"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Courses></Courses>
    </>
  );
}

export default App;
