
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './components/Articles';
import Multimedia from './components/Multimedia';
import Resume from './components/Resume';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex flex-col flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artigos" element={<Articles />} />
            <Route path="/multimidia" element={<Multimedia />} />
            <Route path="/sobre" element={<Home />} />
            <Route path="/curriculo" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
