import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Entrance } from "./components/Entrance";
import { Login } from "./components/Login";

function App() {
  // ルート定義の作成
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Entrance />,
    },
    {
      path: "/entrance",
      element: <Entrance />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  // RouterProviderに定義したrouterを渡す
  return <RouterProvider router={router} />;
}

export default App;

