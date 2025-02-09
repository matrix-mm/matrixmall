import React from 'react';

// components
import Dashboard from 'src/components/_admin/dashboard';

// Meta information
export const metadata = {
  title: 'MATRiX Mall - Dashboard',
  description: 'Welcome to the MATRiX Mall Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'MATRiX Mall Dashboard',
  authors: 'MATRiX Mall',
  keywords: 'dashboard, e-commerce, management, MATRiX Mall',
  icons: {
    icon: '/favicon.png'
  }
};

export default function page() {
  return (
    <>
      <Dashboard isVendor />
    </>
  );
}
