import React, {useState} from 'react';
import {todoData} from './todoData';
import './App.css';
import AddTodoComponent from '../components/AddTodo';
import TodoListComponent from '../components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(todoData);
  
  const addTodo: AddTodo = todoItem => {
    setTodos([...todos, {text: todoItem, completed: false}]);
  };

  const updateTodo: UpdateTodo = selectedTodo => { 
    const updated = todos.map((todo:Todo, index) => {
      if (selectedTodo === todo){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    setTodos(updated);
  };

  return (
    <div className="container">
    <AddTodoComponent addTodo={addTodo}/>
    <TodoListComponent todos={todos} updateTodo={updateTodo} />
  </div>
  );
};

export default App;
