import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarForm from '../components/calendrierForm/CalendarForm';
import CalendarComponent from '../components/calendrierAff/CalendarDisplay';

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes pour toutes les pages */}
        <Route path="/" element={<CalendarForm />} />
        <Route path="/calendrier" element={<CalendarComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
