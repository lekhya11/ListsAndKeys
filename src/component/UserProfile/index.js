import './index.css'

const DisplayingDetails = props => {
  const {membersList} = props
  const {imageUrl, name, role} = membersList

  return (
    <li className="main-container">
      <img className="image" src={imageUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </li>
  )
}

export default DisplayingDetails
