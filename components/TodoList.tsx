import React from 'react';
import TodoListItem from './TodoListItem';

interface TodoListProps {
    todos:Todo[];
    updateTodo: UpdateTodo;
};

const TodoListComponent: React.FC<TodoListProps> = ({todos, updateTodo}) => {
    return (
        <div id='todo-list'>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {todos.map((todo, index) => {
                            return (
                                <TodoListItem todo={todo} updateTodo={updateTodo} key={index} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoListComponent;