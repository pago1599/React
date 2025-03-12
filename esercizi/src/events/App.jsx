import { AlertClock } from "./AlertClock";

const App = () => {
  const showAlertClock = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  };
  return (
    <>
      <AlertClock alert={showAlertClock} />
    </>
  );
};

export default App;
