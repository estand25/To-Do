import { actions } from '../action/type'

const initialState = {
    item: {},
    itemList: [],
    itemLoading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case actions.ITEM_ADD:
            var a = {
                ...state,
                item: action.item,
                itemList: [...state.itemList, action.item]
            }

            console.log('ITEM_ADD', a);
            return a;
        case actions.ITEM_DELETE:
            console.log('action', action.item)
            var b = {
                ...state,
                item: action.item,
                itemList: state.itemList.filter(x => x.id != action.item.id)
            }

            console.log('ITEM_DELETE', b)
            return b;
        case actions.ITEM_UPDATE:
            return {
                ...state,
                item: action.item,
                itemList: state.itemList.map((it, index) => {
                    if(it.id === action.id)
                        state[index] = action.item
                })
            }
        case actions.ITEM_GET_SINGLE:
            return {
                ...state,
                item: action.item,
                itemList: state.itemList.filter(x => x.id == action.id)
            }
        case actions.ITEM_GET_ALL:
            return {
                ...state,
                item: action.item,
                itemList: state.itemList
            }
        default:
            return state
    }
}