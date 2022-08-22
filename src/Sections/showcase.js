function Showcase(props) {
  const {imgUrl,title,description} = props;
  return (
    <div className="grid-system container shadow-lg p-5 mt-2">
      <div className="grid-row row">
        <div className="grid-image col-9">
          <img className ="shadow" src={imgUrl} alt={title} />
        </div>
        <div className="grid-description col-3">
          <h1 className="pt-5 fw-bold">{title}</h1>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
   );
}

export default Showcase;