import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';

import './App.css';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const SignUpView = lazy(() =>
  import(
    '../../views/SignUpView/SignUpView' /* webpackChunkName: "sign-up-view" */
  ),
);

const LoginView = lazy(() =>
  import(
    '../../views/LoginView/LoginView' /* webpackChunkName: "login-view" */
  ),
);

const PhoneView = lazy(() =>
  import(
    '../../views/PhoneView/PhoneView' /* webpackChunkName: "phone-view" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="Container">
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/contacts" component={PhoneView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
