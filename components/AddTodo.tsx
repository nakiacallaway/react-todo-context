import React, {useState} from 'react';

interface AddTodoProps {
    addTodo: AddTodo;
}

const AddTodoComponent: React.FC<AddTodoProps> = ({addTodo}) => {
    const [todoItem, setTodoItem] = useState('');
    const handleSubmit = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
    }

    return (
        <div id='add-todo'>
            <div className="row my-5">
                <div className="col">
                    <form action="">
                        <div className="input-group">
                            <input type='text' className="form-control" 
                            value={todoItem} 
                            onChange={e =>setTodoItem(e.target.value)} />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" onClick={handleSubmit}  >
                                    Add Task
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default AddTodoComponent;