import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AccountGeneral from 'src/components/_main/profile/edit/accountGeneral';

// Meta information
export const metadata = {
  title: 'Setting - MATRiX Mall',
  applicationName: 'MATRiX Mall',
  authors: 'MATRiX Mall'
};
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: 'Dashboard',
            href: '/admin'
          },
          {
            name: 'Settings'
          }
        ]}
      />
      <AccountGeneral />
    </div>
  );
}
