import "./Input.scss";

import classnames from "classnames";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

import { toastActions } from "@/features/Toast";
import { todoActions } from "@/features/Todo";
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

  useEffect(() => {
    if (isError) {
      dispatch(toastActions.open("error-test"));
      // 전체 dimmed popup을 띄운다.
      // 해지 시, 현재 value에 있는 값에서 마지막 스트링을 제거한다.
    }
  }, [val, isError, setVal, dispatch]);

  return (
    <section className="input">
      <textarea
        className={textAreaStyle}
        onChange={onChangeInput}
        value={val}
        placeholder="Enter the TODO item"
        wrap="off"
      />
      <button className={submitButtonStyle} onClick={onClickSubmit}>
        Submit
      </button>
    </section>
  );
};
