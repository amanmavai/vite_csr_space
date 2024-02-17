import Root from "./routes/root";
import {RouterProvider, createBrowserRouter, Link} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {path: "play", lazy: () => import("./routes/play")},
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;

function NoMatch() {
  return (
    <div className="flex  flex-col items-center gap-4 p-4 text-lg">
      <h2 className="text-orange-500">Nothing to see here!</h2>
      <p>
        <Link to="/" className="text-3xl text-blue-400">
          Back to Home Page
        </Link>
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="mt-8 flex flex-1 flex-col items-center gap-4 ">
      <h2 className="text-3xl text-green-500">Home</h2>
      {/* Placeholders for components */}
      <div className="w-96 border border-gray-200 p-4 text-justify"></div>
      <div className="w-96 border border-gray-200 p-4 text-justify"></div>
      <div className="w-96 border border-gray-200 p-4 text-justify"></div>
    </div>
  );
}
