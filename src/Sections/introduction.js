import Jumbotron from "../components/jumbotron";
import ListGroup from "../components/list_group";

import { MDBBtn, MDBIcon,MDBBtnGroup  } from 'mdb-react-ui-kit';
function Introduction() {
  const scaleAndBg =
  {
    transform: 'scale(1.2)',
    color: '#f5f5f5',
    padding:'0.5rem',
    backgroundColor:'black',
    marginRight:'.7rem',
    borderRadius:'15%',
    // backgroundColor: '#f5f5f5',
    "&:hover": {
      background: "#efefef"
    },
  }
  return (
    <div className="d-flex flex-column">
      <Jumbotron
        title="Patrick Kwon"
        description="Student Of Computer Science, Binus University."
        />
        <div className="icon-wrapper d-flex">
            <a href="https://github.com/NeurologiaLogic">
              <MDBIcon fab icon='github'  style={scaleAndBg} />
            </a>
            <a href ="https://steamcommunity.com/id/Rexter580/">
              <MDBIcon fab icon='steam'  style={scaleAndBg} />
            </a>
            <a href ="https://www.instagram.com/patrickwon_/">
              <MDBIcon fab icon='instagram' style={scaleAndBg}  />
            </a>
        </div>

    </div>
  );
  {/* <MDBBtn floating style={{ backgroundColor: '#ac2bac' }} href='#'>
    <MDBIcon fab icon='instagram' />
  </MDBBtn> */}
}

export default Introduction;