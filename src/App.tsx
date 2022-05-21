import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "./components/Routes";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
