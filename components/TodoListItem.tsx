import React from 'react';
import '../App.css';

interface TodoListItemProps {
    todo:Todo;
    updateTodo: UpdateTodo;
}

const TodoListItem:React.FC<TodoListItemProps> = ({todo, updateTodo}) => {
    return (
        <li className="list-group-item">
            <label htmlFor="">
                <input type="checkbox" checked={todo.completed} onChange={()=> updateTodo(todo)} />
            </label>{' '}
            
            <span className={todo.completed ? 'text-secondary complete' : undefined} > {todo.text}</span>
        </li>
    );
};

export default TodoListItem;