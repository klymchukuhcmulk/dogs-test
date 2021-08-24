export default (e, commit) => {
  console.log(e)
  commit('SET_ERROR', e.response.data)
}
