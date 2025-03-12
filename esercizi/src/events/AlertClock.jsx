export const AlertClock = ({ alert }) => {
  return (
    <div className="p-4">
      <button
        className=" cursor-pointer text-4xl text-blue-400 bg-gray-300 rounded-xl p-6 border-2"
        onClick={alert}
      >
        Show Time
      </button>
    </div>
  );
};
