# Guestbook
This exercise is an introduction to HTML Forms, RESTful-resources, and a stepping stone towards transmitting/saving/accessing data that is made available by a server.

## Your Task
- Create a web form in the file: `public/guestbook-form.html`
- The form will be created with Javascript, no HTML code!
- The form will send data(POST) to the address: `localhost:3000/guestbook`.

After sending the data the server will send you a JSON representation of the message you wanted to create. You may now navigate back to `localhost:3000/` to see how your guestbook has been updated!

## Getting Started
### Set-up
1. Fork this repository and clone it from your personal GitHub Account
1. In the Terminal, navigate to the newly created folder for this repository
1. Install dependencies by running the command: `npm install`
1. Install *Json-Server* via NPM, and globally, with the command: `npm install -g json-server`

### Workflow
1. Run the command: `json-server server/guestbook.json'
1. Navigate to `localhost:3000` in your web browser
