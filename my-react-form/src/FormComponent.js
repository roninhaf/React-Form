import React from "react";

function FormComponent(props) {

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
                        value={props.firstName} 
                        onChange={props.handleChange} 
                        placeholder="First Name" 
                    />
                    
                    <br />
                    
                    <input 
                        name="lastName" 
                        value={props.lastName}
                        onChange={props.handleChange} 
                        placeholder="Last Name" 
                    />
                    
                    <br />
                    
                    <input 
                        name="age" 
                        value={props.age}
                        onChange={props.handleChange} 
                        placeholder="Age" 
                    />
                    
                    <br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="Male"
                            onChange={props.handleChange}
                        /> Male
                    </label>
                    
                    <br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="Female"
                            onChange={props.handleChange}
                        /> Female
                    </label>
                    
                    <br />
                    
                    <select 
                        value={props.destination} 
                        name="destination" 
                        onChange={props.handleChange}
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
                            onChange={props.handleChange}
                            checked={props.Vegan}
                        /> Vegan?
                    </label>
                    
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="Kosher"
                            onChange={props.handleChange}
                            checked={props.Kosher}
                        /> Kosher?
                    </label>
                    
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="LactoseFree"
                            onChange={props.handleChange}
                            checked={props.LactoseFree}
                        /> Lactose Free?
                    </label>
                    
                    <br />
                    
                    <button>Submit</button>

                </form>

                <hr />

                <div className="entInfo">

                    <h2>Entered information:</h2>

                    <p>Your name: <strong style={renderedInfoStyle}>
                                    {props.firstName} {props.lastName}
                                </strong>
                    </p>

                    <p>Your age: <span style={renderedInfoStyle}>
                                    {props.age}
                                </span>
                    </p>

                    <p>Your gender: <span style={renderedInfoStyle}>
                                        {props.gender}
                                    </span>
                    </p>

                    <p>Your destination: <strong style={renderedInfoStyle}>
                                            {props.destination}
                                        </strong>
                    </p>

                    <p>Your dietary restrictions: <em style={renderedInfoStyle}>
                                                    {props.dietary.join(", ")}
                                                </em>
                    </p>

                    <p>Vegan: <em style={renderedInfoStyle}>
                                {props.Vegan ? "Yes" : "No"}
                            </em>
                    </p>

                    <p>Kosher: <em style={renderedInfoStyle}>
                                {props.Kosher ? "Yes" : "No"}
                            </em>
                    </p>

                    <p>Lactose Free: <em style={renderedInfoStyle}>
                                        {props.LactoseFree ? "Yes" : "No"}
                                    </em>
                    </p>

                </div>

            </main>

        </div>
    
    )
    
}

export default FormComponent;