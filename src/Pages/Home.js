export default function Home() {
    return (
        <div className="text-center">
           <h1 className="text-4xl font-bold mb-6 text-blue-300">
            Welcome to <span className="text-white">NeuTrackeR</span>
           </h1>
            <p className="text-4xl font-bold mb-6 text-blue-300">
            You wanna get in shape? Dont! worry  we gat you.
           </p>

           <div className="max-w-2xl mx-auto mb-10">
            <div className="flex flex-col space-y-4 max-w-md mx-auto">
                <a
                href="/form"
                className="bg-blue-500 hover:bg-blue-600 text-white
                font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                    Log Your First Meal
                </a>
                <a
                href="/about"
                className="border border-blue-400 text-blue-300 hover:bg-blue-900/50
                font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                    Learn How It Works
                </a>
            </div>
           </div>
        </div>
    );
}

