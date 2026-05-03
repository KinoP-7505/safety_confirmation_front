import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Entrance } from "./components/Entrance";
import { Login } from "./components/Login";
import { SamplePage1 } from "./components/SamplePage1";
import { SamplePage2 } from "./components/SamplePage2";
import { SamplePage3 } from "./components/SamplePage3";
import { MainPage } from "./components/MainPage";

function App() {
  // ルート定義の作成
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Entrance />, //メインページレイアウト
      children: [
        {
          index: true, // path: "/"の場合
          element: <MainPage />,
        },
        {
          path: "/entrance",
          element: <Entrance />,
        },
        {
          path: "/samp1",
          element: <SamplePage1 />,
        },
        {
          path: "/samp2",
          element: <SamplePage2 />,
        },
        {
          path: "/samp3",
          element: <SamplePage3 />,
        },
      ],
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

