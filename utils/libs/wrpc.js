/**
 * title : rpc 통신 관련 유틸리티
 * desc :
 * file : wrpc.js
 *
 * see more : https://axios-http.com/kr/docs/intro
 */

/////////////////////////////////////////////////////////////////
//
//  module exports
//
const axios = require("axios");
const WRPC_MAX_RETRY = 3;

/////////////////////////////////////////////////////////////////
//
//  functions
//

/**
 * RPC 2.0 통신 모델 생성
 * @param {string} method 호출 메소드
 * @param {array} params 전송 파라미터
 * @param {number} id 아이디 (수신 시 동일 id 값을 리턴해준다)
 * @returns Rpc20 Json
 */
const rpc20 = (method, params, id) => {
  let json = {};
  json.jsonrpc = "2.0";
  json.method = method;
  if (params) {
    json.params = params;
  }
  json.id = id;

  return json;
};

/**
 * (private) RPC 2.0 통신
 * @param {string} url 호출 주소
 * @param {string} method 호출 메소드
 * @param {object} params 전송 파라미터
 * @param {number} id 아이디 (수신 시 동일 id 값을 리턴해준다)
 * @returns Promise
 */
function _post(url, method, params, id = 1) {
  // return promise
  let rpc20json = rpc20(method, params, id);
  return axios.post(url, rpc20json);
}

/**
 * RPC 2.0 통신
 * @param {string} url 호출 주소
 * @param {string} method 호출 메소드
 * @param {object} params 전송 파라미터
 * @param {number} id 아이디 (수신 시 동일 id 값을 리턴해준다)
 * @param {number} retry 오류 재시도 횟수
 * @returns Promise
 */
async function post(url, method, params, id = 1, retry = 0) {
  let res;

  try {
    res = await _post(url, method, params, id);
  } catch (err) {
    console.log(err.toString());
    retry++;
    if (retry > WRPC_MAX_RETRY) {
      throw Error(`"${method}" max retry ${WRPC_MAX_RETRY} is over`);
    }
    return post(url, method, params, id, retry);
  }
  return res.data.result;
}

/////////////////////////////////////////////////////////////////
//
//  module exports
//

module.exports = {
  rpc20,
  post,
};
