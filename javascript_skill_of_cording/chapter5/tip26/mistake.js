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

const colors = dogs.reduce((colors, dog) => {
  // inCludes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
  if (colors.includes(dog["색상"])) {
    return colors;
  }
  [...colors, dog["색상"]];
}, []);
console.log("colors : ", colors);
// TypeError: Cannot read property 'includes' of undefined
// reduce의 누적값을 반환하지 않으면 값은 완전히 사라져서 TypeError 발생