import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function SignInComponent() {
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [username, setUsername] = useState("");

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

  const loginSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      surname: surname,
      username: username,
      password: password,
      email: email,
      address: address,
      birth: birth,
    };

    console.log(user);
    axios
      .post("http://localhost:5001/users/add", user)
      .then((res) => Swal.fire("Kullanıcı Oluşturuldu. Hoşgeldiniz."));
  };
  const onNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const onSurnameChange = (e) => {
    setSurname(e.target.value);
    console.log(surname);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const onBirthChange = (e) => {
    setBirth(e.target.value);
    console.log(birth);
  };
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
              <form>
                <div class="form-floating mb-3">
                  <label for="floatingInput">Email adres</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={onEmailChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingInput">İsim</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="İsiminizi Giriniz"
                    onChange={onNameChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingInput">Soyisim</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Soyisminizi Giriniz"
                    onChange={onSurnameChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingInput">Doğum Tarihi</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Doğum Tarihini Giriniz"
                    onChange={onBirthChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingInput">Kullanıcı Adı</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Kullanıcı Adı Giriniz"
                    onChange={onUsernameChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Parola Giriniz"
                    onChange={onPasswordChange}
                  />
                </div>
                <div class="form-floating mb-3">
                  <label for="floatingPassword">Password Again</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
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
                    onClick={loginSubmit}
                  >
                    Kaydol
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInComponent;
