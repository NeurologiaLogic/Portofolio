function Jumbotron(props) {
  const {title,description} = props
  const {addons} = props.addons | ''
  return (
    <div className="jumbotron">
    <h1 className="display-4">{title}</h1>
    <p className="lead">{description}</p>
    <hr className="my-4"/>
  </div>
   );
}

export default Jumbotron;