import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const Todoitem = (props) => {
  const { changeToDoStatus, removeToDo, todoitem } = props;
  const { id, title, inProgress } = todoitem;

  return (
    <div style={stylingFunction(inProgress)}>
      <div>
        <Checkbox
          checked={!inProgress}
          onChange={changeToDoStatus.bind(this, id)}
          style={checkboxStyling}
        />

        {title}
      </div>

      <DeleteIcon
        onClick={removeToDo.bind(this, id)}
        style={iconStyling}
      />
    </div>
  );
}

const checkboxStyling = {
  marginRight: '20px'
}

const iconStyling = {
  cursor: 'pointer'
}

const stylingFunction = (inProgress) => {
  return {
    textDecoration: inProgress ? 'none' : 'line-through',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

Todoitem.propTypes = {
  todoitem: PropTypes.object.isRequired,
  changeToDoStatus: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
}

export default Todoitem;
