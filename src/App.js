import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JewelryPage from "./pages/JewelryPage/JewelryPage";
import WatchesPage from "./pages/WatchesPage/WatchesPage";
import BagsPage from "./pages/BagsPage/BagsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <JewelryPage /> },
        { path: "/watches", element: <WatchesPage /> },
        { path: "/bags", element: <BagsPage /> },
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
