import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component{

    render(){
        return (
            <div>
                Grid
            </div>
        );
    }
}

class Main extends React.Component{
    constructor(){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        }
    }
    render(){
        return (
            <div>
                <h1>The game of life</h1>
                <Grid 
                gridFull = {this.state.gridFull}
                rows={this.rows}
                cols={this.cols}
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));