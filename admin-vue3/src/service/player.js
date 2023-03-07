import { get, post, remove } from '@utils/http';

export class PlayerApi {
  static getPlayersByTeamIdUsingGET (teamId) {
    return get(`/api/players/${teamId}`);
  };
  static getPlayerByIdUsingGET(playerId) {
    return get(`/api/player/${playerId}`)
  }
}