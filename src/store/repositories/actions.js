import * as types from './consts';
import api from '../../services/api'

export const addRepositorySuccess = repositories => {    
    return {
        type: types.SUCCESS_REPOSITORY,
        payload: repositories
    }
}

export const addRepositoryRequest = name => {        
    return {
        type: types.REQUEST_REPOSITORY,
        payload: name
    }

    /* 
        Agora a requisição na api é feita dentro de uma função generator no redux-saga,
        disparada pela execução da ação de REQUEST...
    */

    // api.get(`/repos/${name}`)
    //     .then(response => {            
    //         dispatch(addRepositorySuccess(response.data))
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
}