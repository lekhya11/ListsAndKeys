import DisplayingDetails from './component/UserProfile'

import './App.css'

const membersDetails = [
  {
    imageUrl:
      'https://i.pinimg.com/564x/0f/07/80/0f07803ec45f9c0b2f09b594ba28832f.jpg',
    name: 'Sun Maahi',
    role: 'Armaan Malik',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/94/59/e4/9459e45a14b8b64e94716f1194e35d40.jpg',
    name: 'Life Goes On',
    role: 'BTS',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/35/3b/ae/353bae1f465778a40be70bd11acd1878.jpg',
    name: 'Who Says',
    role: 'Selena Gomez',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/5d/88/b8/5d88b80cd4eca510157021d46e85ad6b.jpg',
    name: 'At My Worst',
    role: 'Pink Sweat',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/06/78/94/067894b5b7d3f0ae46b0cd70dc672604.jpg',
    name: 'Yedurangula Vaana',
    role: 'Sid Sriram',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/db/74/3f/db743f97d515a52c96ea65388613e9f7.jpg',
    name: 'Night Changes',
    role: 'One Direction',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/b0/44/f1/b044f13499acc08bdb96a0539ad17938.jpg',
    name: 'We are bulletproof',
    role: 'BTS',
  },
]

const App = () => (
  <div className="div-container">
    <h1>My Favourite Songs</h1>
    <ul>
      {membersDetails.map(each => (
        <DisplayingDetails membersList={each} />
      ))}
    </ul>
  </div>
)

export default App
