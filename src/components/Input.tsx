import "./Input.scss";

import React, { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

import { todoActions } from "@/features/Todo";
import { useValidateInput } from "@/hooks/useValidateInput";

interface IInputProps {}

export const Input = (props: IInputProps) => {
  const dispatch = useDispatch();
  const [val, setVal, isError, isEmpty] = useValidateInput();

  const onChangeInput = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(target.value);
  };
  const onClickSubmit = () => {
    if (isEmpty) {
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

  useEffect(() => {
    console.log(isError);
  }, [val, isError]);

  return (
    <section className="input">
      <textarea
        className="input-textarea"
        onChange={onChangeInput}
        value={val}
        placeholder="Enter the TODO item"
        wrap="off"
      />
      <button className="btn-submit" onClick={onClickSubmit}>
        Submit
      </button>
    </section>
  );
};
