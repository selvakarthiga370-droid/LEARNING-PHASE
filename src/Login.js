// // import React from 'react';
// // import './Login.css';
// // const Login=()=>{
// //     return(
// //         <>
// //         <div className='new'>
// //             <center>
// //             <h2> Sigin in with email</h2>
// //             <p> Welcome back😊</p>
// //             <form >

// //              <div>📩<input type="email" placeholder='enter your email'/></div><br></br>
// //               <div>  🔒<input type="password" placeholder='enter your password'/></div>
// //                <div> <a href="#" className='forget'> Forget Password?</a><br></br>
// //                  <button type="submit"> Login🤗</button></div>

// //             </form>
// //             </center>
// //         </div>
// //  
// //         </>
// //     )
// // }
// // export default Login



















































// // // import React from 'react';
// // // import './Login.css';
// // // document.getElementById("loginForm").addEventListener("submit", function(event) {

// // //     event.preventDefault();

// // //     let username = document.getElementById("username").value.trim();
// // //     let password = document.getElementById("password").value.trim();

// // //     let userError = document.getElementById("userError");
// // //     let passError = document.getElementById("passError");

// // //     userError.textContent = "";
// // //     passError.textContent = "";

// // //     let isValid = true;

// // //     if (username === "") {
// // //         userError.textContent = "Username is required";
// // //         isValid = false;
// // //     }

// // //     if (password === "") {
// // //         passError.textContent = "Password is required";
// // //         isValid = false;
// // //     }

// // //     if (isValid) {
// // //         alert("Login Successful!");
// // //     }

// // // });
// // // export default Login
// import React from "react";
// import "./Login.css";
// function Login(props) {
//   return (
//     <div className="container">
//       <h1>{props.heading}</h1>

//       <table>
//         <thead>
//           <tr>
//             <th>Feature</th>
//             <th>State</th>
//             <th>Props</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Definition</td>
//             <td>Data managed inside component</td>
//             <td>Data passed from parent</td>
//           </tr>
//           <tr>
//             <td>Data Flow</td>
//             <td> Local to the component </td>
//             <td> Follow one-way data flow</td>
//           </tr>
//           <tr>
//             <td>Ownership</td>
//             <td>Own component</td>
//             <td>Parent component</td>
//           </tr>
//           <tr>
//             <td>Purpose</td>
//             <td>Manage dynamic data</td>
//             <td>Share data between components</td>
//           </tr>
//           <tr>
//             <td>re-render</td>
//             <td>When state changes</td>
//             <td>When parent changes props</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Login;