# Table of Contents

## Install
1. Clone repo
2. Install Dependencies
```md
npm i
```
3. Run app.
```md
npm run start
```

- [User Story](#user-story)
- [Requirements](#requirements)
- [Screenshot](#screenshot)
- [Link](#Link)
- [Technologies Used](#technologies-used)

# Summary

Refactored a Google Books Search Engine application that was previously using a RESTful API. The application now uses a GraphQL API built with an Apollo Server. 

# User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

# Requirements

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Screenshot 
<img width="1439" alt="Screen Shot 2022-06-12 at 1 30 32 PM" src="https://user-images.githubusercontent.com/92201576/173247966-03d3351c-b6d7-471a-92a2-813f9d15557a.png">


## Link

- https://protected-bastion-67896.herokuapp.com/

### Technologies Used

- MongoDB
- JavaScript
- Node.js
- Express.js
- GraphQL
- NPM
- React.js
- Mongoose

### Contributors

- Faissal Shabani
