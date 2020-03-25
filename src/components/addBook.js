import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            author: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        let title = this.state.title
        let author = this.state.author

        fetch("http://127.0.0.1:5000/book/input", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({title, author})
        })
        .then(response => {return response.json()})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push("/")})
        .catch(err => {
            console.log("Fetch error", err)
        })

    }

    render() {
        return (
            <div>
                <h1>Add a Book Below</h1>
                {console.log("state", this.state)}

                <form onSubmit = {this.handleSubmit}>
                    <div className="add-title">
                        <label>Title:</label>
                        <input 
                            type="text"
                            name = "title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="add-author">
                        <label>Author:</label>
                        <input 
                            type="text"
                            name = "author"
                            value={this.state.author}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="submit">
                        <button type = "submit" value="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}