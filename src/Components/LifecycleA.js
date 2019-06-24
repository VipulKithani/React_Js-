import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
        super(props)
        console.log('LifecycleA Constructor')
        this.state = {
            name:'Vipul'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidmount')

    }

    render() {
        console.log("LifecycleA Render")
        return (

            <div>Mounting Phase <br /> LifeCycle A

                 <LifecycleB/>
                </div>
           
            );

    }
}
export default LifecycleA