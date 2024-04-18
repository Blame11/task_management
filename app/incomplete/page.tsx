"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

/**
 * The incomplete tasks page.
 *
 * @returns {JSX.Element} The incomplete tasks page component
 */
function page() {
  const { incompleteTasks } = useGlobalState();
  // Fetch incomplete tasks from global state

  // Render the component
  return (
    // Pass title and incomplete tasks to the Tasks component
    <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />
  );
}

export default page;

