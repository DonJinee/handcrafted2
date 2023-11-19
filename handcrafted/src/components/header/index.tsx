import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
// import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

type HeaderType = {
    isErrorPage?: Boolean;
}

export default function Header({ isErrorPage }: HeaderType) {
    const router = useRouter();
    const arrayPaths = ['/'];

    const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const navRef = useRef(null);
    const searchRef = useRef(null);

    const headerClass = () => {
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }

    useEffect(() => {
        if (!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }

        headerClass();
        window.onscroll = function () {
            headerClass();
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const closeSearch = () => {
        setSearchOpen(false);
    }
    // on click outside
    useOnClickOutside(navRef, closeMenu);
    useOnClickOutside(searchRef, closeSearch);
    return (
        <div className="header z-1 fixed w-full">
            <nav className="md:flex p-5 md:justify-between w-auto">
                <div className="flex justify-between items-center cursor-pointer">
                    <a href="/" className="cursor-pointer">
                        <span className="text-3xl font-bold">
                            <img className="h-12  inline" src="https://cdn-icons-png.flaticon.com/128/3859/3859602.png" alt="logo" />
                            Handcrafted Haven
                        </span>
                    </a>

                </div>
                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static relative w-full left-0 md:w-auto 
                md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="text-2xm mx-4"><a href="/" className="cursor-pointer">Home</a></li>
                    <li className="text-2xm mx-4"><a href="#" className="cursor-pointer">Seller Profiles</a></li>
                    <li className="text-2xm mx-4"><a href="#" className="cursor-pointer">Product Listings</a></li>
                    <li className="text-green-500 text-2xm mx-4"><a href="#" className="cursor-pointer">Reviews and Ratings</a></li>
                </ul>
                <div className="site-header__actions">
                    <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
                        <form className={`search-form`}>
                            <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                            <input type="text" name="search" placeholder="Enter the product you are looking for" />
                        </form>
                        <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search"></i>
                    </button>
                    <Link href="/login">
                        <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="site-header__btn-menu">
                        <i className="btn-hamburger"><span></span></i>
                    </button>
                </div>
            </nav>
        </div>
    )
}