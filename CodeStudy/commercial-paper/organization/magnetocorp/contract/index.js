/*
SPDX-License-Identifier: Apache-2.0
*/

/* written by KDG - 'use strict'
함수 안이 아닌 아래처럼 엄격모드를 사용할 경우에는 전체 스크립트 엄격모드를
사용한다는 의미이다. 엄격모드는 기존에는 조용히 무시되던 에러들을 throwing한다.
https://beomy.tistory.com/13 참고
*/
'use strict';

const cpcontract = require('./lib/papercontract.js');
module.exports.contracts = [cpcontract];