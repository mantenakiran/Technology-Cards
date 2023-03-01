import './index.css'

const TechnologyCards = props => {
  const {technologyDetails} = props
  const {className, title, description, imgUrl} = technologyDetails

  return (
    <div>
      <li className={className}>
        <div className="card">
          <div className={className}>
            <h1 className="head">{title}</h1>
            <p className="paragraph">{description}</p>
            <img src={imgUrl} className="image" alt={title} />
          </div>
        </div>
      </li>
    </div>
  )
}

export default TechnologyCards
