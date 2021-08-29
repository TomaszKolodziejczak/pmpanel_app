// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'

// import { getUsers } from '../actions/userActions'

// const Users = () => {

//   const dispatch = useDispatch();
//   const users = useSelector(store => store.users);

//   //get users from api
//   useEffect(() => {
//     dispatch(getUsers());
//   }, []);

//   const sexes = {
//     1: 'Male',
//     2: 'Female'
//   }



//   const usersList = users.map(user =>
//     <tr key={user.id}>
//       <th scope="row"><i className="far fa-user-circle"></i></th>
//       {/* <td>{user.first_name} </td>
//       <td>{user.last_name}</td> */}
//       <td>{user.email}</td>
//       {/* <td>{sexes[user.sex]}</td>
//       <td>{user.phone}</td> */}
//     </tr>
//   );


//   return (
//     <div className="card" style={{ margin: 15 }}>
//       <button onClick={() => console.log('users', users)}></button>
//       {/* <div className="card-body bg-light">
//         <table className="table table-hover">
//           <thead>
//             <tr className="fs-4">
//               <th scope="col">#</th>
//               <th scope="col">First name</th>
//               <th scope="col">Last name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Sex</th>
//               <th scope="col">Phone</th>
//             </tr>
//           </thead>
//           <tbody className="fs-5">
//             {usersList}
//           </tbody>
//         </table>
//         <NavLink to="/useradd"><i className="fas fa-user-plus"></i> Add new user</NavLink>
//       </div> */}
//     </div>

//   );
// }

// export default Users;
