"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

/**
 * The important page component.
 *
 * @returns {JSX.Element} The important page component
 */
function page() {
  // Fetch important tasks from global state
  const { importantTasks } = useGlobalState();

  // Render the component
  return <Tasks title="Important Tasks" tasks={importantTasks} />;
}

export default page;

