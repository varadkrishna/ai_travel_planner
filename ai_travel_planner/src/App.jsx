import { Toaster } from 'sonner';
import Header from './components/custom/Header';
import CreateTrip from './create-trip/CreateTrip';
import Hero from './components/custom/Hero';

function App() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <CreateTrip />
    </>
  );
}

export default App;
