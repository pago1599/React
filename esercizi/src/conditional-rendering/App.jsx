import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <Welcome name="Fabio" age={25} />
      <Welcome name="John" age={18} />
    </div>
  );
};

export default App;
