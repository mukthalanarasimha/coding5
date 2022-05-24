import './index.css'

const Logout = Props => {
  const {isLogout} = Props
  return (
    <button type="button" className="LogoutButton" onClick={isLogout}>
      Logout
    </button>
  )
}
export default Logout
