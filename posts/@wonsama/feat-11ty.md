---
layout: base.njk
author: wonsama
permlink: feat-11ty
category: hive-101145
url: https://steemit.com//hive-101145/@wonsama/feat-11ty
created: 2022-10-12T14:40:27
title: 【개발】 스팀 컨텐츠 정보 가져오기 feat ː 11ty
tags: ["hive-101145","sct-kr","sct-freeboard","sct","krsuccess","wonsama","kr-dev"]
---
# 스팀 컨텐츠 정보 가져오기

axios 를 활용하여 rpc20 통신을 통해 컨텐츠 정보를 가져온다 

![](https://cdn.steemitimages.com/DQmesBjRBhoj64YivA15DxkP4uV7vKbHKDFsEuMQJmUghH4/image.png)

음... 손쉽게 정보를 가져올 수 있다.

> 물론 steemjs 를 사용해도 되나 예전 버전인지라 가끔 hang 걸리는 경우가 있어서 ( bluebird 때문으로 알고 있음 ) axios 를 사용하기로 했다.

# 컨텐츠 정보 저장

![](https://cdn.steemitimages.com/DQmaTZzcfiNhsxjivqchwGSyxafy8eL9GMWnovuqhB1gjuv/image.png)

이렇게 가져온 정보는 특정폴더(posts) 에 위치 하여 author - permlink ( 스팀잇과 동일한 URI 구조 )로 기록하기로 한다

![](https://cdn.steemitimages.com/DQmXr9mjTf6hWMHZcm6n3R9KjxFQHMSN2M55sjimn8TkqNG/image.png)

npm 스크립트로 개별 파일 정보를 가져오도록 (retrieve) 스크립트를 작성한다

# 컨텐츠 정보 내려받기 스크립트 작성

![](https://cdn.steemitimages.com/DQmdeYgbWncuNfnwGAzuUSAgLFWZ8won64VNoXqASa8oKBX/image.png)

# 글 정보 확인

기존에 만들어 놓은 스팀잇 최신 글 정보 가져오기에서 적절한 글 정보를 발췌한다 

> https://steemit.wonsama.dev/st/st0001

![](https://cdn.steemitimages.com/DQmbbH8eCipimBZDXvXBKoi5wnV7oMPUKyZEZTdfLHevLiM/image.png)

# 컨텐츠 정보 내려받기

`$ npm run cont deer3 4ppdg9-ftx`

![](https://cdn.steemitimages.com/DQmcSM3S42mW15H94jLkpaLkgRJTozh166UFWY21acvuJPQ/image.png)

잘 내려 받아 지는 것을 확인 할 수 있었다.

다음 시간에는 이렇게 내려받은 파일을 가지고 화면 구성을 해보도록 하겠습니다.