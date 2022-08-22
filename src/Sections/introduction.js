import Jumbotron from "../components/jumbotron";
import ListGroup from "../components/list_group";

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
function Introduction() {
  const scaleAndBg =
  {
    // transform: 'scale(1.1)',
    color: '#f5f5f5',
    // backgroundColor: '#f5f5f5',
  }
  return (
    <div className="d-flex flex-column">
      <Jumbotron
        title="Patrick Kwon"
        description="Student Of Computer Science, Binus University."
        />
        <div className="icon-wrapper d-flex">
          <MDBBtn className='icon-item mx-1' floating style={scaleAndBg} href='#'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          <MDBBtn className='icon-item mx-1' floating style={scaleAndBg} href='#'>
            <MDBIcon fab icon='steam' />
          </MDBBtn>
          <MDBBtn className='icon-item mx-1' floating style={scaleAndBg} href='#'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </div>

    </div>
  );
  {/* <MDBBtn floating style={{ backgroundColor: '#ac2bac' }} href='#'>
    <MDBIcon fab icon='instagram' />
  </MDBBtn> */}
}

export default Introduction;