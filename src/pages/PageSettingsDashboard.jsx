import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import AboutPage from './pageSettingsDashboard/AboutPage';
import AccountPage from './pageSettingsDashboard/AccountPage';
import BasicPage from './pageSettingsDashboard/BasicPage';
import PhotosPage from './pageSettingsDashboard/PhotosPage';
import SettingsNav from './pageSettingsDashboard/SettingsNav';




const PageSettingsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' component={BasicPage} />
                    <Route path='/settings/about' component={AboutPage} />
                    <Route path='/settings/photos' component={PhotosPage} />
                    <Route path='/settings/account' component={AccountPage} />
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav />
            </Grid.Column>
        </Grid>
    );
};

export default PageSettingsDashboard;
