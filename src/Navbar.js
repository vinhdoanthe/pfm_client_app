import React, { useState } from 'react';

import { EuiIcon, EuiSideNav } from '@elastic/eui';

const Navbar = (active_item) => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState(active_item);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = name => {
    setSelectedItem(name);
  };

  const createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
    };
  };

  const sideNav = [
    createItem('Transactions', {
      href: '/transactions'
    }),
    createItem('Tasks', {
      href: '/tasks'
    }),
    createItem('Dashboard', {
      href: '/dashboard'
    }),
    createItem('Settings', {
      href: 'settings'
    }),
  ];

  return (
    <EuiSideNav
      mobileTitle="Navigate within $APP_NAME"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};

export default Navbar;
