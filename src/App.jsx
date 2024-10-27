import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Whatsapp from './Components/Whatsapp';

// Lazy load the components
const Home = lazy(() => import('./Pages/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Contactus = lazy(() => import('./Pages/Contactus'));
const Programs = lazy(() => import('./Pages/Programs'));
const Videos = lazy(() => import('./Pages/Videos'));
const AdminDashboard = lazy(() => import('./Pages/AdminDashboard'));
const Auth = lazy(() => import('./Auth'));

// Fallback component for lazy-loaded components
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/admin" element={<Auth />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
      <Whatsapp />
    </Router>
  );
}

export default App;