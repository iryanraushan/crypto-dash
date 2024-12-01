import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
const Header = () => {
    return (
        <header
            className="sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-neutral-500 bg-[#262626]/70 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center gap-4" href="/">
                            <img className="h-10 w-auto" src={logo} alt="" />
                            <p className="text-sm md:text-xl font-bold">RCrypto <span className="text-primary-color">.</span></p>
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <a aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 font-medium text-gray-100 text-lg transition-all duration-200 hover:bg-primary-color hover:text-gray-900"
                            href="#">How it works</a>
                        <a className="inline-block rounded-lg px-2 py-1 font-medium text-gray-100 text-lg transition-all duration-200 hover:bg-primary-color hover:text-gray-900"
                            href="#">Pricing</a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        {/* <a className="hidden items-center justify-center rounded-xl bg-primary-color px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                            href="/login"></a> */}
                        <Link className="inline-flex items-center justify-center rounded-xl bg-primary-color px-3 py-2 text-xs md:text-sm font-semibold text-gray-900 shadow-sm transition-all duration-150 hover:bg-primary-color/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            to="/dashboard">Go to dashboard</Link>

                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header