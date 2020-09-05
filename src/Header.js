import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';

export default () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo href="#">Product</EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink href="#" isActive>
            Docs
          </EuiHeaderLink>

          <EuiHeaderLink href="#">Code</EuiHeaderLink>

          <EuiHeaderLink iconType="help" href="#">
            Help
          </EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};
