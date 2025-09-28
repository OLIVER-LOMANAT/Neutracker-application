import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
               About <span className="text-blue-300">NeuTrackeR</span>
           </h1>
          
            <div className="bg-blue-700/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 mb-8">
               <p className="text-lg text-blue-100">
                   We are dedicated to helping people achieve their health and nutrition goals through
                   simple, effective tracking tools. Our mission is to make nutrition monitoring
                   accessible to everyone.
               </p>
           </div>

            <div className="mt-8">
                <p className="text-blue-300 mb-6 text-lg">
                    Ready to start your nutrition journey?
                </p>
                <Link
                to="/form"
                className="inline-block bg-blue-500 hover:bg-blue-600
                text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                Get Started Now
                </Link>
            </div>
        </div>
    );
}