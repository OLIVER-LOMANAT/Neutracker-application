export default function Home() {
    return (
        <div className="text-center px-4">
            <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                    Welcome to <span className="text-white">NeuTrackeR</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                    Ready to get in shape? Don't worry – we've got your back every step of the way.
                </p>
            </div>

            <div className="max-w-2xl mx-auto mb-16">
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <a
                        href="/form"
                        className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Log Your First Meal
                    </a>
                    <a
                        href="/about"
                        className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-900/30 hover:text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learn How It Works
                    </a>
                </div>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Track Everything</h3>
                    <p className="text-blue-200">Monitor calories, protein, carbs, and fats with ease</p>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Quick & Easy</h3>
                    <p className="text-blue-200">Simple interface that gets straight to the point</p>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Stay On Target</h3>
                    <p className="text-blue-200">Visual indicators help you maintain your goals</p>
                </div>
            </div>
        </div>
    );
}