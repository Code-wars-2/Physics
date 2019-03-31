import React, { Component } from 'react';
const force = {
  x:0,
  y:0.01
};
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      vel:{
        x:475,
        y:0
      },
    }
  }
  componentDidMount(){
    this.gravity();
  }
  gravity = () => {

    let vel = this.state.vel;
    let acc = force;
    
    acc.x = acc.x + force.x;
    acc.y = acc.y + force.y

    vel.x = vel.x + acc.x;
    vel.y = vel.y + acc.y; 

    this.setState({
      vel:{
        x:vel.x,
        y:vel.y
      }
    })
    //setTimeout(this.gravity,50)
  }

  render() {
    return (
      <div className="boundary"> 
        <div 
          className="object" 
          style={{ 
            left: this.state.vel.x+"px",
            top: this.state.vel.y+"px",         
            }}
        ></div>
      </div>
    );
  }
}

export default App;
