import { Toaster } from 'sonner';
import Header from './components/custom/Header';
import CreateTrip from './create-trip/CreateTrip';
import Hero from './components/custom/Hero';
<<<<<<< HEAD
import ViewTrip from './view-trip/ViewTrip.jsx'; // ✅ Correct casing
=======
import ViewTrip from './view-trip/[tripId]/ViewTrip.jsx'; // ✅ Correct casing
>>>>>>> fdc110117a53e6fa7d809ade9dd2c05571b354ac
import InfoSection from './view-trip/components/InfoSection';

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <CreateTrip />
      <ViewTrip />
      
    </>
  );
}

export default App;