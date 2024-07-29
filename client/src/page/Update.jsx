import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Update = ({ handleUpdates, handleData }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id') || 0);
        setName(localStorage.getItem('name') || '');
        setEmail(localStorage.getItem('email') || '');
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            setLoading(true); // Start loading
            const response = await axios.put(`http://localhost:9000/api/put/${id}`, { name, email });
            if (response.data.success) {
                handleData();
                handleUpdates();
            }
            setLoading(false); // Stop loading
        } catch (error) {
            setError("There was an error updating the form.");
            setLoading(false); // Stop loading
            console.error("There was an error updating the form!", error);
        }
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
            <div className='mt-10 flex flex-col gap-5'>
                <button className='flex place-content-end text-xl text-white' onClick={handleUpdates}>X</button>
                <form className='bg-indigo-600 px-28 py-10 rounded-md flex flex-col items-center gap-5' onSubmit={handleUpdate}>
                    <h3 className='text-2xl text-white font-bold'>Update Todo</h3>
                    <input
                        type="text"
                        placeholder='Enter Name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className='py-2 rounded-md px-4 text-black'
                    />
                    <input
                        type="text"
                        placeholder='Enter Email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className='py-2 rounded-md px-4 text-black'
                    />
                    <button type='submit' className='px-9 py-2 rounded-lg text-black font-bold bg-white'>
                        {loading ? 'Updating...' : 'Submit'}
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Update;
