import UserLogin from '../../components/UserLogin';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import PhoneView from '../PhoneView/PhoneView';

export default function LoginView() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <div>{isLoggedIn ? <PhoneView /> : <UserLogin />}</div>;
}
