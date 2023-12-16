import { ChangeEvent, useState } from "react";

const useForm = <Values extends object>(initialState: Values) => {
  const [state, setState] = useState<Values>(initialState);

  const changeFieldValue = (fieldName: keyof Values) => (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    values: state,
    setForm: setState,
    resetForm: reset,
    changeFieldValue,
  };
};

export default useForm;
