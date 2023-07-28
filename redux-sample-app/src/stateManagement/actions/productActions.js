//getAll
//getById
//add
//remove
//edit

import {ProductAdd,ProductEdit,ProductGetAll,ProductRemove,ProductGetById} from './actionTypes'

export const getAll = () => ({
    type:"PRODUCT_GET_ALL" //??
})

export const getById = id => ({
    type:ProductGetById,
    payload:id
})

export const add = item => ({
    type:ProductAdd,
    payload:item
})

export const remove = id => ({
    type:ProductRemove,
    payload:id
})

export const edit = item => ({
    type:ProductEdit,
    payload:item
})