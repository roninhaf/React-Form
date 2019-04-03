import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';

class FormContainer extends Component {
    
    constructor() {
    
        super();

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            Vegan: false,
            Kosher: false,
            LactoseFree: false,
            dietary: []
        };

        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      
        const {name, value, type, checked} = event.target;
        
        type === "checkbox" ? 
        this.setState(prevState => {
            
            let nameIndex = prevState.dietary.indexOf(name);
            
            return {
                    [name]: checked,
                    dietary: checked ? prevState.dietary.concat(name) : prevState.dietary.slice(0, nameIndex).concat(prevState.dietary.slice(nameIndex+1))
            };  
        })
        
        :

        this.setState({
            [name]: value
        }); 
    }
  
    render() {
      
        return <FormComponent handleChange={this.handleChange} {...this.state}/>

    }

}

export default FormContainer;
