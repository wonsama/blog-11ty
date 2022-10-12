const { post } = require("./wrpc");

const STEEM_API_URL = "https://api.supporter.dev";

/**
 * 컨텐츠 정보를 가져온다
 * @param {string} author 계정명
 * @param {string} permlink 영구링크
 * @returns 컨텐츠 정보
 */
const getContent = (author, permlink) => {
  return post(STEEM_API_URL, "condenser_api.get_content", [author, permlink]);
};

module.exports = {
  getContent,
};
