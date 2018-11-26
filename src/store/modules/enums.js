import {getEnums} from '@/api/config'
const enums = {
  state: {
    enumsList: []
  },
  mutations: {
    GET_ENUMS: (state,data) => {
      state.enumsList=data;
    }
  },
  actions: {
    GetEnums: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getEnums().then(response => {
          const data = response.data;
          commit('GET_ENUMS',data);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default enums
