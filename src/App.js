import React , { Component }from 'react';
import Navbar from '../src/containers/Navbar';
import Main from './component/Main'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }
  

  render(){

    return(
      <div className="background-app">
        <Navbar/>
        <Main/>
      </div>
    )
  }
}

export default App;
