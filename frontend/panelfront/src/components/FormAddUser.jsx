// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { addUser } from '../actions/userActions';


// const FormAddUser = () => {

//     const dispatch = useDispatch();

//     const history = useHistory();

//     //users attributes states setting
//     const [firstNameInput, setFirstNameInput] = useState('');
//     const [lastNameInput, setLastNameInput] = useState('');
//     const [emailInput, setEmailInput] = useState('');
//     const [sexInput, setSexInput] = useState('');
//     const [ageInput, setAgeInput] = useState('');
//     const [phoneInput, setPhoneInput] = useState('');

//     //users attributes states handling
//     const handleFirstNameChange = event => setFirstNameInput(event.target.value);
//     const handleLastNameChange = event => setLastNameInput(event.target.value);
//     const handleEmailChange = event => setEmailInput(event.target.value);
//     const handleSexChange = event => setSexInput(event.target.value);
//     const handleAgeChange = event => setAgeInput(event.target.value);
//     const handlePhoneChange = event => setPhoneInput(event.target.value);

//     const handleOnSubmit = event => {
//         event.preventDefault();
//         dispatch(addUser(userObject))
//         console.log(userObject)
//         history.push('/users')
//     }

//     const userObject = {
//         first_name: firstNameInput,
//         last_name: lastNameInput,
//         email: emailInput,
//         sex: Number(sexInput),
//         age: Number(ageInput),
//         phone: phoneInput,
//     }


//     return (
//         <div>
//             <form className="row g-3" onSubmit={handleOnSubmit}>

//                 <div className="col-md-4">
//                     <label htmlFor="validationDefault01" className="form-label">First name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="validationDefault01"
//                         value={firstNameInput}
//                         onChange={handleFirstNameChange}
//                         placeholder={
//                             firstNameInput
//                                 ? firstNameInput
//                                 : 'First name'
//                         }
//                         required />
//                 </div>

//                 <div className="col-md-4">
//                     <label htmlFor="validationDefault02" className="form-label">Last name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="validationDefault02"
//                         value={lastNameInput} onChange={handleLastNameChange}
//                         placeholder={
//                             lastNameInput
//                                 ? lastNameInput
//                                 : 'Last name'
//                         } required />
//                 </div>

//                 <div className="col-md-4">
//                     <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
//                     <div className="input-group">
//                         <span className="input-group-text" id="inputGroupPrepend2">@</span>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="validationDefaultUsername"
//                             aria-describedby="inputGroupPrepend2"
//                             value={emailInput} onChange={handleEmailChange}
//                             placeholder={
//                                 emailInput
//                                     ? emailInput
//                                     : 'Email'
//                             }
//                             required />
//                     </div>

//                 </div>

//                 <div className="col-md-6">
//                     <label htmlFor="validationDefault03" className="form-label">Age</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="validationDefault03"
//                         value={ageInput} onChange={handleAgeChange}
//                         placeholder={
//                             ageInput
//                                 ? ageInput
//                                 : 'Age'
//                         } />
//                 </div>

//                 <div className="col-md-3">
//                     <label htmlFor="validationDefault04" className="form-label">Sex</label>
//                     <select
//                         className="form-select"
//                         id="validationDefault04"
//                         value={sexInput} onChange={handleSexChange}
//                     >
//                         <option>Choose...</option>
//                         <option value="1">Male</option>
//                         <option value="2">Female</option>
//                     </select>
//                 </div>

//                 <div className="col-md-3">
//                     <label htmlFor="validationDefault05" className="form-label">Phone</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="validationDefault05"
//                         value={phoneInput} onChange={handlePhoneChange}
//                         placeholder={
//                             phoneInput
//                                 ? phoneInput
//                                 : 'Phone'
//                         } />
//                 </div>

//                 <div className="col-12">
//                     <button className="btn btn-primary" >Add user</button>
//                 </div>
//             </form>
//         </div >
//     )
// }

// export default FormAddUser;