const dogs = [
  {
    이름: "우주",
    크기: "소형견",
    견종: "푸들",
    색상: "검정색",
  },
  {
    이름: "은하",
    크기: "중형견",
    견종: "레브라도레트리버",
    색상: "검정색",
  },

  {
    이름: "도니",
    크기: "대형견",
    견종: "보스턴테리어",
    색상: "빨간색",
  },
];

const colors = dogs.map((dog) => dog["색상"]);
console.log(colors);
// [ '검정색', '검정색', '빨간색' ]

let color = new Set(colors);
console.log(color);
// Set(2) { '검정색', '빨간색' }