import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { viewAuthorDetails } from '../../api/mergedData';

// inside component use
export default function ViewAuthor() {
  const [authorBooks, setAuthorBooks] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorBooks);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Image src={authorBooks.image} alt={authorBooks.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorBooks.title} by {authorBooks.authorObject?.first_name} {authorBooks.authorObject?.last_name}
          {authorBooks.authorObject?.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorBooks.authorObject?.email}`}>{authorBooks.authorObject?.email}</a>
        <p>{authorBooks.description || ''}</p>
        <hr />
        <p>
          {authorBooks.sale
            ? `🏷️ Sale $${authorBooks.price}`
            : `$${authorBooks.price}`}
        </p>
      </div>
    </div>
  );
}
