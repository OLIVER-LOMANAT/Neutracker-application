import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    
    return (
        <div className="flex flex-col min-h-screen font-mono">
            <nav className="bg-gray-800 p-4 shadow-md">
               <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-blue-300">
                    <i>NeuTrackeR</i>
                </Link>
                <ul className="flex space-x-6 text-white">
                    <li>
                        <Link to="/" className="">
                        HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/form" className="">
                        FORM
                        </Link>
                    </li>
                    <li>
                        <Link to="/list">
                        MEAL-LIST
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="">
                        ABOUT
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>

            <div className="">
                <main className="text-white bg-blue-800 text-center max-w-[1200px] mx-auto mt-[30px] p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>

            <footer className="bg-gray-800 mt-auto p-8 text-center text-white">
                <p>&copy; 2025 CodePros. All rights reserved.<br />
                Crafting innovative solutions through code.</p>
            </footer>
        </div>
    )
}