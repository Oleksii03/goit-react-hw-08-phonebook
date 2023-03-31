import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { Heading, UserLink, Text } from './Home.styled';
import { LogOutButton } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleClick = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>Hello, {user.name}!</Heading>
          <Text>To your phonebook</Text>
          <UserLink to="/contacts">Contacts</UserLink>
          <Text>Switch to another account</Text>
          <LogOutButton type="button" onClick={handleClick}>
            Logout
          </LogOutButton>
        </>
      ) : (
        <>
          <Heading>This is your phonebook !</Heading>
          <Text>Please, log in to reach your contacts !</Text>
          <UserLink to="/login">Login</UserLink>
          <Text>Or register !</Text>
          <UserLink to="/register">Register</UserLink>
        </>
      )}
    </>
  );
};

export default Home;