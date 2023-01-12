import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './core/store';
import { MainPage } from './pages/MainPage';

const App = () => {
    return (
        <div className='App'>
            <MainPage/>
        </div>
    );
};

export default connect((state: RootState) => ({store: state.appReducer}))(App);
