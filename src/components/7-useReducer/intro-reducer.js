const initialState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  return state;
};

let todos = todoReducer();
console.log(todos);
