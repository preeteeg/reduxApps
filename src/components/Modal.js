import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal,openModal } from '../store/actions'
import { MdClose } from 'react-icons/md';
const Modal = ({ isOpen, name, text,openModal ,closeModal}) =>
{

   
    return (
          <React.Fragment>
          <section className="section">
                <h2 className="section-title">{name}</h2>
                <button type="button" className="btn" onClick={openModal}>Open</button>
          </section>
        <div className={`modal-overlay ${isOpen ? `isModalOpen`:null}`}>
            <div className='modal-container'>
                <h4>{name}</h4>
                <p>{text}</p>
                <button className="btn btn-close" onClick={closeModal}><MdClose /></button>
            </div>
            </div>
            </React.Fragment>
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
        closeModal: () => dispatch(closeModal(false, "", "")),
        openModal: () => dispatch(openModal(true,"Am a modal","Set your text here"))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
