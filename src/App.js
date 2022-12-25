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
      result: 887,
      moreitems:[],
      resultClick:""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
  }

  handleOnChange(e){
    const data = this.props.data;
    let result =0;
    let insensetiveData = data;
    insensetiveData.forEach(data => {
      data.toString().toLowerCase();
    });
    let links = [];
    let morelinks = [];
    this.setState({
      input:e.target.value.toString().toLowerCase(),
      items:links,
    })
    const value = e.target.value;
    let count=0;
    let reg = new RegExp(value);

    for(let j=0;j<data.length;j++){
      if(reg.test(insensetiveData[j]) && count<8){
        links[count]=data[j];
        count++;
        result--;
      }
      if(reg.test(insensetiveData[j])){
        if(result>=0){
          morelinks[result]=data[j];
        }
        result++;
      } 
    }

    this.setState({
      result:result,
      moreitems:morelinks,
    })
  }

  handleClick(e){
    this.setState({
      search:e.target,
    });
  }

  handleResultClick(e){
    this.setState({
      resultClick:e.target,
    });

    if(this.state.items.length<=8 && this.state.result>0){
      this.setState({
        items:this.state.moreitems,
      })
    }else{
      this.setState({
        items:this.state.items.slice(0,8),
      })
    }
  }

  render(){

    window.addEventListener("click",(event)=>{
      if(event.target===this.state.search || event.target === this.state.resultClick){
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
          <span className='input'>
            <input type="text" name="" id="" placeholder="Type a URL...." value={this.state.input} onChange={this.handleOnChange} onClick={this.handleClick}/>
          </span>
          <Search items={this.state.items} display={this.state.display} result={this.state.result} moreitems={this.state.moreitems}></Search>
          <span className="results" style={{display:this.state.display}} onClick={this.handleResultClick}>{this.state.result} more items</span>
        </div>
      </div>
    )
  }
}

export default App;
