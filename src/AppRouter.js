import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom';
import Categories from './pages/Categories';
import Locations from './pages/Locations';

const AppRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/'>
                <Categories />
            </Route>
            <Route exact path='/location'>
                <Locations />
            </Route>
        </Switch>
    </HashRouter>
)

export default AppRouter;