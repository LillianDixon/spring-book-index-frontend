import React, { Component } from 'react';

export default class ViewBook extends Component {
    constructor(props){
        super(props)

        this.state = {
            singleBook: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params

        fetch(`http://127.0.0.1:5000/book/${id}`, {
            method: 'GET',
            headers: {
                'accepts': "application/json",
                "Content-Type" : 'application/json'
            }
        }).then(response => {return response.json()})
        .then(data => {this.setState({singleBook: data})
        console.log(data)
    }).catch(err => {
        console.log('Fetch error', err)
    })
    }

    render() {
        return (
            <div className="info-wrapper">
                <h1>Book Information</h1>
                <hr />
                <div className='book-title'>
                    {this.state.singleBook[1]}
                </div>
                <div className='book-author'>
                    {this.state.singleBook[2]}
                </div>
            </div>
        );
    }
}