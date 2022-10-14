import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {deleteTodo, getTodos, markComplete} from "../store/actions/todoAction";

const Todos = ({todos, getTodos, markComplete, deleteTodo}) => {
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className='todo-list'>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.complete ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox" onChange={() => markComplete(todo.id)}/>
                        <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, {getTodos, markComplete, deleteTodo})(Todos);