import { HTTP } from '../util/axios'
const queryString = require('querystring')

let Demo = {}

Demo.getUser = function () {
  return HTTP.get(`/xdl/getUflowNodeByFidAndIid.do?flowid=IPYKQS&instanceid=fedbb286094d406db6a42535a84c27ab&loginid=yuxinyi&id`)
}

export default Demo
