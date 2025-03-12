import { Age } from "./Age";

export const Welcome = ({ name, age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      <p>Your age is {age}</p>
      <Age age={25} />
    </>
  );
};
