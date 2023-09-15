import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import logoss from './assets/images/Logo.png';
import loginlinks from './assets/images/Frame 17.png';
import daytravel from './assets/images/daytravel.png';

const Signin = ()=> {
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
    });
    const navigate = useNavigate();

 const handlesubmit = () => {
    if(user.name&&user.email&&user.password){
    localStorage.setItem('input',JSON.stringify(user));
    // sessionStorage.setItem('input',JSON.stringify(user));
    navigate('/');
    } else {
        alert('Enter valid details');
    }
 }
    return(
<div className="fullbackground">
    <div className="loginbox">
    <div className="leftloginpart">
        <div className="logoandtitlehere">
            <div className="logopart"><img src={logoss} alt="logo" height='35px'></img></div>
            <div className="titlepart">Travalizer</div>
        </div>
        <div className="artificialandwelcome">
            <div className="artificial">Artificial Intelligence giving you travel recommendations</div>
            <div className="welcomeback">Welcome Back, Please login to your account</div>
        </div>

        <div className="forform">
        <form className="formhere">
        <label className="forlabel" htmlFor='name'>Name</label>
        <input className="forinputbox" type="text" id="name" name="name" value={user.name} onChange={(e) =>setUser({...user,[e.target.name]:e.target.value})}></input>

        <label className="forlabel" htmlFor='email'>Email</label>
        <input className="forinputbox" type="email" id="email" name="email" value={user.email} onChange={(e) =>setUser({...user,[e.target.name]:e.target.value})}></input>

        <label className="forlabel" htmlFor='password'>Password</label>
        <input className="forinputbox" type="password" id="password" name="password" value={user.password} onChange={(e) =>setUser({...user,[e.target.name]:e.target.value})}></input>
        
        <div className="rememberandforgot">
            <div><input className='remembercheckbox' type="checkbox"></input></div>
            <div className="remember">Remember me</div>
            <div className="forgot">Forgot password?</div>
        </div>
        <div className="loginandsignin">
        <input type="submit" className="login" value='Register' onClick={handlesubmit}></input>
        </div>
    </form>
        </div>
        <div className="loginlinks"><img src={loginlinks} alt="loginlinks" width='240px'></img></div>
    </div>
    </div>
    <div id='forsignin' className="rightimagepart">
        <img className="travelimage" src={daytravel} alt="daytravel" height='300px' width='300px'></img>
    </div>
</div>
    );
}
export default Signin;