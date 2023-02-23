import EstablishmentPage from "./pages/EstablishmentPage";
import ClassroomPage from "./pages/ClassroomPage";

const routes = [
  {
    path: "/establishments",
    children: <EstablishmentPage />,
  },
  {
    path: "/classrooms",
    children: <ClassroomPage />,
  },
];

export default routes;
