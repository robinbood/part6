import PropTypes from "prop-types"
const Notification = ({message}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}
Notification.propTypes ={
  message: PropTypes.String
}
export default Notification