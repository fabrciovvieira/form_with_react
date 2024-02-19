import React from 'react'

const UserForm = ({ data, updateFieldHandle }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
        type="text" 
        id='name' 
        placeholder='Digite seu nome' 
        value={data.name || ""} 
        required
        onChange={(e) => updateFieldHandle("name", e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input 
        type="email" 
        id='email' 
        placeholder='Digite seu e-mail' 
        required 
        value={data.email || ""}
        onChange={(e) => updateFieldHandle("email", e.target.value)}/>
      </div>
    </div>
  )
}

export default UserForm