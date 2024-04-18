"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";

/**
 * This is the task item component. It is used to render a single task in the
 * task list.
 */
interface Props {
  /** The title of the task */
  title: string;
  /** The description of the task */
  description: string;
  /** The date when the task is supposed to be completed */
  date: string;
  /** Whether the task is completed or not */
  isCompleted: boolean;
  /** The id of the task */
  id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  const { theme, deleteTask, updateTask } = useGlobalState();

  return (
    <TaskItemStyled theme={theme}>
      {/* The title of the task */}
      <h1>{title}</h1>
      {/* The description of the task */}
      <p>{description}</p>
      {/* The date when the task is supposed to be completed */}
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {/* Mark the task as completed or incomplete */}
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Incomplete
          </button>
        )}
        {/* Edit the task */}
        <button className="edit">{edit}</button>
        {/* Delete the task */}
        <button
          className="delete"
          onClick={() => {
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem;

