import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AddCategory from 'src/components/_admin/categories/addCategory';

// Meta information
export const metadata = {
  title: 'Add Categories - MATRiX Mall',
  applicationName: 'MATRiX Mall',
  authors: 'MATRiX Mall'
};

export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Categories List"
        links={[
          {
            name: 'Dashboard',
            href: '/admin'
          },
          {
            name: 'Categories',
            href: '/admin/categories'
          },
          {
            name: 'Add Category'
          }
        ]}
      />
      <AddCategory />
    </div>
  );
}
