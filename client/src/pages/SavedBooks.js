import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_BOOK } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);
  // checking to see if there is book data tied to the reader, if not it will return an empty object for the possibility of adding a reader and their chosen books
  const userData = data?.me || {};

  const handleDeleteBook = async (bookId) => {
    // token variable will check if the user is logged in, if so it will get a token.
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeBook({
        // inject the variable that we want GraphQL to use for the function
        variable: { bookId },
      });
      // no we will inject the book id into the removeBookId(), that will then remove the book from localStorage
      removeBookId(bookId);
    } catch (error) {
      console.error(error);
    }
  };
  // While the page is loading due to data not populating the screen yet, this will be shown to the user.
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? 'book' : 'books'
              }:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  {book.link ? (
                    <Card.Text>
                      <a href={book.link} target='_blank'>
                        More Information on Google Books!
                      </a>
                    </Card.Text>
                  ) : null}
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className='btn-block btn-danger'
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        {error && <div>Book has not been removed!</div>}
      </Container>
    </>
  );
};

export default SavedBooks;
