import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class UtensilCard extends Component {

  render(){
    return (        
       <Container>
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Select a utensil"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Cup</Dropdown.Item>
            <Dropdown.Item href="#">Tablespoon</Dropdown.Item>
            <Dropdown.Item href="#">Teaspoon</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-describedby="basic-addon1" />
        </InputGroup>
       </Container>
      
    )
  }
}


export default UtensilCard