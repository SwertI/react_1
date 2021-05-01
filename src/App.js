import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <SideBar state={props.state.SideBar} />
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => (
                            <Dialogs store={props.store} />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => (
                            <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>
                        )}
                    />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
