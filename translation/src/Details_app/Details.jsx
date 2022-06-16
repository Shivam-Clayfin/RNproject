import React from "react";
import "./details.css";
import Single from "./Single";
class Details extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
        prDetails:{},
        flag:true
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://srngjson.herokuapp.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );
console.log(this.state.flag)

    return (
        <>{this.state.flag===false ? <Single  value={this.state.prDetails}/> : null   }

      <div className="Details">
        {items.map((item) => (
          <div className="card" key={item.id} onClick={()=>{this.setState((prev)=>{return {prDetails:item,flag:false}})}}>
            <img src={item.image} />
            <h4>{item.title}</h4>
            <h5> Price :{item.price}</h5>
             
          </div>
        ))}
      </div>
      </>
    );
  }
}

export default Details;
