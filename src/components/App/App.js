import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

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

const UserMenu = lazy(() =>
  import(
    '../../components/UserMenu/UserMenu' /* webpackChunkName: "user-menu" */
  ),
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="Container">
        <Container>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/login" component={LoginView} />
            <Route path="/menu" component={UserMenu} />
          </Switch>
        </Container>
      </div>
    </Suspense>
  );
}
