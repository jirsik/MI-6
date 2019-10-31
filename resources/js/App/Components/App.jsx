import React from 'react';

import PeopleList from './PeopleList.jsx';
import Form from './Form.jsx';

 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: false,
            token: null
        }
    }

    onLoginSuccess = (token) => {
 
        window.localStorage.setItem('_token', token)
     
        this.setState({
            logged_in: true,
            token: token
        })
    }

    render() {
        if (this.state.logged_in) {
            return (
                <>
                    <h1>App component</h1>
                    <PeopleList />
                </>
            )
        } else {
            return (
                <>
                    <h1>Login form</h1>
                    <Form 
                        login= {this.onLoginSuccess}
                    />
                </>
            )
        }
    }
}