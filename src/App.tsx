import {ComboboxWrapper} from "./components/custom/combobox_wrapper";
import {PresetSave} from "./components/custom/preset_save";
import {SelectWrapper} from "./components/custom/select_wrapper";
import {SwitchWrapper} from "./components/custom/switch_wrapper";
import {Button} from "./components/ui/button";
import Root from "./routes/root";
import {RouterProvider, createBrowserRouter, Link} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {path: "play", lazy: () => import("./routes/play")},
      {path: "traffic-light", lazy: () => import("./routes/traffic-light")},
      {path: "layouts", lazy: () => import("./routes/layouts")},
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
    <div className="mt-8 flex flex-col items-center gap-4 ">
      <h2 className="text-3xl text-primary">Demo Components</h2>
      {/* Placeholders for components */}
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <ComboboxWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <SelectWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <SwitchWrapper />
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <Button size="lg" className="text-lg">
          Express
        </Button>
      </div>
      <div className="w-96 border border-gray-200 p-4 text-justify">
        <PresetSave />
      </div>
    </div>
  );
}
