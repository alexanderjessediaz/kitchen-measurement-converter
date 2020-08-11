import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';


class UtensilCard extends Component {
  
  state = {
    alertStatus: ""
  }
  
  setAlert = e => {
    this.setState({
      alertStatus: e
    })
  }
  
  render(){
    
    // const dropDownAlert = <Alert variant="warning">{`${this.state.alertStatus} is selected`}</Alert>
    return (        
      <Container fluid="sm">
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Select a utensil"
            id="input-group-dropdown-1"
            // onSelect={dropDownAlert}
            
            >
            <Dropdown.Item 
              active
              eventKey="Cup"
              title="Cup"
              onSelect={this.props.selectCup && this.setAlert}
              
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
        <Alert variant="warning">{`${this.state.alertStatus} is selected`}</Alert>
       </Container>
      
      )
  }
}


export default UtensilCard