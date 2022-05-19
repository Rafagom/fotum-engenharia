import { Advantages } from "./Advantages";
import { Form } from "./Form";
import { Welcome } from "./Welcome";
import { Welcome2 } from "./Welcome2";

export function Home() {
  return (
    <>
      <Welcome2 deviceType={undefined} />
      <Advantages />
      <Form />
    </>
  );
}
