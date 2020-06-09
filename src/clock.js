import React from 'react';
import './scss/clock.scss';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            ()=> this.tick(),
            1000
        ); 
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
  render() {
    return (
      <p>
        The time is {this.state.time}
      </p>
    );
  }
}
export default Clock;