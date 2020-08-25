import { url } from "inspector";

let todos = [
  {
    id: 1,
    name: "待办1",
    done: false,
  },
  {
    id: 2,
    name: "待办2",
    done: false,
  },
  {
    id: 3,
    name: "待办23423",
    done: false,
  },
];

type Url = "/api/todos" | "/api/toggle" | "/api/add";

const axios = <T>(url: Url, payload?: any): Promise<T> | never => {
  let data;
  switch (url) {
    case "/api/todos":
      data = todos.slice();
      break;
    case "/api/toggle":
      const todo = todos.find(({ id }) => id === payload);
      if (todo) {
        todo.done = !todo.done;
      }
      break;
    case "/api/add":
      todos.push(payload);
      break;
    default:
      throw new Error(data as any);
      break;
  }
  return Promise.resolve(<any>data);
};

export default axios;
