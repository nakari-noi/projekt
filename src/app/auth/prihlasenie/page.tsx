'use client';

import { signIn } from 'next-auth/react';
import { Button, Container, Typography } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

export default function Prihlasenie() {
  const handleGoogleSignIn = async () => {
    await signIn('google');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sign in to your account
      </Typography>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
        style={{ marginTop: '2rem' }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
}
