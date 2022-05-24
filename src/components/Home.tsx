import { Advantages } from "./Advantages";
import { ContactForm } from "./Form";

import { Welcome } from "./Welcome";

export function Home() {
  return (
    <>
      <Welcome />
      <Advantages />
      <ContactForm />
    </>
  );
}
