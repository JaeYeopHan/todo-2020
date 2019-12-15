import "./Toast.scss";

import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "@/features";
import { IToast, TOAST, toastActions } from "@/features/Toast";

interface IToastProps {
  children: ReactNode;
}

export const Toast = (props: IToastProps) => {
  const dispatch = useDispatch();
  const toast = useSelector<IRootState, IToast>(state => state[TOAST]);
  const isOpen = toast["error-test"];

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="toast-dimmed">
      <div className="toast-wrapper">
        <h3>Info</h3>
        <div>{props.children}</div>
        <button
          className="toast-button"
          onClick={() => dispatch(toastActions.close("error-test"))}
        >
          OK
        </button>
      </div>
    </div>
  );
};
