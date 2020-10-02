import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { logout } from '../../redux/actions/authAction';
import { openModal } from '../../redux/actions/modalAction';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';



const Navbar = (props) => {

    const { openModal, firebase, history, auth } = props;
    console.log(auth.isLoaded, auth.isEmpty);

    const authenticated = auth.isLoaded && !auth.isEmpty;

    const handleSignIn = () => openModal('LoginModal');

    const handleRegister = () => openModal('RegisterModal');

    const handleSignOut = () => {
        firebase.logout();
        history.push('/');
    };

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' />Re-vents</Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events' />

                {authenticated && (
                    <Fragment>
                        <Menu.Item as={NavLink} to='/people' name='People' />
                        <Menu.Item as={NavLink} to='/test' name='Test' />
                        <Menu.Item>
                            <Button
                                as={Link}
                                to='/createEvent'
                                floated='right'
                                positive
                                inverted
                                content='Create Event'
                            />
                        </Menu.Item>
                    </Fragment>
                )}

                {authenticated
                    ? <SignedInMenu signOut={handleSignOut} auth={auth} />
                    : <SignedOutMenu signIn={handleSignIn} register={handleRegister} />
                }
            </Container>
        </Menu >
    );
};


const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});

export default withRouter(withFirebase(connect(mapStateToProps, {
    openModal,
    logout
})(Navbar)));
