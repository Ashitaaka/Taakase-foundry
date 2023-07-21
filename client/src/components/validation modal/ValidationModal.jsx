import React from 'react'
import "./ValidationModal.css"
import { BsCheckLg } from 'react-icons/bs'

const ValidationModal = ({showModal}) => {

  return (
    <div className={showModal ? 'validation_modal' : 'validation_modal invisible'}>
      <BsCheckLg size={20}/>
        <p>modifications effectuées</p>
    </div>
  )
}

export default ValidationModal