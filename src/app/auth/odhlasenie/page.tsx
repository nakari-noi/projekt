'use client';

import { signOut } from 'next-auth/react';
import { Button, Container, Typography } from '@mui/material';

export default function Odhlasenie() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sign out of your account
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignOut}
        style={{ marginTop: '2rem' }}
      >
        Sign out
      </Button>
    </Container>
  );
}
