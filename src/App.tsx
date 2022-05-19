import { useState } from "react";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { Advantages } from "./components/Advantages";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Switch } from "./components/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Switch />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
