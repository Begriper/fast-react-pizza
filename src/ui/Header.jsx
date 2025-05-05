import SearchOrder from "@/features/order/SearchOrder";
import Username from "@/features/user/Username";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6">
            <Link to="/" className="tracking-widest ">
                Fast React Pizza Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;
