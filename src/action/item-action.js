import { actions } from './type'

export const setItemAdd = (item) => ({
    type: actions.ITEM_ADD,
    item
})

export const setItemDelete = (item) => ({
    type: actions.ITEM_DELETE,
    item
})

export const setItemUpdate = (item) => ({
    type: actions.ITEM_UPDATE,
    item
})

export const getSingleItem = (item) => ({
    type: actions.ITEM_GET_SINGLE,
    item
})

export const getAllItem = (item) => ({
    type: actions.ITEM_GET_ALL,
    item
})