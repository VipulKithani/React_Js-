import React, { Component } from 'react'
class LifecycleB extends Component {
    constructor(props) {
        super(props)
        console.log('LifecycleB Constructor')
        this.state = {
            name: 'Vipul'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidmount')

    }

    render() {
        console.log("LifecycleB Render")
        return (

            <div>LifeCycle B</div>

        );

    }
}
export default LifecycleB