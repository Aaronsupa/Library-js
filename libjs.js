let myLibrary = [];

const btn = document.getElementById("mybtn");
const Library = document.querySelector("#bookTable");
const popUp = document.getElementById("popUp");
const submitbtn = document.getElementById("subbtn");
let count = 0;

function Book(name, author, pageLength) {
    this.name = name;
    this.author = author;
    this.pageLength = pageLength;
}

function addBookToLibrary(newb) {
    const b2 = document.createElement("tr");
    Library.appendChild(b2);
    const b3 = document.createElement("td");
    const b4 = document.createElement("td");
    const b5 = document.createElement("td");
    b3.textContent = myLibrary[count]['name'];
    b4.textContent = myLibrary[count]['author'];
    b5.textContent = myLibrary[count]['pageLength'];
    b2.appendChild(b3);
    b2.appendChild(b4); 
    b2.appendChild(b5); 
    console.log(myLibrary);
    popUp.style.display = 'none';
    count += 1;
}

btn.addEventListener('click', () => {
    popUp.style.display = 'block';
});

submitbtn.addEventListener('click', function(event){
    event.preventDefault()
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pagecnt = document.getElementById("pagecnt").value;
    const newbook = new Book(name, author, pagecnt);
    myLibrary.push(newbook);
    addBookToLibrary(newbook);
})