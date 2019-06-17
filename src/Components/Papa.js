import React, { Component } from 'react'
import Beta from './Beta';
class Papa extends Component {

    constructor() {
        super()
        this.state = {
            papaName:'Papa'
        }
        this.greetPapa = this.greetPapa.bind(this)

    }
    greetPapa(beta) {
        alert('Hello'+this.state.papaName+' from '+beta)
    }

    render() {

        return (
            <div>
                <Beta greetHandler={this.greetPapa}/>
            </div>
                );
    }
}
export default Papa