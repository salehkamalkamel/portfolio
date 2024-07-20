import { Route, Routes } from "react-router-dom";
import CustomCursor from "./ui/CustomCursor";
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import Archive from "./pages/Archive"; // Ensure this points to the correct Archive component

function App() {
  return (
    <div className="group/spotlight relative">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path="home" element={<Main />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
