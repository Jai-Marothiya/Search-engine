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
      search:[],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(e){
    const value = e.target.value;
    const data = this.state.data;
    let links = [];
    let count=0;
    let reg = new RegExp(value);
    this.setState({
      search:e.target,
    });

    data.forEach((ele) => {
      if(reg.test(ele) && count<8){
        links[count]=ele;
        count++;
      } 
    });
    this.setState({
      input: value,
      items: [...links],
    })
  }

  handleClick(e){

    

  }
  

  
  render(){
    window.addEventListener("click",(event)=>{
        if(event.target===this.state.search){
          this.setState({
          display:block,
          });
        }else{
          this.setState({
            display:none,
          });
        }
    });
    
    return (
      <div className="App">
        <header>Get Set GO</header>
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
