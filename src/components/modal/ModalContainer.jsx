import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../redux/actions/modalAction';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';



const ModalContainer = (props) => {

    console.log(props);

    const { currentModal, closeModal } = props;

    if (currentModal) {
        const { modalType, modalProps } = currentModal !== null && currentModal;

        return (
            <Fragment>
                <Modal size='mini' open={true} onClose={closeModal}>
                    <Modal.Header>
                        {modalType === 'LoginModal'
                            ? 'Login to Re-vents'
                            : modalType === 'RegisterModal'
                                ? 'Sign Up to Re-vents!'
                                : ''
                        }
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            {modalType === 'LoginModal'
                                ? <FormLogin />
                                : modalType === 'RegisterModal'
                                    ? <FormRegister />
                                    : ''
                            }
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Fragment>
        );
    } else {
        return <Fragment></Fragment>
    };
};


const mapStateToProps = (state) => ({
    currentModal: state.modalReducer
});


export default connect(mapStateToProps, {
    closeModal
})(ModalContainer);
