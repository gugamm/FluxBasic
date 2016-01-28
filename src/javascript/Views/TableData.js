import React from 'react';

export default class TableData extends React.Component {
    render() {
        let data = this.props.data;
        let elements = data.map((person,index) =>
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
            </tr>);
        return (
            <tbody>
            {elements}
            </tbody>
        );
    }
}