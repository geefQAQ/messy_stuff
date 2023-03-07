import { get, post, remove } from '@utils/http';

export class TeamApi {
  static getAllTeamUsingGET() {
    return get('/api/teams')
  }

  static addTeamUsingPOST(params) {
    return post('api/team/create', params)
  }

  static updateTeamUsingPOST(params) {
    return post('api/team/update', params)
  }

  static removeTeamUsingDELETE(id) {
    return remove(`/api/team/delete/${id}`);
  }
}
// export const GET_ALL_TEAM = () => {
//   return get('/api/teams')
// }

// export const REMOVE_TEAM = (id) => {
//   return remove(`/api/team/delete/${id}`);
// }

// export const ADD_TEAM = (params) => {
//   return post('/api/team/create', params)
// }
