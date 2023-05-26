import React, { useState } from 'react'
import FormSubmit from './FormSubmit'

const Form = () => {

    const [displayData, setDisplayData] = useState('');
    const [ageOutput, setAgeOutput] = useState(0);

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            gender: '',
            dateofBirth: '',
            address: '',
            country: ''
        }
    )

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(formData);
        // setDisplayData(JSON.stringify(formData, null, 2));
        setDisplayData(!displayData);
        console.log('submit');
        console.log("https://docs.google.com/spreadsheets/d/1NmaQkkqVIbz9WglYOpyTaNVjS8XGvt3FUUrf1t-OyrU/edit#gid=0");

    }
    const displayHandler = () => {
        setDisplayData((prev) => !prev)
    }

    function calculateAge(event) {
        let birth = new Date(event.target.value);

        let today = new Date();

        let age = today.getFullYear() - birth.getFullYear();

        if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
            age--;
        }
        setAgeOutput(age)
        console.log(age);

    }

    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            gender: '',
            dateofBirth: '',
            address: '',
            country: ''
        })
    }

    return (
        <div>
            {displayData ? (
                <FormSubmit display={displayHandler} />
            ) : (
                <form onSubmit={submitHandler} >
                    <div>
                        <label htmlFor='name' >Name:</label>
                        <input type='text' id='name' name='name' onChange={handleChange} value={formData.name} required />
                    </div>
                    <div>
                        <label htmlFor='email' >Email:</label>
                        <input type='text' id='email' name='email' onChange={handleChange} value={formData.email} required />
                    </div>
                    <div>
                        <label htmlFor='phone' >Phone Number:</label>
                        <input type='number' id='phone' name='phone' onChange={handleChange} value={formData.phone} required />
                    </div>
                    <div>
                        <label htmlFor='date' >Date of Birth:</label>
                        <input type='date' id='date' name='date' onChange={calculateAge} value={formData.date} required />
                    </div>
                    <div>
                        <label htmlFor='age'>Age: {ageOutput}</label>
                        {
                            // <input type='number' id='age' name='age' onChange={handleChange} value={formData.age} />
                        }
                    </div>
                    <div>
                        <label htmlFor='gender' >Gender:</label>
                        <input type='radio' id='male' name='gender' value='male' onChange={handleChange} />
                        <label htmlFor='male' >Male</label>
                        <input type='radio' id='female' name='gender' value='female' onChange={handleChange} />
                        <label htmlFor='female' >Female</label>
                        <input type='radio' id='other' name='gender' value='other' onChange={handleChange} />
                        <label htmlFor='other' >Other</label>
                    </div>
                    <div>
                        <label htmlFor='address'>Address:</label>
                        <input type='text' id='address' name='address' onChange={handleChange} value={formData.address} required />
                    </div>
                    <div>
                        <label htmlFor='country' >Country:</label>
                        <input type='text' id='country' name='country' onChange={handleChange} value={formData.country} required />
                    </div>
                    <div>
                        <label htmlFor='file' >Upload: </label>
                        <input type='file' id='file' name='file' onChange={handleChange} value={formData.file} required />
                    </div>
                    <div>
                        <button className="btn" onClick={handleClear}>Clear</button>
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>

            )}

        </div>
    )
}

export default Form