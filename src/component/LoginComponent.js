import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link, Navigate, useNavigate } from "react-router-dom";

function LoginComponent(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  useEffect(() => {
    axios.get("http://localhost:5001/users/").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    var a = data.find((x) => x.email === email);

    if (a === undefined) {
      Swal.fire({
        icon: "error",
        title: "Hatalı Giriş",
        text: "Kullanıcı adınızı Kontrol edin!",
      });
    } else if (a.password === password) {
      //setId(a._id);

      navigate("/customer/" + a._id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Hatalı Giriş",
        text: "Parolanızı adını Kontrol edin!",
      });
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={onEmailChange}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={onPasswordChange}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberPasswordCheck"
                />
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                  onClick={onSubmit}
                >
                  Sign in
                </button>
              </div>
              <hr class="my-4" />
              <div class="d-grid mb-2">
                <button
                  class="btn btn-google btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-facebook btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginComponent;
