import { Age } from "./Age";
import { Message } from "./Message";

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
      <Message age={age} />
      <div>
        {age > 18 && <Age age={age} />}
        {age && <Age age={age} />}
        {age > 18 && age < 65 && <Age age={age} />}
        {age > 18 && name === "John" && <Age age={age} />}
      </div>
    </div>
  );
};

export default Welcome;
