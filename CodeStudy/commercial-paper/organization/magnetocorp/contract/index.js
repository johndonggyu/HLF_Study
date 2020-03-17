/*
SPDX-License-Identifier: Apache-2.0
*/

/* written by KDG - 'use strict'
함수 안이 아닌 아래처럼 엄격모드를 사용할 경우에는 전체 스크립트 엄격모드를
사용한다는 의미이다. 엄격모드는 기존에는 조용히 무시되던 에러들을 throwing한다.
https://beomy.tistory.com/13 참고
*/
'use strict';
/* written by KDG - const cpcontract
const는 재할당이 금지된다. const는 반드시 선언과 동시에 할당이 이뤄져야 한다.
const는 let과 마찬가지로 블록 레벨 스코프를 가진다.
객체라면 객체에 대한 참조를 변경하지 못하고, 객체의 프로퍼티는 보호되지 않는다.
https://poiemaweb.com/es6-block-scope 참고
*/
/* written by KDG - require('./lib/papercontract.js');
./lib/ 경로에 있는 papercontract.js 모듈을 불러온다.
require 메서드는 내부적으로 module.exports를 반환한다.
자세한건 https://dololak.tistory.com/97 참고하면 사용법 정도는 이해할 수 있음.
*/
const cpcontract = require('./lib/papercontract.js');
/* written by KDG - module.exports.contracts
index.js (현재파일)을 require함수로 가져가는 파일은 contracts라는 객체로
./lib/papercontract.js 모듈을 사용할 수 있다.
근데 index.js 파일을 require하는 부분은 찾아보니 없다.
알아서 가져다 사용하라는 듯한데...?
*/
module.exports.contracts = [cpcontract];