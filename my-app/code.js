var contactsList = [];
// Creates a new contact with a name and number
// Adds the contact to the end of the list

function addNewContact(name, number) {
  var contact = {
    name: name,
    number: number
  };
  contactsList[contactsList.length] = contact;
}

// displays the contacts name and number to list
function displayContacts() {
  var contactList = "";
  for (var i = 0; i < contactsList.length; i++) {
    var contact = contactsList[i];
    contactList += contact.name + ": " + contact.number + "\n";
  }
  setText("contactsOutput", contactList);
}

onEvent("addContactButton", "click", function() {
  var name = getText("nameInput");
  var number = getText("numberInput");
  addNewContact(name, number);
  displayContacts();
  playSound("assets/category_bell/notification_4.mp3", false);
});
