import React from 'react';
import './App.css';
import Search from './search';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: this.props.data.slice(0,8),
      input:"",
      display:"none",
      search:"",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(e){
    const data = this.props.data;
    let links = [];
    this.setState({
      input:e.target.value,
      items:links,
    })
    const value = e.target.value;
    let count=0;
    let reg = new RegExp(value);

    for(let j=0;j<data.length;j++){
      if(reg.test(data[j]) && count<8){
        links[count]=data[j];
        count++;
      } 
    }
  }

  handleClick(e){
    this.setState({
      search:e.target,
    });
  }

  render(){

    window.addEventListener("click",(event)=>{
      if(event.target===this.state.search){
        if(this.state.display!=="block"){
          this.setState({
            display:"block",
          });
        }
      }else{
        if(this.state.display!=="none"){
          this.setState({
            display:"none",
          });
        }
      }
    });
    
    return (
      <div className="App">
        <header><span style={{color:"blue"}}>Get</span> <span style={{color:"green"}}>Set</span> <span style={{color:"red"}}>Go</span></header>
        <div>
          <span>
            <input type="text" name="" id="" placeholder="Type a URL...." value={this.state.input} onChange={this.handleOnChange} onClick={this.handleClick}/>
          </span>
          <Search items={this.state.items} display={this.state.display}></Search>
        </div>
      </div>
    )
  }
}

export default App;
