import './index.css'

const Message = Props => {
  const {LoggedIn} = Props
  const message = LoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{message}</h1>
}

export default Message
