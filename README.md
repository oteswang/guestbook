# Guestbook
This exercise is an introduction to HTML Forms, RESTful-resources, and a stepping stone towards transmitting/saving/accessing data that is made available by a server.

## Your Task
- Create a web form in the file: `public/guestbook-form.html`
- The form will be created with Javascript, no HTML code!
- The form will send data(POST) to the address: `localhost:3000/guestbook`.
- No messages are being loaded when the `index.html` page is accessed. Fix it by using XHR!

After sending the data the server will send you a JSON representation of the message you wanted to create. You may now navigate back to `localhost:3000/` to see how your guestbook has been updated!

## Getting Started
### Set-up
1. Fork this repository and clone it from your personal GitHub Account
1. In the Terminal, navigate to the newly created folder for this repository
1. There is one dependecy for this project, Install *Json-Server* via NPM, globally, with the command: `npm install -g json-server`

### Workflow
1. Run the command: `json-server server/guestbook.json`
1. Navigate to `localhost:3000` in your web browser
1. the javascript for the `index.html` file is located at: `public/js/guestbook.js`
1. the HTML file that needs a form is located at: `localhost:3000/guestbook`
