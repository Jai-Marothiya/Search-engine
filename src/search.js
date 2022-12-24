import React from 'react';
import arrow from "./images/arrow.png"

class Row extends React.Component{
    render(){
        let value = this.props.item.substr(8);
        let i=0;

        while(value[i]!=='/'){
            i++;
        }

        value=value.substr(0,30);
        
        return(
            <li key={this.props.id} id={this.props.id}>
                <a href={this.props.item} key={this.props.id} target="_blank" rel="noreferrer">
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
        let rows =[],i=0;

        data.forEach((item) => {
            rows.push(
                <Row item={item} id={i}/>
            );
            i++;
            // console.log(i);
        });
        return(
            <ul style={{display:this.props.display}}>{rows}</ul>    
        );
    }
}

export default Search;