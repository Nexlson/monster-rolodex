import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card_list/card-list.component';
import {SearchBox} from './components/search_box/search-box.component'

// Class implementation
class App extends Component{
  constructor(){

    super();

    this.state = {
      monsters: [],
      searchKeyWord: ''
    }

    // Pass this context to function
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  //  Or use Es6 Syntax (Arrow function)
  handleChange = (e) => {
    this.setState({searchKeyWord: e.target.value})
  }

  render(){
    const { monsters, searchKeyWord } = this.state;
    const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchKeyWord.toLowerCase()))


    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="monster name" handleChange={this.handleChange}/>
        <CardList monsters={filtered}/>
      </div>
    );
  }
}


export default App;
