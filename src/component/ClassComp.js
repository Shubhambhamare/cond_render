import React, { Component } from 'react'

 class ClassComp extends Component {
     constructor() {
       super()
     
       this.state = {
          name:"click to see name"
       }
     }
     changeName(){
         this.setState({
             name:"Shubham"
         })
     }
  render() {
    return (
        <div>
      <div>{this.state.name}</div>
      <button onClick={()=>this.changeName()}>Click Here</button>
      </div>
    )
  }
}

export default ClassComp;