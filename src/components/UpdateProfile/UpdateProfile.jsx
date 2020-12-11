import React from 'react'

const UpdateProfile = () => {
  return (
    <div className='UpdateProfile'>
      <form action="">
        <label htmlFor="username">Change username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Change password</label>
        <input id="password" type="text" />
        <label htmlFor="picture">Change profilepicture</label>
        <button>Change</button>
      </form>
    </div>
  )
}

export default UpdateProfile
