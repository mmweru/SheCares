import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ConvexClientProvider } from './components/convex-client-provider.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
