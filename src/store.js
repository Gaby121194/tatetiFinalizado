import { createStore, combineReducers } from 'redux'


let TEXT_CHANGE_ACTION = 'TEXT_CHANGE'

function dispatchTextChange(text ,id) {
    
    store.dispatch({
        type: TEXT_CHANGE_ACTION,
        autorizacion: text,
        id: id
    })
}



const initialState = {
    autorizacion: "Valor inicial del store",
    idtabla: "valor cualquiera"
}
function changeTextReducer(state = initialState, action) {
    switch (action.type) {
        case TEXT_CHANGE_ACTION:
            return Object.assign({}, state, {
                authorization: action.autorizacion ,
                idtabla: action.id
            })

        default:
            return state
    }
}


const store = createStore(changeTextReducer)

export {store, dispatchTextChange}