import React, { useEffect, useState } from 'react';
import Create from './Create';
import Update from './Update';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const hiddenPop = () => {
        setShowCreate(!setShowCreate);
    };

    const handleUpdates = () => {
        setShowUpdate(false)
    }

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:9000/api/delete/${id}`);
        if (response.data.success) {
            handleData();
        }
    };

    const handleUpdate = (id, name, email) => {
        setShowUpdate(true)
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    };

    const handleData = async () => {
        const response = await axios.get('http://localhost:9000/api/get');
        console.log(response.data);
        if (response.data.success) {
            setData(response.data.AllData);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div className='container mt-28'>
            <div className='relative overflow-x-auto'>
                <button className='bg-indigo-600 text-white px-10 py-2 rounded-2xl' onClick={() => setShowCreate(true)}>
                    Create
                </button>
                <table className='mt-10 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                ID
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Name
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Email
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((easeData, index) => (
                            <tr key={easeData._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {index + 1}
                                </th>
                                <td className='px-6 py-4'>{easeData.name}</td>
                                <td className='px-6 py-4'>{easeData.email}</td>
                                <td
                                    className='px-6 py-4 cursor-pointer font-semibold hover:text-blue-700'
                                    onClick={() => handleUpdate(easeData._id, easeData.name, easeData.email)}
                                >
                                    Edit
                                </td>
                                <td
                                    className='px-6 py-4 cursor-pointer font-semibold hover:text-blue-700'
                                    onClick={() => handleDelete(easeData._id)}
                                >
                                    DELETE
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showCreate && <Create hiddenPop={hiddenPop} handleData={handleData} />}
            {showUpdate && <Update handleUpdates={handleUpdates} handleData={handleData} />}
        </div>
    );
};

export default Home;
