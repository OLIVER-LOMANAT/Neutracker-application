import { Link } from "react-router-dom";

export default function About() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Comprehensive Tracking",
            description: "Monitor calories, protein, carbs, and fats with our easy-to-use interface"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Smart Limits",
            description: "Visual indicators help you stay within your nutritional targets"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Quick Updates",
            description: "Easily edit or remove entries as your diet changes throughout the day"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Always Accessible",
            description: "Access your nutrition data anywhere, anytime with our responsive design"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: "Search & Sort",
            description: "Quickly find specific meals or organize them by your preferred metrics"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Progress Insights",
            description: "View totals and averages to understand your eating patterns"
        }
    ];

    const teamPrinciples = [
        {
            icon: (
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "User-First Approach",
            description: "We build features that actually help real people with their health goals"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: "Beautiful Design",
            description: "We believe tracking your nutrition should be enjoyable, not tedious"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Continuous Improvement",
            description: "We're always working to make NeuTrackeR better for our users"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    About <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">NeuTrackeR</span>
                </h1>
                <div className="bg-blue-700/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 mb-8">
                    <p className="text-xl text-blue-100 leading-relaxed">
                        We're dedicated to helping people achieve their health and nutrition goals through
                        simple, effective tracking tools. Our mission is to make nutrition monitoring
                        accessible and enjoyable for everyone.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Why Choose NeuTrackeR?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                        >
                            <div className="w-16 h-16 bg-blue-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-blue-200 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Approach */}
            <div className="bg-blue-700/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Our Approach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamPrinciples.map((principle, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-600/30 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {principle.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {principle.title}
                            </h3>
                            <p className="text-blue-200">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { 
                            step: "1", 
                            icon: (
                                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            ), 
                            text: "Add your meals with our simple form" 
                        },
                        { 
                            step: "2", 
                            icon: (
                                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ), 
                            text: "Track all nutritional information" 
                        },
                        { 
                            step: "3", 
                            icon: (
                                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            ), 
                            text: "Monitor your limits and progress" 
                        },
                        { 
                            step: "4", 
                            icon: (
                                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ), 
                            text: "Achieve your health goals" 
                        }
                    ].map((item, index) => (
                        <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg">
                                {item.step}
                            </div>
                            <div className="w-16 h-16 bg-blue-600/30 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <p className="text-blue-200 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 border border-blue-400/30">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of users who are taking control of their nutrition with NeuTrackeR. 
                    It's free, easy to use, and designed to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/form"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Start Tracking Now
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 border-2 border-blue-400 text-blue-300 hover:bg-blue-900/50 hover:text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Fun Fact */}
            <div className="text-center mt-12">
                <div className="inline-flex items-center gap-4 bg-blue-700/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <p className="text-blue-200">
                        <strong className="text-white">Did you know?</strong> Consistent tracking can help improve dietary awareness by up to 40%!
                    </p>
                </div>
            </div>
        </div>
    );
}