
const obj = {
  name: 'Baek',
  age: 31,
  alive: true,
  hobby: ['playing guitar', 'making craft']
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log("json의 타입은 : ", typeof json, "json의 값은 : " , json); 
// json의 타입은 :  string / json의 값은 :  {"name":"Baek","age":31,"alive":true,"hobby":["playing guitar","making craft"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJason = JSON.stringify(obj, null, 2);
console.log("prettyJason의 타입은 : ", typeof prettyJason, "prettyJason의 값은 : ", prettyJason);
/*
prettyJason의 타입은 :  string prettyJason의 값은 :  {
  "name": "Baek",
  "age": 31,
  "alive": true,
  "hobby": [
    "playing guitar",
    "making craft"
  ]
}
  */

