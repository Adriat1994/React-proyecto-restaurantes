import React, { Component } from "react";
import { Button , Form  } from 'react-bootstrap';

export default class Profile extends Component {

constructor(props) {
    super(props);

    this.state = {
        name : '',
        description: '',
        ingredients: '',
        image: '',
    };

    this.handleChangeName= this.handleChangeName.bind(this);
    this.handleChangeDescription= this.handleChangeDescription.bind(this);
    this.handleChangeIngredients= this.handleChangeIngredients.bind(this);
    this.handleChangeImage= this.handleChangeImage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

}


handleChangeName(event) {
    this.setState({
        name: event.target.value,
    })
}

handleChangeDescription(event) {
    this.setState({
        description: event.target.value,
    })
}

handleChangeIngredients(event) {
    this.setState({
        ingredients: event.target.value,
    })
}

handleChangeImage(event) {
    this.setState({
        image: event.target.value,
    })
}


handleSubmit(event) {
    fetch('http://localhost:4000/platos/create', {
        method: 'POST',
        headers: {            
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : this.state.name,
            description : this.state.description,
            ingredients : this.state.ingredients,
            image: this.state.image,
        })
        
        
    });
    console.log("datos mandados")
    
}


render() {

    var divStyle = {
        color: 'red',
        margin: '150px 150px 160px 350px',
    };

    return (
        <div style={divStyle}>
            <Form>
                

                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control id="name" name="name" placeholder="name" onChange={this.handleChangeName} />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control id="description" name="description" placeholder="description" onChange={this.handleChangeDescription} />
                </Form.Group>


                <Form.Group controlId="ingredients">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control id="ingredients" name="ingredients" placeholder="ingredients" onChange={this.handleChangeIngredients} />
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control id="image" name="image" placeholder="image" onChange={this.handleChangeImage} />                    
                </Form.Group>

                <Button onClick={this.handleSubmit}>Enviar</Button>
            </Form>
        </div>
    );
}
}