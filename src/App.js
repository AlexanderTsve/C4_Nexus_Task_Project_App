import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JewelryPage from "./pages/JewelryPage/JewelryPage";
import WatchesPage from "./pages/WatchesPage/WatchesPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <JewelryPage /> },
        { path: "/watches", element: <WatchesPage /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
