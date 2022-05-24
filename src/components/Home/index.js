import {Component} from 'react'

import Message from '../Message'
import LogIn from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {
    isLogged: false,
  }

  OnButtonTextClick = () => {
    this.setState(PrevState => ({isLogged: !PrevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg_container">
        <div className="mini_container">
          <Message LoggedIn={isLogged} />
          <div>
            {isLogged ? (
              <Logout isLogout={this.OnButtonTextClick} />
            ) : (
              <LogIn isLogIn={this.OnButtonTextClick} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
