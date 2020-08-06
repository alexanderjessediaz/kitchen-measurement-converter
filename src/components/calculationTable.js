import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

class CalculationTable extends Component {

    state = {
        cupMeasurement:0,
        tbspMeasurement:0,
        tspMeasurement:0
    }

    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Utensil</th>
                    <th>Measurement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Cup</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Tablespoon</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Teaspoon</td>
                    <td></td>
                    </tr>
                </tbody>
            </Table>

)
    }
}
export default CalculationTable