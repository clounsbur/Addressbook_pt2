// {
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  findByName(name) {
    for (let contact of this.contacts) {
      if (contact.name === name) {
        console.log(contact);
        return contact;
        this.contact.find(contact);
      }
    }
  }
}
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
// }
const print = function(referencetoaddressbook) {
  console.log(referencetoaddressbook);
};

let myBook = new AddressBook();
myBook.add("Sawsan", "sawsanl@gmail.com", "734-789-7987", "friend");
myBook.add("Craig", "craig@gmail.com", "734-789-7897", "relation");
myBook.add("La'Tisha", "lala@gmail.com", "734-678-1094", "relation");
myBook.add("Lindsey", "linlin@gmail.com", "654-6546", "relation");
myBook.deleteAt(1);
myBook.findByName("Craig");
// myBook.filterByRelation("friend");

print(myBook);

// function display() {
//   for (const contact of myBook.contacts) {
//     const div = document.createElement("div");
//     div.classList.add("contact_container");
//     const name = document.createElement("p");
//     const email = document.createElement("p");
//     const phone = document.createElement("p");
//     const relation = document.createElement("p");
//     name.innerText = `Name: ${contact.name}`;
//     email.innerText = `Email: ${contact.email}`;
//     phone.innerText = `Phone: ${contact.phone}`;
//     relation.innerText = `Relation: ${contact.relation}`;
//     div.append(name);
//     div.append(email);
//     div.append(phone);
//     div.append(relation);
//     document.querySelector(".contactBox").append(div);
//   }
// }

// document.querySelector("form").addEventListener("submit", e => {
//   e.preventDefault();
//   const formData = new FormData (form);
// myBook.add(
//   formData.get("name"),
//   formData.get("email"),
//   formData.get("phone"),
//   formData.get("relation")
// );

//     display();

// html should contain a section with nothing in it section id = contact-list
// address book has one property called contacts and array and a couple methods
// a class instance makes an Object
// first we created a new instance of addressbook an Object we used add method to add name email. we have to make an instance of the class to call the add method. it can only be called on an instnace of the address book. display uses a for each loop to create a div for each loop which is called newEntry.
// function display

function display() {
  document.querySelector("#contact_list").innerHTML = "";
  myBook.contacts.forEach((contact, index) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("contact_box"); //so you can style the div
    newEntry.innerHTML = `
      <p>Name:${contact.name}</p>
      <p>Email:${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Relation:${contact.relation}</p>
      <i class="fa fa-trash" data-index-number="${index}" aria-hidden="true"></i>`;
    document.querySelector("#contact_list").appendChild(newEntry);
  });
}
display();
//set a variable equal to my form in html

const form = document.querySelector("form");
form.addEventListener("submit", addContact);
function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  myBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset(); //resets the form
  display(); //call to represent change from form input and submit
}

//if you don't have an index attribute on your contact cards you can't target them to delete
// //adding a click event to a container to watch out for clicks on my trash icon
// using event delegation to assign event listener to parent element
document
  .querySelector("#contact_list")
  .addEventListener("click", deleteContact);
function deleteContact(e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index-number");
    console.log(index);
    myBook.deleteAt(index);
    display();
  }
}
