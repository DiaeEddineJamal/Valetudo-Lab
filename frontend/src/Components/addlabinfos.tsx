import React, { useState } from 'react';
import axios from 'axios';

interface LaboratoryDTO {
    name: string;
    phoneNumber: string;
    address: string;
}

const AddLaboratoryForm: React.FC = () => {
    const [formData, setFormData] = useState<LaboratoryDTO>({
        name: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/laboratories/add', formData);
            console.log(response.data);
            alert('Laboratory added successfully!');
            setFormData({
                name: '',
                phoneNumber: '',
                address: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the laboratory. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Laboratory</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddLaboratoryForm;
