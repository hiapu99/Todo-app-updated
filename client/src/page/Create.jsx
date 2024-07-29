import axios from 'axios'
import React, { useState } from 'react'

const Create = ({ hiddenPop, handleData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  console.log(name, email)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/post/', { name, email });
      if (response.data.success) {
        handleData();
        hiddenPop();
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }

  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
      <div className='mt-10 flex flex-col gap-5'>
        <button className='flex place-content-end text-xl text-white' onClick={hiddenPop}>X</button>
        <form className='bg-indigo-600 px-28 py-10 rounded-md flex flex-col items-center gap-5' onSubmit={handleSubmit}>
          <h3 className='text-2xl text-white font-bold'>Create Todo</h3>
          <input type="text"
            placeholder='Enter Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className='py-2 rounded-md px-4 text-black'
          />
          <input type="text"
            placeholder='Enter Name'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className='py-2 rounded-md px-4 text-black'
          />
          <button type='submit' className='px-9 py-2 rounded-lg text-black font-bold bg-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
