import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

export class Todocreate extends React.Component {
  state = {
    title: '',
    error: '',
  }

  updateTitle = (e) => {
    if (e.target.value.length === 0) {
      this.setState({ error : 'Title is too short.' });
    } else {
      this.setState({ error : '' });
    }
    this.setState({ title: e.target.value });
  }

  createTodo = (e) => {
    e.preventDefault();

    if (this.state.title) {
      this.props.createTodo(this.state.title);
      this.setState({ title : '' });
    } else {
      this.setState({ error : 'Title must be entered before adding the item.' });
    }    
  }

  render() {
    return (
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={this.createTodo}
        style={formStyling}
      >
        <TextField
          error={this.state.error.length > 0 ? true : false}
          id="outlined-basic" 
          label="Enter a todo.." 
          variant="outlined" 
          value={this.state.title}
          onChange={this.updateTitle}
          helperText={this.state.error}
          style={inputStyling}
          size="small"
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          style={buttonStyling}
        >
          Add todo
        </Button>
      </form>
    )
  }
}

const buttonStyling = {
  marginLeft: '10px',
  padding: '8px 16px'
}

const inputStyling = {
  minWidth: '300px'
}

const formStyling = {
  marginBottom: '20px'
}

Todocreate.propTypes = {
  createTodo: PropTypes.func.isRequired
}

export default Todocreate;