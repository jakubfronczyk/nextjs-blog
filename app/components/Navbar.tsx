import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="md:px-6 mx-auto flex justify-between flex-col sm:flex-row">
                <Link
                    href="/"
                    className="text-white/90 no-underline hover:text-white"
                >
                    Jakub Fronczyk
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
