import UserRegister from '../../components/UserRegister/UserRegister';
import { Route, Switch } from 'react-router';
import { Suspense } from 'react';
import Loader from 'react-loader-spinner';

export default function SignUpView() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/signup" component={UserRegister} />
        </Switch>
      </Suspense>
    </>
  );
}
