import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class UtensilCard extends Component {
  
  handleSelect = e => {
    console.log(e)
  }
  
  
  render(){
    return (        
      <Container fluid="sm">
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Select a utensil"
            id="input-group-dropdown-1"
            onSelect={this.handleSelect}
            
            >
            <Dropdown.Item href="#">Cup</Dropdown.Item>
            <Dropdown.Item href="#">Tablespoon</Dropdown.Item>
            <Dropdown.Item href="#">Teaspoon</Dropdown.Item>
          </DropdownButton>
          <Form.Control 
            
            aria-describedby="basic-addon1"
            placeholder="enter measurement"
            type="number"
            value={this.props.measurementInput}
            onChange={this.props.setMeasurementInput}
            />
        </InputGroup>
       </Container>
      
    )
  }
}


export default UtensilCard