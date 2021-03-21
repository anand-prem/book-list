import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import BookList from './BookList';
import PageLayout from './PageLayout';
import Header from './Header';
import '../Less/app.less';
import SideMenuBar from "./SideMenuBar";

export default class App extends React.Component {
    getHeader = () => <Header/>;

    getBookListContent = () => <BookList/>;

    getSideMenuBar = () => <SideMenuBar/>

    getAuthorsContent = () => <div>Authors section coming soon!</div>

    getNoMatch = () => <div>Oops! Wrong URL</div>

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <PageLayout
                            header={this.getHeader()}
                            content={this.getBookListContent()}
                            sideMenuBar={this.getSideMenuBar()}
                        />
                    </Route>
                    <Route path='/authors'>
                        <PageLayout
                            header={this.getHeader()}
                            content={this.getAuthorsContent()}
                            sideMenuBar={this.getSideMenuBar()}
                        />
                    </Route>
                    <Route path='*'>
                        <div>Oops! Wrong URL</div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
