
export const setPizza = ({ commit }, payload) => {
    console.log(payload);
    commit('setPizza', payload);
}
export const setAdicional = ({ commit }, payload) => {
    console.log(payload);
    commit('setAdicional', payload);
}