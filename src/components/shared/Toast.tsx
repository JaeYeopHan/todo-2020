import "./Toast.scss";

import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DrawerTransition } from '@/components/shared/transition/DrawerTransition'
import { IRootState } from "@/features";
import { IToast, TOAST, toastActions } from "@/features/Toast";

interface IToastProps {
  children: ReactNode;
  id: string;
  onClose?: (...args: any[]) => any;
}

export const Toast = (props: IToastProps) => {
  const dispatch = useDispatch();
  const toast = useSelector<IRootState, IToast>(state => state[TOAST]);
  const isOpen = toast[props.id];

  return (
    <div className="toast-dimmed" style={{ display: isOpen ? 'block' : 'none' }}>
      <DrawerTransition in={isOpen}>
        <div className="toast-wrapper">
          <h3 className="toast-title">Info</h3>
          <div className="toast-contents">{props.children}</div>
          <button
            className="toast-button"
            onClick={() => {
              dispatch(toastActions.close(props.id));
              if (props.onClose) {
                props.onClose();
              }
            }}
          >
            OK
        </button>
        </div>
      </DrawerTransition>
    </div>
  );
};
