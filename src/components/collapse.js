function Collapse(props) {
  const {title,desciptions} = props
  return (
    <div className="collapse-wrapper">
    <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        {title}
      </a>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        {desciptions}
      </div>
    </div>
    </div>
  );
}

export default Collapse;