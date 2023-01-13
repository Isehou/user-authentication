import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

function Login() {
  const dispatch = useDispatch();
  const push = useNavigate();

  function handleLogin(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch(() => alert("Invalid user!"));
  }

  return <Form title="sign in" handleClick={handleLogin} />;
}

export default Login;
