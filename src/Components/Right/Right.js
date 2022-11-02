import dinner from '../../Assets/dinner.png';
import ad from '../../Assets/advertisement.png'
import './Right.css';
export default function Right() {
    return (
        <>
            <div className='right-contents'>
                <h2 className='right-split'>SPLIT THE DINNER BILL</h2>
                <img src={dinner} alt=''></img>
                <p>Check out <strong>Plates</strong>, our free iOS app to quickly and easily split dinner bills with friends.</p>
                <button className='download-btn'>Download  Plates</button>
                <h2 className='right-split'>ADVERTISEMENT</h2>
                <img src={ad} alt=''></img>
            </div>
        </>
    );
}

