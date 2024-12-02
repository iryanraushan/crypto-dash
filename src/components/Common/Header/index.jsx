import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import Search from "../../Dashboard/Search"
const Header = ({search, setSearch}) => {
    return (
        <header
            className="sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-neutral-500 bg-[#262626]/70 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <Link aria-current="page" className="flex items-center gap-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="" />
                            <p className="text-sm md:text-xl font-bold">RCrypto <span className="text-primary-color">.</span></p>
                        </Link>
                    </div>
                    
                    <div className="flex items-center justify-end gap-3">                        
                        {
                            window.location.pathname === "/dashboard" ? 
                            <Search search={search} setSearch={setSearch} /> : 
                            <Link to="/dashboard" className="px-4 py-2 text-sm font-semibold text-primary-color bg-dark-grey rounded-full">Go to Dashboard</Link>
                        }
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header