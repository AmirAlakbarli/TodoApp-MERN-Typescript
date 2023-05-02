interface ITodo {
  _id: string;
  text: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type TodoProps = {
  todo: ITodo;
};

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
