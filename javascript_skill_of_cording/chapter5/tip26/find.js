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

const filters = dogs.reduce(
  (filters, item) => {
    filters.breed.add(item["견종"]);
    filters.size.add(item["크기"]);
    filters.color.add(item["색상"]);
    return filters;
  },
  {
    breed: new Set(),
    size: new Set(),
    color: new Set(),
  }
);

console.log("filters : ", filters);
// filters :  {
//   breed: Set(3) { '푸들', '레브라도레트리버', '보스턴테리어' },
//   size: Set(3) { '소형견', '중형견', '대형견' },
//   color: Set(2) { '검정색', '빨간색' }
// }

const filters2 = dogs.reduce(
  (filters, item) => {
    filters.breed.add(item.견종);
    filters.size.add(item.크기);
    filters.color.add(item.색상);
    return filters;
  },
  {
    breed: new Set(),
    size: new Set(),
    color: new Set(),
  }
);

console.log("filters2 : ", filters2);
// filters2 :  {
//   breed: Set(3) { '푸들', '레브라도레트리버', '보스턴테리어' },
//   size: Set(3) { '소형견', '중형견', '대형견' },
//   color: Set(2) { '검정색', '빨간색' }
// }
