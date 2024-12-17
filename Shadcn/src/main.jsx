import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.jsx";
import { Home, Dashboard, About, Blog, Contract } from "./Components/index.js";
import { MailComponent } from "./Components/Mail/Components/Mail.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contract" element={<Contract />} />
      <Route path="blog" element={<Blog />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="mail" element={<MailComponent />} className="md:mt-60" />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
