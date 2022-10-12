const { getContent } = require("../libs/wsteem");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

/**
 * 입력받은 아규먼트 기준으로
 * author permlink 를 판별하여 해당 정보 기준 contents 정보를 가져온다
 * @param {array} argv 외부로부터 입력받은 어규먼트
 */
async function init(argv) {
  if (!argv || argv.length < 4) {
    throw Error("argv : must enter author & permlink");
  }
  let author = argv[2];
  let permlink = argv[3].replace(/\@/, "");

  let cont = await getContent(author, permlink); // "steemit", "firstpost"
  let folder = path.join(__dirname, `../../posts/@${author}`);

  if (!fs.existsSync(folder)) {
    mkdirp.sync(folder);
  }

  let meta = JSON.parse(cont.json_metadata);
  let tags = meta.tags ? JSON.stringify(meta.tags) : JSON.stringify([]);

  let texts = [];
  texts.push(`---`);
  texts.push(`layout: base.njk`);
  texts.push(`author: ${cont.author}`);
  texts.push(`permlink: ${cont.permlink}`);
  texts.push(`category: ${cont.category}`);
  texts.push(`url: https://steemit.com/${cont.url}`);
  texts.push(`created: ${cont.created}`);
  texts.push(
    `title: ${cont.title
      .replace(/\{|\}|\|/gi, " ")
      .replace(/\[/gi, "【")
      .replace(/\]/gi, "】")
      .replace(/\:/gi, "ː")}`
  );
  // 【	】

  texts.push(`tags: ${tags}`);
  texts.push(`---`);
  texts.push(cont.body);

  console.log(cont);

  fs.writeFileSync(`${folder}/${permlink}.md`, texts.join("\n"), "utf-8");
}
init(process.argv);

/*

---
layout: base.njk
title: 코드 하이라이팅
tags: ["한글", "코드"]
sub_title: SYNTAX HIGHLIGHTING PLUGIN
sub_title_link: https://www.11ty.dev/docs/plugins/syntaxhighlight/
---

*/
