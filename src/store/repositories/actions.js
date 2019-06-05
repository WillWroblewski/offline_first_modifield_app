import * as types from './consts';
import api from '../../services/api'

const addRepositorySuccess = repositories => {    
    return {
        type: types.SUCCESS_REPOSITORY,
        payload: repositories
    }
}

export const addRepositoryRequest = name => dispatch => {    
    api.get(`/repos/${name}`)
        .then(response => {            
            dispatch(addRepositorySuccess(response.data))
        })
        .catch(error => {
            console.log(error)
        })
}