const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", filterBooks));

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  //let filteredBooks = books.filter((book) => book.categoria == category);

  /*let filteredBooks =
    category == "disponivel"
      ? books.filter((book) => book.quantidade > 0)
      : books.filter((book) => book.categoria == category);
  displayBooks(filteredBooks);*/

  let filteredBooks =
    category == "available"
      ? books.filter((book) => book.quantidade > 0)
      : books.filter((book) => book.categoria == category);
  displayBooks(filteredBooks);
}
