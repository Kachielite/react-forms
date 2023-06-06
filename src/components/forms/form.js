import React from 'react';
import './form.css'

export default function Form(){
    return(
        <form className='form-container'>
            <div className='form-item'>
            <label>Full Name</label>
            <input
                id='full_name'
                name='full_name'
                type='text'
            />
            </div>
            <div className='form-item'>
            <label>Username</label>
            <input
                id='username'
                name='username'
                type='text'
            />
            </div>
            <div className='form-item'>
            <label>Email Address</label>
            <input
                id='email'
                name='email'
                type='email'
            />
            </div>
            <div className='form-item'>
            <label>Phone Number</label>
            <input
                id='phone_number'
                name='phone_number'
                type='tel'
            />
            </div>
            <button>Submit</button>
        </form>
    )
}
