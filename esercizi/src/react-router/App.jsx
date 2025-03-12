import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Counter from "./pages/Counter";
import ShowGithubUsers from "./pages/ShowGithubUsers";
import Navbar from "./components/Navbar";
import ShowGithubUser from "./components/ShowGithubUser";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome name={"Fabio"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<ShowGithubUsers />}>
          <Route path=":username" element={<ShowGithubUser />} />
          <Route index element={<p>Add a user and select it</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
