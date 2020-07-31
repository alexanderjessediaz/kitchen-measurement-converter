import React from 'react'
import Table from 'react-bootstrap/Table'

function CalculationTable(props) {
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
                <td>0</td>
                </tr>
                <tr>
                <td>Tablespoon</td>
                <td>0</td>
                </tr>
                <tr>
                <td>Teaspoon</td>
                <td>0</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default CalculationTable