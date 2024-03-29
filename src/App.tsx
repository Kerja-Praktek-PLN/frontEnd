import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Forgetpass from './pages/Authentication/Forgetpass';
import Loader from './common/Loader';
import routes from './routes';
import Home from './pages/Dashboard/Home';
import ConfirForgetpass from './pages/Authentication/confirmation';
import 'react-toastify/dist/ReactToastify.css';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
    <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto'/>
  
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/Forgetpass" element={<Forgetpass />} />
        <Route path="/auth/ConfirForgetpass" element={<ConfirForgetpass />} /> 
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {routes.map(({ path, component: Component }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
