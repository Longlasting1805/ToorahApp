import Image from 'next/image'
import SearchInput from './Search.'

const Navbar = () => {
    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between">
                <img src='/b.jpg' style={{ borderRadius: '10px', marginLeft: '58px', marginTop: '10px'}}/>
                <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '1717px',  marginTop: '12px' }}>Toraaah</span>
                <SearchInput />
               
               
            </div>

        </nav>
    )
}

export default Navbar