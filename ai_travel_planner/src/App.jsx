import { Toaster } from 'sonner';
import Header from './components/custom/Header';
import CreateTrip from './create-trip/CreateTrip';
import Hero from './components/custom/Hero';
import ViewTrip from './View-trip/ViewTrip.jsx'; // ✅ Correct casing

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