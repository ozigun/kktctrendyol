function User({ id, name, surname, username, email, address, birth }) {
  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{birth}</td>
        <td>{address}</td>
      </tr>
    </tbody>
  );
}
export default User;
