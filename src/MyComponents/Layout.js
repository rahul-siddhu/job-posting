import React from 'react';
import { Footer } from './Footer'; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="content" style={{ flex: '1' }}>
        {children} {/* This will render the content of the current route */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
