import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NewTask from "../pages/newTask";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-task" element={<NewTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
