// Write your React code here.
import './index.css'

const Feedback = props => {
  const {value, changedStatus} = props
  const {imageUrl, name} = value
  const emojiClicked = () => {
    changedStatus()
  }
  return (
    <li className="emoji-div">
      <button type="button" onClick={emojiClicked} className="btn">
        <img className="img" alt={name} src={imageUrl} />
      </button>
      <p className="para">{name}</p>
    </li>
  )
}

export default Feedback
