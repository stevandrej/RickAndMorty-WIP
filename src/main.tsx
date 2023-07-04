import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import CharactersPage from "./routes/characters";
import EpisodesPage from "./routes/episodes";
import LocationsPage from "./routes/locations";
import Home from "./routes/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="characters" element={<CharactersPage />} />
      <Route path="episodes" element={<EpisodesPage />} />
      <Route path="locations" element={<LocationsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
