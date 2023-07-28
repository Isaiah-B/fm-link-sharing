import { Route, Routes } from 'react-router-dom';

import PageMain from "./pages/page-main/page-main.page";
import PagePreview from './pages/page-preview/page-preview.page';

import { Container } from "./App.styles";
import LoginPage from './pages/auth/login-page';
import SignupPage from './pages/auth/signup-page';

function App() {

  return (
    <Container>
      <Routes>
        <Route index element={<PageMain />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='preview' element={<PagePreview />} />
        <Route path='*' element={<h1>Nothing here!</h1>} />
      </Routes>
    </Container>
  );
}

export default App
