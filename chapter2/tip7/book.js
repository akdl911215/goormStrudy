const book = ["IT의 미래", "이정현", 99000];

function formatBook(title, author, price) {
  return `책 제목: ${title} 저자: ${author} 가격: ${price}원`;
}

console.log(
  "formatBook(book[0], book[1], book[2]) : ",
  formatBook(book[0], book[1], book[2])
);
// 책 제목: IT의 미래 저자: 이정현 가격: 99000원
