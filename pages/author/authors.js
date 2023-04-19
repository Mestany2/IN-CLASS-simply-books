import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

function ListAuthors() {
  const [authors, setAuthors] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
        ))}
      </div>
    </div>
  );
}

export default ListAuthors;
