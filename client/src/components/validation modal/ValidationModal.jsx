import React from 'react'

const ValidationModal = ({showModal}) => {

  if (showModal) return (
    <div className='validation_modal'>
        <p>modification effectuée</p>
    </div>
  )
}

export default ValidationModal