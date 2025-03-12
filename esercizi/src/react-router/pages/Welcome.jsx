import { Age } from "../components/Age";

const Welcome = ({ name }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>Welcome, {name}!</p>
      {<Age age={25} />}
    </div>
  );
};

export default Welcome;
