import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


class UtensilCard extends Component {
  
  
  
  
  render(){

    const isDropDownSelected = Dropdown.Item.active
    return (        
      <Container fluid="sm">
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title={isDropDownSelected ? DropdownItem.Item.title: "Select a utensil"}
            id="input-group-dropdown-1"
            // onSelect={this.handleSelect}
            
            >
            <Dropdown.Item 
              active
              eventKey="Cup"
              title="Cup"
              onSelect={this.props.selectCup}
              onChange={this.props.selectCup}
            >Cups</Dropdown.Item>
            <Dropdown.Item href="#">Tablespoons</Dropdown.Item>
            <Dropdown.Item href="#">Teaspoons</Dropdown.Item>
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