import React, { useState } from 'react'

const V14_multiple_input_handling = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        age: ''
    });

    const onChangedHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submithandler = (e) =>{
        e.preventDefault();
        console.log("your form has been submitted")
        console.log(formData)

    }

    return (
        <>
            <form action="" onSubmit={submithandler}>
                <div>
                    Name: <input type="text" value={formData.name} name="name" onChange={onChangedHandler} />
                </div>
                <h5>{formData.name}</h5>

                <div>
                    Email: <input type="email" value={formData.email} name="email" onChange={onChangedHandler} />
                </div>
                <h5>{formData.email}</h5>

                <div>
                    Password: <input type="password" value={formData.password} name="password" onChange={onChangedHandler} />
                </div>
                <h5>{formData.password}</h5>

                <div>
                    Phone: <input type="number" value={formData.phone} name="phone" onChange={onChangedHandler} />
                </div>
                <h5>{formData.phone}</h5>

                <div>
                    Age: <input type="number" value={formData.age} name="age" onChange={onChangedHandler} />
                </div>
                <h5>{formData.age}</h5>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default V14_multiple_input_handling;
