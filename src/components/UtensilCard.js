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

  setAlertState = e => {
    this.setState({
      alertStatus: e.target.title
    })
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
            >
            <Dropdown.Item 
              active 
              eventKey="Cup" 
              title="Cup"
              onSelect={this.props.selectCup} 
              onClick={this.setAlertState}
              >Cups
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Tbsp" 
              title="Tablespoon"
              onSelect={this.props.selectTbsp}
              onClick={this.setAlertState}
              >Tablespoons
            </Dropdown.Item>
            <Dropdown.Item 
              eventKey="Tsp" 
              title="Teaspoon"
              onSelect={this.props.selectTsp}
              onClick={this.setAlertState}  
              >Teaspoons
            </Dropdown.Item>
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