import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/default/Header";
import { signIn } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";
import { Link } from "react-router-dom";

export default function SignIn() {
	const dispatch = useDispatch();
	let history = useHistory();
	const selector = useSelector((state) => state);
	const errors = getUser(selector).errors;

	const initialValues = {
		email: "",
		password: "",
	};

	const [values, setValues] = useState(initialValues);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmit = async () => {
		setIsLoading(true);
		await dispatch(signIn(values, () => history.push("/profile")));
		setIsLoading(false);
		history.push("/profile");
	};

	return (
    <>
      <main>
        <Header />
        
        <div class="container">
          <div class="box">
            <h1>Welcome back!</h1>
            <p>Please login using your account</p>
            <form action="#">
              {errors.error ? (
                <span className="error-text">{errors.error}</span>
              ) : null}
              <label for="usename">EMAIL</label>
              <br />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              <br />
              {errors.email ? (
                <span className="error-text">{errors?.email[0]}</span>
              ) : null}
              <label for="password">PASSWORD</label>
              <br />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
              <br />
              {errors.password ? (
                <span className="error-text">{errors.password[0]}</span>
              ) : null}
              <button id="btn-login" onClick={onSubmit}>
                {`${isLoading ? "Logging In" : "Login"}`}
              </button>

              <div class="reset">
                <p>Forgot your password?</p>
                <Link to="/sign-up">
                  <a href="#">Reset Here</a>
                </Link>
              </div>
              <Link to="/sign-up">
                <input type="submit" value="CREATE AN ACCOUNT" id="login" />
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
