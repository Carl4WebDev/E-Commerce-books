import { AllRoutes  } from './routes/AllRoutes';
import { Header, Footer  } from './components';

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
      {/* Srcoll to top feature */}
    </div>
  );
}

export default App;
