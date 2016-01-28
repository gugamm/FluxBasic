import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import Actions from '../Actions/Actions.js';
var Event = require('eventemitter2').EventEmitter2;

/****************************
* 	INTERNAL FUNCTIONS
****************************/

function cPerson(pName,pAge) {
    return {name : pName, age : pAge};
}

function addPerson(name,age) {
    let person = cPerson(name,age);
    persons.push(person);
}

/****************************
* INTERNAL DATA
****************************/

let persons = [cPerson('Joffrey',20),cPerson('Carlos',21),cPerson('Guilherme',30),cPerson('Joe',33),cPerson('Adele',18)];

/****************************
* STORE DEFINITION
****************************/

let CHANGE_EVENT = 'change';

class PersonsStore extends Event{
    getPersons() {
        return persons;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT,callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

let store = new PersonsStore();

store.dispatchIndex = AppDispatcher.register(function (payload) {
    let actionType = payload.actionType;
    switch(actionType) {
        case Actions.ADD_PERSON :
            let name = payload.data.name;
            let age = payload.data.age;
            addPerson(name,age);
            store.emitChange();
            break;
    }
    return true;
});

export default store;