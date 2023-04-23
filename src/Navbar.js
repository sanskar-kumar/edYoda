
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='navbar'>
      <div className='nav-heading'> <h1>EDYODA</h1> </div>
       <div className='nav-user-details'>
        <div className='username'> <h3> Hi! Sanskar01</h3> </div>
        <div className='user-image'> <img className='user-img' src='https://www.w3schools.com/howto/img_avatar.png' alt='user' /> </div>
        
       </div>
      </div>
    </div>
  );
}

export default Navbar;
