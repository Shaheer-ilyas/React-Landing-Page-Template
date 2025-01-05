import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Application from './components/Application';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewApplications from './components/ViewApplications';
import AdminLogin from './Auth/AdminLogin';
import ProtectedRoute from './Auth/ProtectedRoute';
import NewsFeed from './pages/NewsFeed';
import AdminAddNews from './pages/AdminAddNews';
import AdminAddDrawSchedule from './pages/AdminAddDrawSchedule';
import DrawSchedule from './pages/DrawSchedule';
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/Privacy Policy';
import AdminAddTermsAndConditionsLink from './pages/AdminAddTermsAndConditionsLink';
import AdminAddPrivacyLink from './pages/AdminAddPrivacyLink';

function App() {
  return (
    <Router>
      <main>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<Application />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/draw-schedule" element={<DrawSchedule />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <ViewApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-add-news"
          element={
            <ProtectedRoute>
              <AdminAddNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-add-draw"
          element={
            <ProtectedRoute>
              <AdminAddDrawSchedule />
            </ProtectedRoute>
          }
          />

        <Route
          path="/admin-add-terms-link"
          element={
            <ProtectedRoute>
            <AdminAddTermsAndConditionsLink/>
            </ProtectedRoute>
          }
          />

<Route
          path="/admin-add-privacy-link"
          element={
            <ProtectedRoute>
            <AdminAddPrivacyLink/>
            </ProtectedRoute>
          }
          />
      </Routes>
          </main>
    </Router>
  );
}

export default App;
