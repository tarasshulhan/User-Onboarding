import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h2>Add a User</h2>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Avatar Image Url
          <input
            value={values.avatar}
            onChange={onChange}
            name='avatar'
            type='text'
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        {/* ////////// CHECKBOXES ////////// */}
        <label>Accept Terms Of Service
          <input
            type="checkbox"
            name="termsOfService"
            onChange={onChange}
            checked={values.termsOfService}
          />
        </label>
      </div>

      <div className='form-group submit'>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>Submit!</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.avatar}</div>
        </div>
      </div>
    </form>
  )
}