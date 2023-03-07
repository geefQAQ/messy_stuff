import http from '../utils/http'

const { get, post } = http;

export const getPlayers = () => {
  get('/player/all', data);
}