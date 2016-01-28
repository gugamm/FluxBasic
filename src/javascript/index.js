import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Views/Table.js';
import PersonsStore from './Stores/PersonsStore.js';
import AppDispatcher from './Dispatcher/AppDispatcher.js';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {persons : PersonsStore.getPersons()};
    }

    componentDidMount() {
        this._handleChangeListener = this.handleChange.bind(this);
        PersonsStore.addChangeListener(this._handleChangeListener);
    }

    componentWillUnmount() {
        PersonsStore.removeChangeListener(this._handleChangeListener);
    }

    handleChange() {
        this.setState({persons : PersonsStore.getPersons()});
    }

    handleClick(event) {
        AppDispatcher.handleAddPerson(this._edtName.value,this._edtAge.value);
    }

    render() {
        return (
        <div>
            <h2>OUR NICE TABLE</h2>
            <Table data={this.state.persons} />
            <input type="text" ref={(elem) => this._edtName = elem} />
            <input type="text" ref={(elem) => this._edtAge = elem} />
            <input type="button" value="ADD" onClick={this.handleClick.bind(this)} />
        </div>
        );
    }
}


ReactDOM.render(<Application />, document.getElementById('app'));
