import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageMain from "./pages/page-main/page-main.page";
const Login = lazy(() => import('./pages/auth/login-page'));
const Signup = lazy(() => import('./pages/auth/signup-page'));
const Preview = lazy(() => import('./pages/page-preview/page-preview.page'));

import { Container } from "./App.styles";

function App() {

  return (
    <Container>
      <Routes>
        <Route index element={<PageMain />} />
        <Route path='login' element={<Suspense><Login /></Suspense>} />
        <Route path='signup' element={<Suspense><Signup /></Suspense>} />
        <Route path='preview/:id' element={<Suspense><Preview /></Suspense>} />
        <Route path='*' element={<h1>Nothing here!</h1>} />
      </Routes>
    </Container>
  );
}

export default App
