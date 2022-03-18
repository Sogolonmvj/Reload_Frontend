import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Styling } from './styles.js';

const App = () => {
  return (
    <BrowserRouter>
      <Styling>
        <Header />
        <Routes>
          <Route path="/" exact element={<Navigate to="/index" />} />
          <Route path="/index" exact element={<Main />} />
        </Routes>
        <Footer />
      </Styling>
    </BrowserRouter>
  );
}

export default App;
