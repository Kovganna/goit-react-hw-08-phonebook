import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

import './App.css';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const SignUpView = lazy(() =>
  import('../../views/SignUpView' /* webpackChunkName: "sign-up-view" */),
);

const UserLogin = lazy(() => import('../../views/LoginView'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="Container">
        <Container>
          <AppBar />
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/signup">
              <SignUpView />
            </Route>
            <Route path="/login">
              <UserLogin />
            </Route>
          </Switch>
        </Container>
      </div>
    </Suspense>
  );
}
