import './Footer.css'
import {AiFillMessage} from "react-icons/ai";
function Footer() {
    return(
        <div className='footer'>
        <button style={{outline:'none',border:'none',background:'transparent'}}> <AiFillMessage className='feedback-icon'/> </button>
        
        </div>
    )
}
export default Footer;