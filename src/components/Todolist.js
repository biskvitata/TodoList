import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types'

const Todolist = (props) => {
  return (
    <>
      {props.todolist.map(item => (
        <Todoitem
          key={item.id}
          todoitem={item}
          changeToDoStatus={props.changeToDoStatus}
          removeToDo={props.removeToDo}
        />
      ))}
    </>
  );
}

Todolist.propTypes = {
  todolist: PropTypes.array.isRequired,
  changeToDoStatus: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
}

export default Todolist;
