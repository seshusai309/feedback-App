import {Component} from 'react'
import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {clicked: false}

  changedStatus = () => {
    this.setState(each => {
      if (each.clicked === false) {
        return {clicked: true}
      }
      return {clicked: false}
    })
  }

  render() {
    const {clicked} = this.state
    console.log(clicked)
    return (
      <div className="container">
        {!clicked && (
          <div className="sub-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feed-container">
              {resources.emojis.map(each => (
                <Feedback
                  key={each.id}
                  value={each}
                  changedStatus={this.changedStatus}
                />
              ))}
            </ul>
          </div>
        )}
        {clicked && (
          <div className="sub-container heart">
            <img
              className="img"
              alt="love emoji"
              src={resources.loveEmojiUrl}
            />
            <h1 className="thank-head">Thank You</h1>
            <p className="para">
              We will use your feedback to improve customer support <br />{' '}
              performence
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default App
