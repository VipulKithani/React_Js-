import React, { Component } from 'react'
class UserGreeting extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedin: true,
            message1: 'Welcome Vipul',
            message2: 'Welcome Guest'
        }
    }
 
    render() {
        let message


        if (this.state.isLoggedin) {
            message = <div>{this.state.message1}</div>
        }
        else {
            message = <div>{this.state.message2}</div>
        }

       
        return <div>{message}
        </div>
            
        
    }
}
export default UserGreeting