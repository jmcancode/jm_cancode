import React from 'react'
import Icofont from 'react-icofont'

const FormSuccess = () => {

  return (
    <div className='succes-message'>
      <Icofont icon='check-circled' />
      <h1 className="big-title">Success!</h1>
      <p className="sub-title">You have filled in the form correctly. <br /> This form supports field validation, but will need <br /> some backend code files, to actually send emails.</p>
    </div>
  )

}

export default FormSuccess
