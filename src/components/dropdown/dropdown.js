import Dropdown from 'react-bootstrap/Dropdown';
function DropDown(props) {
  const {title,description,addons} = props
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   );
}

export default DropDown;