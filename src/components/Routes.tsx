import { Routes, Route } from "react-router-dom";
import { Contact } from "../routes/contact";
import { Services } from "../routes/services";
import { Home } from "./Home";

export function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    // <Switch></Switch>
  );
}
