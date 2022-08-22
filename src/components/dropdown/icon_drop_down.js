import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
function IconDropDown(props) {
  const {icon} = props
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <Icon.ArrowRight />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   );
}

export default IconDropDown;