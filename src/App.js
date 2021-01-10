import './App.css';
import Todolist from './components/Todolist'
import React from 'react';
import Header from './components/layout/Header';
import Todocreate from './components/Todocreate';
import Axios from 'axios';

class App extends React.Component {
  state = {
    todolist: [
      {
        id: new Date().getTime(),
        title: 'lorem ipsum',
        inProgress: false
      },
      {
        id: new Date().getTime() + 1,
        title: 'lorem ipsum, ala bala',
        inProgress: true
      },
      {
        id: new Date().getTime() + 2,
        title: 'somethin something',
        inProgress: false
      }
    ]
  }

  // Axios CRUD requests
  // createItem(item) {
  //   Axios.post('https://reqres.in/api/users', item)
  //     .then(res => this.setState({todolist: [...this.state.todolist, res.data.data]}));
  // }
  // readItems() {
  //   Axios.get('https://reqres.in/api/users')
  //     .then(res => this.setState({todolist: res.data.data}));
  // }
  // updateItem(id, item) {
  //   Axios.put(`https://reqres.in/api/users/${id}`, item)
  //     .then(res => this.setState({todolist: [...this.state.todolist.forEach((item, index) => {
  //       if (item.id === id) {
  //         this.state.todolist[index] = res.data.data
  //       }
  //     })]}));
  // }
  // deleteItem(id) {
  //   Axios.delete(`https://reqres.in/api/users/${id}`)
  //     .then(res => this.setState({todolist: [...this.state.todolist.filter(item => item.id !== id)]}));
  // }
  // componentDidMount() {
  //   this.readItems();
  // }

  removeToDo = (id) => {
    this.setState({todolist: [...this.state.todolist.filter(item => item.id !== id)]})
  }

  changeToDoStatus = (id) => {
    this.setState({todolist: this.state.todolist.map(item => {
      if (item.id === id) {
        item.inProgress = !item.inProgress;
      }
      return item;
    })})
  }

  createTodo = (title) => {
    const listItem = {
      id: new Date().getTime(),
      title,
      inProgress: true
    }
    this.setState({ todolist: [...this.state.todolist, listItem]})
  }

  render() {
    return (
      <div style={bodyStyling}>
        <div style={wrapperStyling}>
          <Header/>

          <Todocreate createTodo={this.createTodo}/>

          <Todolist 
            todolist={this.state.todolist}
            changeToDoStatus={this.changeToDoStatus}
            removeToDo={this.removeToDo}
          />
        </div>
      </div>
    );
  }
}

const bodyStyling = {
  display: 'flex',
  justifyContent: 'center'
}

const wrapperStyling = {
  padding: '30px'
}

export default App;
