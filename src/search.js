import React from 'react';
import arrow from "./images/arrow.png"

class Row extends React.Component{
    render(){
        return(
            <li key={this.props.id} id={this.props.id}>
                <a href={this.props.item} key={this.props.id} target="_blank" rel="noreferrer">
                    <img src={arrow} alt="" />
                    {this.props.item.substr(8,20)}
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
            <ul>{rows}</ul>    
        );
    }
}

export default Search;