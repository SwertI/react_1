import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
import { updateNewPostText } from './redux/state'

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
                            <Dialogs state={props.state.dialogsPage} />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => (
                            <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
                        )}
                    />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
