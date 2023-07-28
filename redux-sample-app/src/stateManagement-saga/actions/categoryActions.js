//getAll
//getById
//add
//remove
//edit

import {CategoryFetchFailed,CategoryFetchRequested,CategoryFetchSucceeded} from './actionTypes'

export const categoryFetchRequested = () => ({
    type:CategoryFetchRequested
})

export const categoryFetchSucceeded = () => ({
    type:CategoryFetchSucceeded
})


export const categoryFetchFailed = () => ({
    type:CategoryFetchFailed
})

