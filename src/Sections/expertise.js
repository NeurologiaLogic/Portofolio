import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

function Expertise() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
            <h1>Html</h1>
            <MDBProgress>
            <MDBProgressBar bgColor='success' width='25' valuemin={0} valuemax={100} />
          </MDBProgress>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
            <h1>Css</h1>
            <MDBProgress>
            <MDBProgressBar bgColor='info' width='25' valuemin={0} valuemax={100} />
          </MDBProgress>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
            <h1>Javascript</h1>
            <MDBProgress>
            <MDBProgressBar bgColor='warning' width='25' valuemin={0} valuemax={100} />
          </MDBProgress>
        </div>
      </div>
    </div>
   );
}

export default Expertise;