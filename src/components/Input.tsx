import "./Input.scss";

import classnames from "classnames";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

import { toastActions } from "@/features/Toast";
import { TODO, todoActions } from "@/features/Todo";
import { useHotkey } from "@/hooks/useHotkey";
import { useTouchStyle } from "@/hooks/useTouchStyle";
import { useValidateInput } from "@/hooks/useValidateInput";

export const Input = () => {
  const dispatch = useDispatch();
  const [val, setVal, isError, isEmpty] = useValidateInput();

  const onChangeInput = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(target.value);
  };
  const onClickSubmit = () => {
    if (isEmpty || isError) {
      return;
    }

    dispatch(
      todoActions.add({
        contents: val,
        createdTime: new Date().getTime()
      })
    );
    setVal("");
  };

  const textAreaStyle = classnames("input-textarea", {
    "input-textarea--warning": isError
  });
  const submitButtonStyle = classnames("btn-submit", {
    "btn-submit--warning": isError
  });
  const touchStyleProps = useTouchStyle(submitButtonStyle, "btn-submit--selected")

  useEffect(() => {
    if (isError) {
      dispatch(toastActions.open(TODO));
    }
  }, [val, isError, setVal, dispatch]);
  useHotkey('command+enter', () => onClickSubmit())

  return (
    <section className="input">
      <textarea
        className={textAreaStyle}
        onChange={onChangeInput}
        value={val}
        placeholder="Enter the TODO item"
        wrap="off"
      />
      <button {...touchStyleProps} onClick={onClickSubmit}>
        Submit
      </button>
    </section>
  );
};
