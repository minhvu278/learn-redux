import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Todos = ({todos}) => {

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

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, {})(Todos);