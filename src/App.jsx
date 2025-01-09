import { Route, Routes } from "react-router-dom";
import CustomCursor from "./ui/CustomCursor";
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import Archive from "./pages/Archive"; // Ensure this points to the correct Archive component
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import DashBoard from "./pages/DashBoard";
import { AuthProvider } from "./contexts/AuthProvider";
import ProjectsShow from "./features/dashboard/projects/ProjectsShow";
import AddProjectForm from "./features/dashboard/projects/AddProjectForm";
import AddSkillForm from "./features/dashboard/skills/AddSkillForm";
import SkillsShow from "./features/dashboard/skills/SkillsShow";
import EditProjectForm from "./features/dashboard/projects/EditProjectForm";
import EditSkillForm from "./features/dashboard/skills/EditSkillForm";
import ProjectDetails from "./features/projects/ProjectDetails";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <SpeedInsights />
      <QueryClientProvider client={queryClient}>
        <div className="group/spotlight relative">
          <CustomCursor />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Main />} />
              <Route path="home" element={<Main />} />
              <Route path="archive" element={<Archive />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route
                path="projectDetails/:projectId?"
                element={<ProjectDetails />}
              />
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashBoard />}></Route>
                <Route path="projectsShow" element={<ProjectsShow />} />
                <Route path="skillsShow" element={<SkillsShow />} />
                <Route path="addProject" element={<AddProjectForm />} />
                <Route path="addSkill" element={<AddSkillForm />} />
                <Route
                  path="editproject/:projectId"
                  element={<EditProjectForm />}
                />
                <Route path="editskill/:skillId" element={<EditSkillForm />} />
              </Route>
            </Route>
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
