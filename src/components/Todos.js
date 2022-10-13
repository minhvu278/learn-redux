import React, {useState} from 'react';

const Todos = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Viec 1',
            complete: false
        },
        {
            id: 2,
            title: 'Viec 2',
            complete: false
        },
        {
            id: 3,
            title: 'Viec 3',
            complete: false
        },
    ])

    return (
        <div className='todo-list'>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <input type="checkbox"/>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;