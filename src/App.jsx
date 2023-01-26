import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Weather></Weather>
      <Footer></Footer>
    </div>
  );
}

export default App;
