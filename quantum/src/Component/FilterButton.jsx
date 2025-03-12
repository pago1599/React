import clsx from "clsx";

export default function FilterButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-3 py-1 text-sm rounded-md transition-all",
        active
          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
          : "text-gray-500 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
