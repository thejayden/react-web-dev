import * as ActionTypes from './ActionTypes';

//shape of state is change to have 3 different parameters
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            //sprint operator from ES6
            //take current value of state and whatever else that will be passed in after this will be applied as modifications to the state
            //create a new object from the original state and then make some changes to that object and then return that object
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};