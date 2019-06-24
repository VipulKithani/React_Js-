import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic:'react'
        }
    }
    changeusername = event => {
        this.setState({
            username: event.target.value
        })
    }
    changecomments = event => {
        this.setState({
            comments:event.target.value
        })
    }
    changetopic = event => {
        this.setState({
            topic:event.target.value
        })
    }
    handlesubmit = (username, comments, topic) => {
        alert(this.state.username + " " + this.state.comments + " " + this.state.topic)

}

    render() {

        
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text'
                            value={this.state.username}
                            onChange={this.changeusername}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments}
                            onChange={this.changecomments}
                        />

                        
                    </div>
                    <div>
                        <label>
                            Topic
                        </label>
                        <select value={this.state.topic}
                            onChange={this.changetopic}
                        >
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                    

                 </form>
            </div>

            );
    }
}
export default Form