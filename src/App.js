import React from 'react';
import './App.css';
import Search from './search';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data : this.props.data,
      items: this.props.data.slice(0,8),
      input:"",
      display:"none",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e){
    const value = e.target.value;
    const data = this.state.data;
    let links = [];
    let count=0;
    let reg = new RegExp(value);
    for(let j=0;j<data.length,count<8;j++){
      if(reg.test(data[j])){
        links[count]=data[j];
        count++;
      } 
    }

    this.setState({
      input: value,
      items: [...links],
    })
}

  

  
  render(){
    
    return (
      <div className="App">
        <header>Get Set GO</header>
        <div>
          <span>
            <input type="text" name="" id="" placeholder="Type a URL...." value={this.state.input} onChange={this.handleOnChange}/>
          </span>
          <Search items={this.state.items} display={this.state.display}></Search>
        </div>
      </div>
    )
  }
}

export default App;
