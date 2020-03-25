import React, { Component } from 'react';

export default class UpdateBook extends Component {
    constructor(props){
        super(props)

        this.state={
            id: '',
            title: "",
            author: "",
            formHidden: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.editBook = this.editBook.bind(this)
    }

    handleSubmit(event){
        // event.preventDefault();
        let id = this.state.id
        let title = this.state.title;
        let author = this.state.author;

        fetch(`http://127.0.0.1:5000/update_book/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, author: author})
        }).then(res => (res.json()))
        .then(responseData => {return responseData})
        // .then(() => {this.props.history.push('/')})
        .catch(err => console.log("update error", err))
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editBook(){
        this.setState({id: this.props.ourProp[0]})
        this.setState({title: this.props.ourProp[1]})
        this.setState({author: this.props.ourProp[2]})
        this.setState({formHidden: !this.state.formHidden})
    }

    render() {
        return (
            <div>
                <button onClick={this.editBook}>update book</button>
                <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? "hidden": "visible"}}>
                    {console.log("our props",this.props.ourProp)}
                    <input
                    type = 'text'
                    name="title"
                    value = {this.state.title}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    type = 'text'
                    name="author"
                    value = {this.state.author}
                    onChange={this.handleChange}></input>
                    <button 
                        type="submit" value="submit">
                            Save Update
                    </button>
                </form>
            </div>
        );
    }
}