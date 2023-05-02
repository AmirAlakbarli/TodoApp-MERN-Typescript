import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

function AddTodo({ saveTodo }: Props) {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      text: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Text</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
}

export default AddTodo;
