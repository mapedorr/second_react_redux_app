import { GET_TODOS, GET_TODOS_ERR } from '../actions/actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      // Agrupar los TODO por usuario
      let todosByUser = action.todos.reduce((acc, todo, idx) => {
        const { id, title, completed } = todo;
        const _todo = { id, title, completed };

        if (acc[todo.userId] === undefined) {
          acc[todo.userId] = {
            id: todo.user.id,
            user: { ...todo.user },
            todos: [_todo],
          };
        } else {
          acc[todo.userId].todos.push(_todo);
        }

        return acc;
      }, {});
      return { ...state, ...todosByUser };
    case GET_TODOS_ERR:
      console.log('¡ERR!', action.msg, action.error);
      return state;
    default:
      return state;
  }
};

export default todos;
