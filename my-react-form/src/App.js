import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
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
      
        const renderedInfoStyle = {color: 'rgb(56, 56, 56)', fontSize: '22px'};

        return (

            <div className="genDiv">
                
                <div className="headerImg">
                    <div><h1>This is your new airline</h1></div>
                    <div><h2>Where will you go ?</h2></div>
                </div>

                <main>

                    <h1>Please use this form:</h1>

                    <form>
                        
                        <input 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange} 
                            placeholder="First Name" 
                        />
                        
                        <br />
                        
                        <input 
                            name="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleChange} 
                            placeholder="Last Name" 
                        />
                        
                        <br />
                        
                        <input 
                            name="age" 
                            value={this.state.age}
                            onChange={this.handleChange} 
                            placeholder="Age" 
                        />
                        
                        <br />
                        
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="Male"
                                onChange={this.handleChange}
                            /> Male
                        </label>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="Female"
                                onChange={this.handleChange}
                            /> Female
                        </label>
                        
                        <br />
                        
                        <select 
                            value={this.state.destination} 
                            name="destination" 
                            onChange={this.handleChange}
                        >
                            <option value="">-- Please Choose a destination --</option>
                            <option value="Germany">Germany</option>
                            <option value="Norway">Norway</option>
                            <option value="North Pole">North Pole</option>
                            <option value="South Pole">South Pole</option>
                        </select>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="Vegan"
                                onChange={this.handleChange}
                                checked={this.state.Vegan}
                            /> Vegan?
                        </label>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="Kosher"
                                onChange={this.handleChange}
                                checked={this.state.Kosher}
                            /> Kosher?
                        </label>
                        
                        <br />
                        
                        <label>
                            <input 
                                type="checkbox"
                                name="LactoseFree"
                                onChange={this.handleChange}
                                checked={this.state.LactoseFree}
                            /> Lactose Free?
                        </label>
                        
                        <br />
                        
                        <button>Submit</button>

                    </form>

                    <hr />

                    <div className="entInfo">

                        <h2>Entered information:</h2>

                        <p>Your name: <strong style={renderedInfoStyle}>
                                        {this.state.firstName} {this.state.lastName}
                                    </strong>
                        </p>

                        <p>Your age: <span style={renderedInfoStyle}>
                                        {this.state.age}
                                    </span>
                        </p>

                        <p>Your gender: <span style={renderedInfoStyle}>
                                            {this.state.gender}
                                        </span>
                        </p>

                        <p>Your destination: <strong style={renderedInfoStyle}>
                                                {this.state.destination}
                                            </strong>
                        </p>

                        <p>Your dietary restrictions: <em style={renderedInfoStyle}>
                                                        {this.state.dietary.join(", ")}
                                                    </em>
                        </p>

                        <p>Vegan: <em style={renderedInfoStyle}>
                                    {this.state.Vegan ? "Yes" : "No"}
                                </em>
                        </p>

                        <p>Kosher: <em style={renderedInfoStyle}>
                                    {this.state.Kosher ? "Yes" : "No"}
                                </em>
                        </p>

                        <p>Lactose Free: <em style={renderedInfoStyle}>
                                            {this.state.LactoseFree ? "Yes" : "No"}
                                        </em>
                        </p>

                    </div>

                </main>

            </div>
        
        )

    }

}

export default App;
