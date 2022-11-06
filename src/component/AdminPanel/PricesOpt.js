import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function PricesOpt() {
  const [data, setData] = useState([]);
  const [trKargo, setTrKargo] = useState("");
  const [gumruk, setGumruk] = useState("");
  const [kktcKargo, setKktcKargo] = useState("");
  const [karOrani, setKarOrani] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5003/prices/").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  const loginSubmit = (e) => {
    e.preventDefault();
    const prices = {
      turkiyeKargoBedeli: trKargo,
      gumrukOrani: gumruk,
      adaKargoBedeli: kktcKargo,
      karOrani: karOrani,
    };

    console.log(prices);
    axios
      .post("http://localhost:5003/prices/add", prices)
      .then((res) => Swal.fire("Fiyatlar Eklendi"));
  };

  const onTrKargo = (e) => {
    setTrKargo(e.target.value);
    console.log(trKargo);
  };
  const onGumruk = (e) => {
    setGumruk(e.target.value);
    console.log(gumruk);
  };
  const onKktc = (e) => {
    setKktcKargo(e.target.value);
    console.log(kktcKargo);
  };
  const onKar = (e) => {
    setKarOrani(e.target.value);
    console.log(karOrani);
  };

  return (
    <div className="App ">
      <h1>Fiyatlandırma</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="floatingInput"
                    placeholder="Türkiye Kargo Bedeli"
                    onChange={onTrKargo}
                  />
                  <h5 className="text-left">
                    Türkiye Kargo Bedeli: {data[0].turkiyeKargoBedeli}
                  </h5>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Gümrük Oranı"
                    onChange={onGumruk}
                  />
                  <h5 className="text-left">
                    Gümrük Oranı:{data[0].gumrukOrani}
                  </h5>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="floatingInput"
                    placeholder="Kıbrıs İçi Kargo Bedeli"
                    onChange={onKktc}
                  />
                  <h5 className="text-left">
                    Kıbrıs İçi Kargo Bedeli:{data[0].adaKargoBedeli}
                  </h5>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Kar Oranı"
                    onChange={onKar}
                  />
                  <h5 className="text-left">Kar Oranı:{data[0].karOrani}</h5>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={loginSubmit}
                  >
                    Onayla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricesOpt;
