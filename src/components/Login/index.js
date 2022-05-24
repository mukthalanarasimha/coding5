import './index.css'

const LogIn = Props => {
  const {isLogIn} = Props
  return (
    <button type="button" className="LogoutButton" onClick={isLogIn}>
      Logout
    </button>
  )
}

export default LogIn
