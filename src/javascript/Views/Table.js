import React from 'react';
import TableData from './TableData.js';

export default class Table extends React.Component {
    render() {
        return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <TableData data={this.props.data} />
        </table>
        );
    }
}
