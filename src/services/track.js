import apiService from './api';

const trackService = {

}

trackService.search = function (q) {
  const type = 'track'

  return apiService.get('/search', {
    params: {
      q: q,
      type: type
    }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return apiService.get(`/tracks/${id}`)
    .then(res => res.data);
}

export default trackService;
