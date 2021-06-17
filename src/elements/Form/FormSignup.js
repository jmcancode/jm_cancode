import React from 'react'
import validate from './validateInfo'
import useForm from './useForm'

const FormSignup = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>

        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Name* :'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='E-mail* :'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='subject'
            placeholder='Subject* :'
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>

        <div className='form-inputs'>
          <textarea
            className='form-input'
            name='message'
            placeholder='Message* :'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Send Message
        </button>

      </form>

    </div>
  )

}

export default FormSignup
