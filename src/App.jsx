import { Route, Routes } from "react-router-dom";
import CustomCursor from "./ui/CustomCursor";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense } from "react";
import LoadingPage from "./features/loading/LoadingPage";
// import Login from "./pages/Login";

// Lazy load pages/components
const Main = React.lazy(() => import("./pages/Main"));
const Archive = React.lazy(() => import("./pages/Archive"));
const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const ProjectsShow = React.lazy(() =>
  import("./features/dashboard/projects/ProjectsShow")
);
const AddProjectForm = React.lazy(() =>
  import("./features/dashboard/projects/AddProjectForm")
);
const AddSkillForm = React.lazy(() =>
  import("./features/dashboard/skills/AddSkillForm")
);
const SkillsShow = React.lazy(() =>
  import("./features/dashboard/skills/SkillsShow")
);
const EditProjectForm = React.lazy(() =>
  import("./features/dashboard/projects/EditProjectForm")
);
const EditSkillForm = React.lazy(() =>
  import("./features/dashboard/skills/EditSkillForm")
);
const ProjectDetails = React.lazy(() =>
  import("./features/projects/ProjectDetails")
);

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <SpeedInsights />
      <QueryClientProvider client={queryClient}>
        <div className="group/spotlight relative">
          <CustomCursor />
          <Suspense fallback={<LoadingPage />}>
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
                  <Route path="dashboard" element={<DashBoard />} />
                  <Route path="projectsShow" element={<ProjectsShow />} />
                  <Route path="skillsShow" element={<SkillsShow />} />
                  <Route path="addProject" element={<AddProjectForm />} />
                  <Route path="addSkill" element={<AddSkillForm />} />
                  <Route
                    path="editproject/:projectId"
                    element={<EditProjectForm />}
                  />
                  <Route
                    path="editskill/:skillId"
                    element={<EditSkillForm />}
                  />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
