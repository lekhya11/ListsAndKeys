import DisplayingDetails from './component/UserProfile'

const membersDetails = [
  {
    imageUrl:
      'https://i.pinimg.com/564x/0f/07/80/0f07803ec45f9c0b2f09b594ba28832f.jpg',
    name: 'Kim NamJoon',
    role: 'BTS Leader Rap',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/94/59/e4/9459e45a14b8b64e94716f1194e35d40.jpg',
    name: 'kim Seokjin',
    role: 'Vocals',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/07/35/94/073594dc829f209a2e3a643e7ff71e08.jpg',
    name: 'Jung Hoseok als J-hope',
    role: 'Rap',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/5d/88/b8/5d88b80cd4eca510157021d46e85ad6b.jpg',
    name: 'Min Yoongi als Suga',
    role: 'Rap',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/06/78/94/067894b5b7d3f0ae46b0cd70dc672604.jpg',
    name: 'Jimin',
    role: 'main-vocals',
  },

  {
    imageUrl:
      'https://i.pinimg.com/750x/99/0a/71/990a718f028d76ec600d1eb3ed24d11e.jpg',
    name: 'V',
    role: 'vocals',
  },

  {
    imageUrl:
      'https://i.pinimg.com/564x/b0/44/f1/b044f13499acc08bdb96a0539ad17938.jpg',
    name: 'Jung kook',
    role: 'BTS Leader',
  },
]

const App = () => (
  <div>
    <h1>BTS MEMBERS</h1>
    <ul>
      {membersDetails.map(each => (
        <DisplayingDetails membersList={each} />
      ))}
    </ul>
  </div>
)

export default App
