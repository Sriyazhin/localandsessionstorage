
import daytravel from './assets/images/daytravel.png';
import { useNavigate, useParams } from "react-router-dom";

const Home = () =>{
    let currentname=useParams();
    const navigate = useNavigate();
    
    const handlelogout = () =>{
        localStorage.setItem('isAuth',false);
        // sessionStorage.setItem('isAuth',false);
            navigate('/');
    }

    return(
<div className="fullbackground">
    <div className="loginbox">
        <div className="forhomepage leftloginpart">
            <div className="logoandtitlehere">
                <div className="welcometitle">Welcome {currentname.name}!</div>
            </div>
            <div className='thejourney'>“The journey of a thousand miles begins with a single step.”</div>
            <div className='logouthere'><button className='logoutbutton' onClick={handlelogout}>Logout</button></div>
        </div>
    </div>
    <div id='forhome' className="rightimagepart">
        <img className="travelimage" src={daytravel} alt="daytravel" height='150px' width='150px'></img>
    </div>
</div>
    );
}
export default Home;
