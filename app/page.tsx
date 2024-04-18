"use client";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

/**
 * The main page of the app.
 *
 * @returns {JSX.Element} The main page component
 */
export default function Home() {
  // Fetch data from global state
  const { tasks } = useGlobalState();

  // Render the component
  return (
    // Pass title and tasks to the Tasks component
    <Tasks
      title="All Tasks"
      // eslint-disable-next-line react/jsx-no-useless-fragment
      tasks={tasks}
    />
  );
}
