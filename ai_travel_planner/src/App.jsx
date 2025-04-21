import { useState } from 'react';
import { Toaster } from 'sonner';  // ✅ Important: Import Toaster here

import Header from './components/custom/Header';
import CreateTrip from './create-trip/CreateTrip';
import Hero from './components/custom/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster richColors position="top-center" /> {/* ✅ Add Toaster here */}
      <Header />
      <Hero />
      <CreateTrip />
    </>
  );
}

export default App;
