import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: "/", label: "HOME" },
        { path: "/form", label: "FORM" },
        { path: "/list", label: "MEAL LIST" },
        { path: "/nutrition-table", label: "NUTRITION TABLE" },
        { path: "/about", label: "ABOUT" }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            {/* Navigation */}
            <nav className="bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20 p-4 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                        NeuTrackeR
                    </Link>
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                                        isActive(item.path) 
                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
                                        : 'hover:bg-blue-900/50 hover:text-blue-200'
                                    }`}
                                >
                                    {getNavIcon(item.path)}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1">
                <main className="text-white max-w-[1400px] mx-auto py-8 px-4 md:px-8">
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900/80 backdrop-blur-md border-t border-blue-500/20 p-8 text-center text-white">
                <div className="container mx-auto">
                    <p className="text-blue-200 mb-2">&copy; 2025 CodePros. All rights reserved.</p>
                    <p className="text-blue-300 text-sm">Crafting innovative solutions through code.</p>
                </div>
            </footer>
        </div>
    );
}

// Helper function for navigation icons
function getNavIcon(path) {
    const icons = {
        "/": (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        "/form": (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        ),
        "/list": (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        "/nutrition-table": (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        "/about": (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    };

    return icons[path] || null;
}