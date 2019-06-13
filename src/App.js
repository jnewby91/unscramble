import React from 'react'; 

const randomword = require('random-word'); 

export default class App extends React.Component{
    constructor(){
        super(); 
        this.state = {
            word: randomword
        }
    }

    
    render(){
        return (
            <div>
                <h1>Unscramble</h1>
                <p> Point of this Game is to guess what scrambled word is. You are provided a definition! Guess the answer in box below</p>
            </div>
        )

    }
}