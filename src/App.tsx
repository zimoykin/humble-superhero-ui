import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';
import DefaultPage from './pages/default-page';

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <HeaderComponent />
          <Routes>
            <Route
              path='/'
              element={<DefaultPage children={<HomePage />} />}
            />
          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
