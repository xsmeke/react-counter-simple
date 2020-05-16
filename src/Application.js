import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }

    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
            console.log("Updating over ten");
            this.setState({overTen: true});
        }    
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        })
    }

    render() {

        let {count} = this.state;

        return (
            <div>
            <h1> You clicked the button {count} times! </h1>
            <HighScore 
                overTen={this.state.overTen}
                onReset={(e) => this.resetCount(e)}
            />
            <span>
                <button onClick={() => this.handleClick()}>CLick me!</button>
            </span>
            </div>
        );
    }

}

export default Application;