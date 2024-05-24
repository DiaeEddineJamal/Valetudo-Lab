import React, { useState } from 'react';
import axios from 'axios';

interface LaboratoryDTO {
    name: string;
    phoneNumber: string;
    address: string;
    longitude: number;
    latitude: number;
}

const AddLaboratoryForm: React.FC = () => {
    const [formData, setFormData] = useState<LaboratoryDTO>({
        name: '',
        phoneNumber: '',
        address: '',
        longitude: 0,
        latitude: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'longitude' || name === 'latitude' ? Number(value) : value,
        }));
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
                address: '',
                longitude: 0,
                latitude: 0,
            });
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the laboratory. Please try again.');
        }
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
            <h2>Add Laboratory</h2>
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
                <div>
                    <label htmlFor="longitude">Longitude:</label>
                    <input type="number" step="0.000001" id="longitude" name="longitude" value={formData.longitude} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="latitude">Latitude:</label>
                    <input type="number" step="0.000001" id="latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
                </div>
                <button type="submit"  style={{
          
          marginTop: '30px', // Ajuster pour abaisser le bouton
          
          marginLeft: '130px', // Centrer le bouton horizontalement
        }}>Submit</button>
            </form>
        </div>
    );
};

export default AddLaboratoryForm;