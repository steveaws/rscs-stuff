import { cookiesClient } from '@/lib/utils/amplifyServerUtils';
import  AddTodoButton  from './AddTodoButton';

const fetchTodos = async () => {
  const { data: todos, errors } = await cookiesClient.models.Todo.list();

  if (!errors) {
    return todos;
  }
};

export const TodoList = async () => {
  const todos = await fetchTodos();
  return (
     <>
      <h1>Hello Todos 👋</h1>
      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content} - {todo.id}</li>)}
      </ul>
      <div>
        <AddTodoButton/>
      </div>
    </>
  )

}