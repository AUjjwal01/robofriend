import {CHANGE_SEARCH_FIELD} from './constants'

export const setSeachField=(text)=>({
    type:'CHANGE_SEARCH_FIELD',
    payload:text
})