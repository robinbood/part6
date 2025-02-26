import PropTypes from "prop-types"
import { useSelector } from "react-redux"
const Notification = () => {
  const message = useSelector()

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