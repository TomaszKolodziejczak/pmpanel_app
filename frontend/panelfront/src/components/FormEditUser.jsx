// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// import { deleteUser } from '../actions/userActions';
// import { editUser } from '../actions/userActions';

// const FormEditUser = (props) => {

//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();

//   const user = location.state
//   const { first_name, last_name, email, sex, age, phone, id } = user



//   const [firstNameInput, setFirstNameInput] = useState(first_name);
//   const [lastNameInput, setLastNameInput] = useState(last_name);
//   const [emailInput, setEmailInput] = useState(email);
//   const [sexInput, setSexInput] = useState(sex);
//   const [ageInput, setAgeInput] = useState(age);
//   const [phoneInput, setPhoneInput] = useState(phone);

//   const handleFirstNameChange = event => setFirstNameInput(event.target.value);
//   const handleLastNameChange = event => setLastNameInput(event.target.value);
//   const handleEmailChange = event => setEmailInput(event.target.value);
//   const handleSexChange = event => setSexInput(event.target.value);
//   const handleAgeChange = event => setAgeInput(event.target.value);
//   const handlePhoneChange = event => setPhoneInput(event.target.value);

//   const handleOnSubmit = event => {
//     event.preventDefault();
//     dispatch(editUser(userObject))
//     console.log(userObject, id)
//   }

//   const userObject = {
//     first_name: firstNameInput,
//     last_name: lastNameInput,
//     email: emailInput,
//     sex: Number(sexInput),
//     age: ageInput,
//     phone: phoneInput,
//     id,
//   }

//   const handleDelete = (id) => {
//     if (window.confirm('Do you want to delete this user')) {
//       dispatch(deleteUser(id));
//       alert('User has been deleted!')
//       history.push('/users')
//     }
//   }
//   return (
//     <div>
//       <button onClick={() => console.log(first_name)} >ddd</button>
//       <form className="row g-3" onSubmit={handleOnSubmit}>

//         <div claclassNamess="col-md-4">
//           <label for="validationDefault01" className="form-label">First name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault01"
//             value={firstNameInput}
//             onChange={handleFirstNameChange}
//             placeholder={
//               firstNameInput
//                 ? firstNameInput
//                 : 'First name'
//             }
//             required />
//         </div>

//         <div className="col-md-4">
//           <label for="validationDefault02" className="form-label">Last name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault02"
//             value={lastNameInput} onChange={handleLastNameChange}
//             placeholder={
//               lastNameInput
//                 ? lastNameInput
//                 : 'Last name'
//             } required />
//         </div>

//         <div className="col-md-4">
//           <label for="validationDefaultUsername" className="form-label">Email</label>
//           <div className="input-group">
//             <span claclassNamess="input-group-text" id="inputGroupPrepend2">@</span>
//             <input
//               type="text"
//               className="form-control"
//               id="validationDefaultUsername"
//               aria-describedby="inputGroupPrepend2"
//               value={emailInput} onChange={handleEmailChange}
//               placeholder={
//                 emailInput
//                   ? emailInput
//                   : 'Email'
//               }
//               required />
//           </div>

//         </div>

//         <div className="col-md-6">
//           <label for="validationDefault03" className="form-label">Age</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault03"
//             value={ageInput} onChange={handleAgeChange}
//             placeholder={
//               ageInput
//                 ? ageInput
//                 : 'Age'
//             } />
//         </div>

//         <div className="col-md-3">
//           <label for="validationDefault04" className="form-label">Sex</label>
//           <select
//             className="form-select"
//             id="validationDefault04"
//             value={sexInput} onChange={handleSexChange}
//           >
//             <option selected>Choose...</option>
//             <option value="1">Male</option>
//             <option value="2">Female</option>
//           </select>
//         </div>

//         <div className="col-md-3">
//           <label for="validationDefault05" claclassNamess="form-label">Phone</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault05"
//             value={phoneInput} onChange={handlePhoneChange}
//             placeholder={
//               phoneInput
//                 ? phoneInput
//                 : 'Phone'
//             } />
//         </div>

//         <div className="col-12">
//           <button className="btn btn-primary" type="submit">Update user</button>
//         </div>
//       </form>
//       <button onClick={() => handleDelete(id)} style={{ display: 'inline' }}>Delete project</button>
//     </div >
//   )
// }

// export default FormEditUser;