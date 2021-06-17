import React from 'react'
import Icofont from 'react-icofont'

const FormSuccess = () => {

  return (
    <div className='succes-message'>
      <Icofont icon='check-circled' />
      <h1 className="big-title">Success!</h1>
      <p className="sub-title">You have filled in the form correctly. <br /> I will be in touch within <br /> 48 -72 business hours. Thank you!</p>
    </div>
  )

}

export default FormSuccess
