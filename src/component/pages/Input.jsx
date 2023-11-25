import React from 'react'

function Input({type , title , name ,id , value ,onChange ,errors ,touched ,onBlur}) {
  return (
<>

<div className='  mb-3 px-4'>

<label className='py-3' htmlFor={id}>{title}</label>
<input className='form-control w-75' type={type} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur}/>

{ touched[name]&& errors[name] && <p className='text text-danger'>{errors[name]} </p>}
</div>

</> )
}

export default Input