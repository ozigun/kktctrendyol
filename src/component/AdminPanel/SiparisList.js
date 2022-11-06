import Siparis from "./Siparis";

function siparisList(props) {
  return (
    <div className="App">
      <h1>Siparişler</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">İd</th>
            <th scope="col">İsim</th>
            <th scope="col">Soyisim</th>
            <th scope="col">Kullanıcı Adı</th>
            <th scope="col">Email</th>
            <th scope="col">Doğum Tarihi</th>
            <th scope="col">Adres</th>
          </tr>
        </thead>
        {props.userData.map((user, i) => {
          return (
            <Siparis
              key={i}
              id={props.userData[i]._id}
              name={props.userData[i].name}
              surname={props.userData[i].surname}
              email={props.userData[i].email}
              username={props.userData[i].username}
              address={props.userData[i].address}
              birth={props.userData[i].birth}
            />
          );
        })}
      </table>
    </div>
  );
}
export default siparisList;
