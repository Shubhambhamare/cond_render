import React, { Component } from 'react'

 class Cond extends Component {
     constructor() {
       super()
     
       this.state = {
          Condition:true
       }
     }
     render() {
        return (
            <div>
          <div>Conditional</div>
         { this.state.Condition?(<h1>welcome</h1>):(<h1>thank you</h1>)}
         
         </div>
        )
    

  }
}
export default Cond;