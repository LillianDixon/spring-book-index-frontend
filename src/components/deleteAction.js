import React from 'react';
import {Link} from 'react-router-dom';

export default function DeleteAction(props){

    function handleClick(){
        fetch(`http://127.0.0.1:5000/delete/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log("delete error", err)
        })
    }

    return(
        <div>
            <Link onClick={handleClick} to={'/deleted_book'}>Delete action</Link>
        </div>
    )
}