import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import logoss from './assets/images/Logo.png';
import loginlinks from './assets/images/Frame 17.png';
import daytravel from './assets/images/daytravel.png';

const Login = () =>{

    const [user,setUser] = useState({
        email:'',
        password:'',
    });
    // const [isAuth,setIsAuth] = useState(false);
    const navigate = useNavigate();
    
    
    //localStorage.setItem({'username':'testt','password':'tort'});

 const handlesubmit = (e) => {
    e.preventDefault();
    const newuser = JSON.parse(localStorage.getItem("input"));
    // const newuser = JSON.parse(sessionStorage.getItem("input"));
    
    if((user.email===newuser.email)&&(user.password===newuser.password)){
        localStorage.setItem('isAuth',true);
        // sessionStorage.setItem('isAuth',true);
        
    }else{
        localStorage.setItem('isAuth',false);
        // sessionStorage.setItem('isAuth',false);
        alert("Invalid username or password!")
    }    

    if(localStorage.getItem('isAuth')){
        navigate('/home');
    }
    // if(sessionStorage.getItem('isAuth')){
    //     navigate('/home');
    // }
 }

 const handlesignin = () => {
    navigate('/signin');
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
        <label className="forlabel" name='email'>Email</label>
        <input className="forinputbox" type="email" id="email" value={user.email} name="email" onChange={(e) =>setUser({...user,[e.target.name]:e.target.value})}></input>
        <label className="forlabel" name='password'>Password</label>
        <input className="forinputbox" type="password" id="email" value={user.password} name="password" onChange={(e) =>setUser({...user,[e.target.name]:e.target.value})}></input>
        
        <div className="rememberandforgot">
            <div><input className='remembercheckbox' type="checkbox"></input></div>
            <div className="remember">Remember me</div>
            <div className="forgot">Forgot password?</div>
        </div>
        <div className="loginandsignin">
        <button className="login" onClick={handlesubmit}>Log in</button>
        <button className="signin" onClick={handlesignin}>Sign in</button>
        </div>
    </form>
        </div>
        <div className="loginlinks"><img src={loginlinks} alt="loginlinks" width='240px'></img></div>
    </div>
    </div>
    <div className="rightimagepart">
        <img className="travelimage" src={daytravel} alt="daytravel" height='300px' width='300px'></img>
    </div>
</div>
    );
}
export default Login;