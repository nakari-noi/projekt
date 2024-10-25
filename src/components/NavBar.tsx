"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'; // Import NextAuth hooks

export default function Navbar() {
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session data

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const handleSignOut = async () => {
    await signOut(); // Trigger sign out
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" value="/profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevky" value="/prispevok" icon={<AddCircleIcon />} />

        {session ? (
          // Show sign out button if the user is authenticated
          <BottomNavigationAction label="Odhlásenie" onClick={handleSignOut} icon={<LogoutIcon />} />
        ) : (
          <>
            <BottomNavigationAction label="Prihlásenie" value="/auth/prihlasenie" icon={<LoginIcon />} />
            <BottomNavigationAction label="Registrácia" value="/auth/registracia" icon={<AppRegistrationIcon />} />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
