import React from 'react';
import arrow from "./images/arrow.png"

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            history:JSON.parse(localStorage.getItem('lists')) || [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props){
        // let lists = this.state.history;
        localStorage.setItem('lists',JSON.stringify(props));
    }


    render(){
        let value = this.props.item;
        let i=0;

        while(value[i]!=='/'){
            i++;
        }

        value=value.substr(0,30);
        
        return(
            <li className='list'>
                <a href={this.props.item} target="_blank" rel="noreferrer" onClick={this.handleClick(this.props.item)}>
                    <img src={arrow} alt="" />
                    {value}
                </a>
            </li>
         )
    }
}

class Search extends React.Component{
    render(){
        let data = this.props.items;
        let rows =[];
        // let moredata = this.props.moreitems;
        // let result =this.props.result;

        data.forEach((item,index) => {
            rows.push(
                <Row item={item} id={index} key={index}/>
            );
        });

        return(
            <ul style={{display:this.props.display}}>{rows}</ul>    
        );
    }
}

export default Search;