import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                username: "Fefe",
                todo: "wiggle",
                isDone: false
            },
                {
                    username:"Gege",
                    todo:"shuffle",
                    isDone:"true"

                }
            ]
        }
    }
    deleteID(id){
        console.log(id);
        fetch('/api/todo',
            {
                method:"DELETE",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json());

    }

    render() {
        fetch('/api/todos/Newentry1')
            .then(data => data.json())
            .then(response => this.setState({data: response}));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <TodoList arr={this.state.data} deletion={this.deleteID}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

            </div>
        );
    }
}

export default App;
