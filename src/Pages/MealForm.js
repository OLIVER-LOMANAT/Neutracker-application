export default function MealForm({ currentNutrition, handleChange, handleSubmit, notification }) {
    return (
        <div className="max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Add New Meal
                </h1>
                <p className="text-blue-200 text-lg">
                    Track your nutrition and stay on top of your health goals
                </p>
            </div>

            {/* Form Card */}
            <div className="bg-gradient-to-br from-blue-700/90 to-blue-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-400/30 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Item Name - Full Width */}
                    <div className="space-y-2">
                        <label className="block text-white text-lg font-semibold flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Food Item Name
                        </label>
                        <input
                            className="w-full px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            type="text"
                            name="itemName"
                            value={currentNutrition.itemName}
                            onChange={handleChange}
                            placeholder="e.g., Grilled Chicken Salad"
                            required
                        />
                    </div>

                    {/* Nutrition Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Calories */}
                        <div className="space-y-2">
                            <label className="block text-white font-semibold flex items-center gap-2">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                </svg>
                                Calories
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                                type="number"
                                name="calories"
                                value={currentNutrition.calories}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                required
                            />
                        </div>

                        {/* Protein */}
                        <div className="space-y-2">
                            <label className="block text-white font-semibold flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Protein (g)
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                                type="number"
                                name="protein"
                                value={currentNutrition.protein}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                step="0.1"
                                required
                            />
                        </div>

                        {/* Carbs */}
                        <div className="space-y-2">
                            <label className="block text-white font-semibold flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Carbs (g)
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                                type="number"
                                name="carbs"
                                value={currentNutrition.carbs}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                step="0.1"
                                required
                            />
                        </div>

                        {/* Fat */}
                        <div className="space-y-2">
                            <label className="block text-white font-semibold flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Fat (g)
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                                type="number"
                                name="fat"
                                value={currentNutrition.fat}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                step="0.1"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Food Item
                    </button>
                </form>
            </div>

            {/* Enhanced Notification */}
            {notification && (
                <div className="fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400/30 animate-slideIn z-50 max-w-sm">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <div className="font-bold">Successfully Added!</div>
                            <div className="text-green-100 text-sm">{notification}</div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-green-300/50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-200 animate-progress"></div>
                    </div>
                </div>
            )}

            {/* Quick Tips */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-700/30 backdrop-blur-sm p-4 rounded-xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <p className="text-blue-200 text-sm">Fill in all fields for accurate tracking</p>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-4 rounded-xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <p className="text-blue-200 text-sm">Quick and easy to update later</p>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-4 rounded-xl border border-blue-400/20 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-blue-200 text-sm">Stay consistent for best results</p>
                </div>
            </div>
        </div>
    );
}