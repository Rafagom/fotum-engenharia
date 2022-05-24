import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "./components/Routes";
import { Widget } from "./components/Widget/Widget";

export function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Header />
        <Switch />
        <Footer />
      </BrowserRouter>
      <Widget />
    </div>
  );
}

export default App;
