const UserDetails = ({users})=>{
    return (
        <>
            {
        users.map((curUser)=>
        {
      const {id , name , username} = curUser;
      return(
            <tr key={id}>
                <td >{name}</td>
                <td>{id}</td>
                <td>{username}</td>
            </tr>
      )

        })
            }
        </>

    );


}

export default UserDetails;