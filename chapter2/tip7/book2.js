const book = ["IT의 미래", "이정현", 99000];

function formatBook(title, author, price) {
  return `책 제목: ${title} 저자: ${author} 가격: ${price}원`;
}

console.log("formatBook(...book) : ", formatBook(...book));
// 책 제목: IT의 미래 저자: 이정현 가격: 99000원

const book2 = ["IT의 미래", "이정현", 99000, "2020년10월08일"];

function formatBook2(title, author, price, publicationDate) {
  return `책 제목: ${title} 저자: ${author} 가격: ${price}원 발간일: ${publicationDate}`;
}


console.log("formatBook2(...book2) : ", formatBook2(...book2));
// 책 제목: IT의 미래 저자: 이정현 가격: 99000원 발간일: 2020년10월08일
