// Q1. This function is a Reducer function from the Redux library to monitor change of state in relation to an action performed upon the store. 
// The function takes two parameters - first setting an 'initialState' as default to the state variable and secondly an action object.
// The function uses an if statement to check if the type of action is 'increment' which is an increase then the value of the state will increase by 1 and this is returned in a new object to represent the changed state. 
// But if the increment action is not performed the state will remain unchanged and 'initialState' that was set to 'state' is returned.


function countReducer(state = initialState, action) {
        if (action.type === 'increment') {
            return {
                value: state.value + 1
            };
        } else if (action.type === 'decrement') { //Q2
            return {
                value: state.value - 1
            };
        } else if (action.type === 'reset') { //Q3
            return initialState;
        } else {
            return state;
        }
    }



//Q2.1) The 'useState()' hook is being used to create a state variable and initialise the student count to 0. studentsCount holds the current count of students while setStudentsCount will update the state.
// In the return statement in JSX the <p> tag will display text on the page stating the number of studnets in the class room by embedding studentsCount in curly braces. Below this an 'onClick' event handler is used on a button tag so that the page can be rerendered with a new count if the state is changed.
// currently onClick is set to ????? so this will need to be replaced with a function to re-render.

//2a. Initialise studentsCount to 0 using useState and set an empty array of 'studentsPresent'. define the students as a const array using the data provided.
//Define the function 'addStudents' which will later be called in the button 'onClick' eventhandler. This will increment studentsCount by 1.
//Use filter method on students array to those with present: true and update 'studentsPresent' with the value of the filtered list.
//Return current studentsCount value
//b. You ensure the function is triggered when the button is clicked by inserting the function name into the curly braces as so <button onClick={addStudents} > Add Student </button>
//c. The state is updated with the result of the function by incrementing


//Q3.1) changing value: state.value + action.payload instead of +1 opens up some flexibility to change the value of incrementation. The payload property can be modified to tell the reducer how to change the state.
//2)
//3)
