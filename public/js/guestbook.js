var items = [];

window.onload = function() {
  var request = new XMLHttpRequest();
  request.onload = function() {
    items = this.response;
    appendItemList(items);
  };
  request.responseType = 'json';
  request.open('GET', 'http://localhost:3000/items', true);
  request.send();
}

function appendItemList(items) {
  items.forEach(function (item) {
    if (item.hasOwnProperty('name')){
      var paragraph = document.createElement('p');
      paragraph.innerHTML = item.name;
      paragraph.innerHTML += item.description;
      document.body.appendChild(paragraph);
    }
  });
}

var form = document.createElement('form');
// form.method = "GET";
// form.onsubmit = submitGithubForm;
form.method = "POST";
form.action = "http://localhost:3000/guestbook-form.html/";

var fields = ['name'];
var fields = ['description'];

fields.forEach(function(name) {
  new InputField('name');
  new InputField('description');
});

function InputField (name) {
  var input    = document.createElement('input');
    input.name = name;
    input.description = description;
  form.appendChild(input);
}

var button = document.createElement('button');

button.innerHTML = "Submit";
button.type = "submit";
document.body.appendChild(form);
form.appendChild(button);