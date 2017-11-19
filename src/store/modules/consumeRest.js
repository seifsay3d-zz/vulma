import Vuex from "vuex"
import Vue from "vue"
import Vapi from "vuex-rest-api"
import {baseURL} from '../../api/axios';
import {axiosInstance} from '../../api/axios';;
Vue.use(Vuex)

const entities = new Vapi({
  axios: axiosInstance,
  baseURL: baseURL,
  state: {
    entities: [],
  },
})
  .get({
    action: "listEntity",
    property: "entities",
    path: '/path/',
    queryParams: true,
  })
  .getStore()
export default entities;