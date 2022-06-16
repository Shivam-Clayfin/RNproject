import React,{Component} from "react";
import './counter.css';

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = e => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
    
  };
  handleClick2 = e => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div>
        <div className="counter"><p style={{background:this.state.count==0?"red":this.state.count>0?"green":"yellow"}}>{this.state.count}</p></div>
       <div>
       <button className="block" onClick={this.handleClick}>Increment</button>
       <button className="block" onClick={this.handleClick2}>Dicrement</button>
       </div>
      </div>
    );
  }
}
