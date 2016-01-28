var Dispatcher = require('flux').Dispatcher;
var Actions = require('../Actions/Actions');

/****************************
* CUSTOM DISPATCHER
****************************/

class AppDispatcher extends Dispatcher {
    handleAddPerson(pName,pAge) {
        this.dispatch({
            actionType : Actions.ADD_PERSON,
            data : {name : pName, age : pAge}
        });
    }
}

export default new AppDispatcher();
