import './index.css'

const ProjectItem = props => {
  const {projectItemDetails} = props
  const {name, imageUrl} = projectItemDetails

  return (
    <li className="list-item-bg-container">
      <img src={imageUrl} alt={name} className="project-img" />
      <p className="project-heading">{name}</p>
    </li>
  )
}

export default ProjectItem
