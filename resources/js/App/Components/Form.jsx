import React from 'react';
 
export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
        }
    }

    handleSubmit = (event) => {
        // prevent the default event behaviour
        event.preventDefault();
     
        // do something else instead ...
        fetch(`http://www.mi-6.test/api/login`, {
            method: 'POST',
            headers: {
                    'Accept':       'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
           
        })
        .then(response => response.json())
        .then(json_data => {
            this.props.login(json_data.data.token)
        })

        this.setState({
            favourite: !this.state.favourite
        })            
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form action="" method="post" onSubmit={this.handleSubmit}>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input type="submit" value="log in" />
            </form>
        )
    }
}