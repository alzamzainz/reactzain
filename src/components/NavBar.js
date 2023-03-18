import './styles/navbar.css'


function NavBar() {
    return (
        <div>
            <div className='Navbar'>
                <h1>alzamers.com</h1>
                <ul>
                    <li>Home</li>
                    <li>Kategori</li>
                    <li>Harga Paket</li>
                    <li>About Us</li>
                </ul>
                <div className='hire-btn'><button>Hire me</button></div>
            
                
            </div>
        </div>
    );
}

export default NavBar;