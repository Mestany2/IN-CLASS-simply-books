import React from 'react';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function User() {
  const { user } = useAuth();

  return (
    <div className="text-light text-center">
      <Image
        src={user.photoURL}
        alt="Profile"
        width="100rm"
        height="100rm"
      />
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
      <p>{user.metadata.lastSignInTime}</p>
      <button type="button">{signOut}</button>
    </div>
  );
}
