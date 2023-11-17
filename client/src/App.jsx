import { Outlet } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

    return (
      <div>
        <StoreProvider>
          <Header />
          <Outlet />
          <Footer />
        </StoreProvider>
      </div>
  );
}

export default App
