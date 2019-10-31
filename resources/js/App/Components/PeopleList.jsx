import React from 'react';
 
export default class PoepleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            content: [],
        }
    }

    componentDidMount = () => {
        fetch(`http://www.mi-6.test/api/person`)
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    content: json_data,
                    loaded: true,
                })
            })
    }

    render() {
        if (this.state.loaded) {
            return (
                <>
                    <h1>List of people</h1>
                    {
                        this.state.content.map(person => (
                            <div key={person.id}>
                                <h4 >{person.name}</h4>
                                <img src={`images/${person.image.image_path}`} alt={person.name} />
                            </div>
                          ))
                    }
                </>
            )
        } else {
            return (
                <>
                    <h1>List of people</h1>
                    <div>Loading...</div>
                </>
            )
        }    
    }
}