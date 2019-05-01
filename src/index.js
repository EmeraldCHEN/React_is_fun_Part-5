
import React from 'react';
//import React, {Component} from 'react';

//import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class FavoriteColorForm extends React.Component {
    state = { value:''}
    newColor = e => 
        this.setState({ value: e.target.value })

    submit = e =>{
       console.log(`New Color: ${this.state.value}`);  // https://eslint.org/docs/rules/no-template-curly-in-string    
                                                      // ECMAScript 6 allows programmers to create strings containing variable or expressions using template literals, instead of string concatenation, by writing expressions like ${variable} between two backtick quotes (`)                             
       e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <label> Favorite Color:
                    <input 
                        type="color" 
                        onChange={this.newColor}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

render(
    <FavoriteColorForm />, document.getElementById('root')
)

