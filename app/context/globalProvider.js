"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

// Context and Provider for accessing global state
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// GlobalProvider is used to wrap the app with global context
export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  // selectedTheme holds the current theme index in the themes array
  const [selectedTheme, setSelectedTheme] = useState(0);
  // isLoading is true while fetching tasks from API
  const [isLoading, setIsLoading] = useState(false);
  // modal is true when modal is open
  const [modal, setModal] = useState(false);
  // collapsed is true when sidebar is collapsed
  const [collapsed, setCollapsed] = useState(false);

  // tasks is an array of task objects
  const [tasks, setTasks] = useState([]);

  // theme is the current theme object
  const theme = themes[selectedTheme];

  // openModal opens the modal
  const openModal = () => {
    setModal(true);
  };

  // closeModal closes the modal
  const closeModal = () => {
    setModal(false);
  };

  // collapseMenu toggles the sidebar collapsed state
  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  // allTasks fetches all tasks from API and updates tasks state
  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");

      const sorted = res.data.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      setTasks(sorted);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // deleteTask deletes a task from API and updates tasks state
  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // updateTask updates a task in API and updates tasks state
  const updateTask = async (task) => {
    try {
      const res = await axios.put(`/api/tasks`, task);

      toast.success("Task updated");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // completedTasks is an array of completed tasks
  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  // importantTasks is an array of important tasks
  const importantTasks = tasks.filter((task) => task.isImportant === true);
  // incompleteTasks is an array of incomplete tasks
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  // useEffect fetches tasks when user is signed in
  React.useEffect(() => {
    if (user) allTasks();
  }, [user]);

  return (
    // Context and Provider for global state
    <GlobalContext.Provider
      value={{
        // theme object
        theme,
        // array of tasks
        tasks,
        // function to delete a task
        deleteTask,
        // boolean if fetching tasks
        isLoading,
        // array of completed tasks
        completedTasks,
        // array of important tasks
        importantTasks,
        // array of incomplete tasks
        incompleteTasks,
        // function to update a task
        updateTask,
        // boolean if modal is open
        modal,
        // function to open the modal
        openModal,
        // function to close the modal
        closeModal,
        // function to fetch all tasks
        allTasks,
        // boolean if sidebar is collapsed
        collapsed,
        // function to toggle sidebar collapsed state
        collapseMenu,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {/* GlobalProvider wraps the app with global context and provider */}
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

// useGlobalState retrieves the global state
export const useGlobalState = () => useContext(GlobalContext);
// useGlobalUpdate retrieves the global update context
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);

