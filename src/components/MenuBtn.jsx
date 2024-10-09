import React from 'react'
import { Link } from 'react-router-dom'

const MenuBtn = () => {
  return (
    <div>
      <Link to='/menu'> 
      <button type='button' className='btn btn-lg' style={{backgroundColor:'black', color:'white'}}>Our Full Menu</button>
      </Link>
    </div>
  )
}

export default MenuBtn
