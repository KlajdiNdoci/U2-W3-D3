fetch("https://striveschool-api.herokuapp.com/books?")
  .then(responseObj => responseObj.json())
  .then(booksArr => {
    const row = document.querySelector(".row");

    booksArr.forEach(book => {
      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `<div class="card">
                            <img src=${book.img} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Price:${book.price}€</p>
                                <a href="#" class="btn btn-primary scarta-btn">Scarta</a>
                            </div>
                        </div>
        `;

      row.appendChild(col);
    });
    const scartaBtn = document.querySelectorAll(".scarta-btn");
    scartaBtn.forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".card");
        if (card) {
          card.remove();
        }
      });
    });
  })
  .catch(error => console.log(error));
