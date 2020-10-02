import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ModalContainer from './components/modal/ModalContainer';
import NavBar from './components/navbar/Navbar';
import PageEventDashboard from './pages/PageEventDashboard';
import PageEventDetail from './pages/PageEventDetail';
import PageEventForm from './pages/PageEventForm';
import PageHome from './pages/PageHome';
import PagePeopleDashboard from './pages/PagePeopleDashboard';
import PageSettingsDashboard from './pages/PageSettingsDashboard';
import PageUserDetail from './pages/PageUserDetail';




const App = () => {

    return (
        <Fragment>
            <ModalContainer />
            <Route exact path='/' component={PageHome} />

            <Route path='/(.+)' render={() => (
                <Fragment>
                    <NavBar />
                    <Container className='main'>
                        <Route exact path='/events' component={PageEventDashboard} />
                        <Route path='/events/:id' component={PageEventDetail} />
                        <Route path='/people' component={PagePeopleDashboard} />
                        <Route path='/profile/:id' component={PageUserDetail} />
                        <Route path='/settings' component={PageSettingsDashboard} />
                        <Route path={['/createEvent', '/manage/:id']} component={PageEventForm} />
                    </Container>
                </Fragment>
            )} />

        </Fragment>
    );
};

export default App;
