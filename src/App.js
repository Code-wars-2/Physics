import React, { Component } from 'react';
const force = 0.1;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      x:475,
      y:20
    }
  }
  componentDidMount(){
    this.gravity();
  }
  gravity = () => {
    let x = 0;
    let y = 10;
    this.setState({
      x:this.state.x+x,
      y:this.state.y+y
    })
    //setTimeout(this.gravity,20)
  }

  render() {
    return (
      <div className="boundary"> 
        <div 
          className="object" 
          style={{ 
            left: this.state.x+"px",
            top: this.state.y+"px",         
            }}
        ></div>
      </div>
    );
  }
}

export default App;
