import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <TodoListPage/>
        ),
      },
    {
        path: "/:id",
        element: (
          <TodoDetailsPage/>
        ),
      },

])
const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
    <RouterProvider router={router} />
);
