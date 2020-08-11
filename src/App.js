import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import measuringspoons from './images/measuringspoons.jpg';
import CalculationTable from "./components/CalculationTable";
import UtensilCard from './components/UtensilCard';
import { cupToTbsp, cupToTsp, tbspToCup, tbspToTsp, tspToCup, tspToTbsp } from './utils/conversion-functions';






class App extends Component {
  
  state = {
    measurementInput:0,
    cupMeasurement:0,
    tbspMeasurement:0,
    tspMeasurement:0,
  };
  
  setMeasurementInput = e => {
    this.setState({
      measurementInput: e.target.value
    })
  }


  setCupState = cupMeasurement => {
    this.setState({
      cupMeasurement: cupMeasurement
    })
  }
  
  setTbspState = tbspMeasurement => {
    this.setState({
      tbspMeasurement: tbspMeasurement
    })
  }

  setTspState = tspMeasurement => {
    this.setState({
      tspMeasurement: tspMeasurement
    })
  }

  
  selectCup = e => {
    this.setState({
      cupMeasurement: this.state.measurementInput,
      tbspMeasurement: cupToTbsp(this.state.measurementInput),
      tspMeasurement: cupToTsp(this.state.measurementInput),
    })
  }

  selectTbsp = e => {
    this.setState({
      tbspMeasurement: this.state.measurementInput,
      cupMeasurement: tbspToCup(this.state.measurementInput),
      tspMeasurement: tbspToTsp(this.state.measurementInput),
    })
  }

  selectTsp = e => {
    this.setState({
      tspMeasurement: this.state.measurementInput,
      cupMeasurement: tspToCup(this.state.measurementInput),
      tbspMeasurement: tspToTbsp(this.state.measurementInput),
    })
  }

 
  
  render(){
    return (
      <div className="App">
        <Container fluid="md">
            <Jumbotron fluid>
              <Container>
                <Media>
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src={measuringspoons}
                    alt="measuring spoons"
                  />
                  <Media.Body>
                    <h5>Kitchen Measurement Converter</h5>
                    <p>
                      Enter a measurement then select utensil and see all of the converted measuremtns in the table below.
                    </p>
                  </Media.Body>
                </Media>
              </Container>
            </Jumbotron>
            <Row className="justify-content-md-center">
                <UtensilCard
                  measurementInput={this.state.measurementInput}
                  cupMeasurement={this.state.cupMeasurement}
                  tbspMeasurement={this.state.tbspMeasurement}
                  tspMeasurement={this.state.tspMeasurement}
                  setCupState={this.setCupState}
                  setTbspState={this.setTbspState}
                  setTspState={this.setTspState}
                  // setAlertState={this.setAlertState}
                  // setAlertStatus={this.setAlertStatus}
                  selectCup={this.selectCup}
                  selectTbsp={this.selectTbsp}
                  selectTsp={this.selectTsp}
                  setMeasurementInput={this.setMeasurementInput}
                />
            </Row>
            <CalculationTable
              measurementInput={this.state.measurementInput}
              cupMeasurement={this.state.cupMeasurement}
              tbspMeasurement={this.state.tbspMeasurement}
              tspMeasurement={this.state.tspMeasurement}
            />
        </Container>
      </div>

    );
  }
}

export default App;
