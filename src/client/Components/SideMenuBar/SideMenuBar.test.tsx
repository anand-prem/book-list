import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import SideMenuBar from './index';

test("should render side menu with two menu items", async () => {
    render(
        <Router>
            <SideMenuBar/>
        </Router>
    );

    expect(screen.getByLabelText('Books')).toBeInTheDOM();
});
