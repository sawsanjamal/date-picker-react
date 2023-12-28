import { useState } from "react";
import { DatePicker } from "./datepicker";
import "./styles.css";

function App() {
  const [value, setValue] = useState(new Date());
  return <DatePicker value={value} onChange={setValue} />;
}

export default App;
