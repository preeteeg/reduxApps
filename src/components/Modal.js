import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../store/actions'
import { MdClose } from 'react-icons/md';
const Modal = ({ isOpen, name, text ,closeModal}) =>
{

   
    return (
        <div className={`modal-overlay ${isOpen ? `isModalOpen`:null}`}>
            <div className='modal-container'>
                <h4>{name}</h4>
                <p>{text}</p>
                <button className="btn btn-close" onClick={closeModal}><MdClose /></button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    closeModal:PropTypes.func.isRequired,
}

function mapStateToProps({ modalState: { isOpen,name, text } })
{
    return {
        isOpen: isOpen,
        name:name,
        text:text
    }
}

function mapDispatchToProps(dispatch, ownProps)
{
    return {
        closeModal: () => dispatch(closeModal(false,"",""))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
