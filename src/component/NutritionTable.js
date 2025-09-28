import React, { useState } from "react";

export default function NutritionTable() {
    const [activeTab, setActiveTab] = useState('meals');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data for meals
    const meals = [
        { name: "Grilled Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, category: "Protein" },
        { name: "Brown Rice (1 cup cooked)", calories: 216, protein: 5, carbs: 45, fat: 1.8, category: "Grains" },
        { name: "Salmon Fillet", calories: 206, protein: 22, carbs: 0, fat: 13, category: "Protein" },
        { name: "Broccoli (1 cup)", calories: 55, protein: 4, carbs: 11, fat: 0.6, category: "Vegetables" },
        { name: "Sweet Potato (medium)", calories: 103, protein: 2, carbs: 24, fat: 0.2, category: "Vegetables" },
        { name: "Avocado (medium)", calories: 234, protein: 3, carbs: 12, fat: 21, category: "Fruits" },
        { name: "Oatmeal (1 cup cooked)", calories: 166, protein: 6, carbs: 28, fat: 3.6, category: "Grains" },
        { name: "Greek Yogurt (1 cup)", calories: 150, protein: 25, carbs: 6, fat: 4, category: "Dairy" },
        { name: "Almonds (1/4 cup)", calories: 205, protein: 8, carbs: 7, fat: 18, category: "Nuts" },
        { name: "Banana (medium)", calories: 105, protein: 1, carbs: 27, fat: 0.4, category: "Fruits" }
    ];

    // Sample data for drinks
    const drinks = [
        { name: "Water", calories: 0, protein: 0, carbs: 0, fat: 0, category: "Water" },
        { name: "Black Coffee", calories: 2, protein: 0, carbs: 0, fat: 0, category: "Coffee" },
        { name: "Green Tea", calories: 0, protein: 0, carbs: 0, fat: 0, category: "Tea" },
        { name: "Whole Milk (1 cup)", calories: 149, protein: 8, carbs: 12, fat: 8, category: "Dairy" },
        { name: "Orange Juice (1 cup)", calories: 112, protein: 2, carbs: 26, fat: 0.5, category: "Juice" },
        { name: "Protein Shake", calories: 160, protein: 30, carbs: 4, fat: 2, category: "Supplement" },
        { name: "Soda (12 oz)", calories: 150, protein: 0, carbs: 39, fat: 0, category: "Soda" },
        { name: "Beer (12 oz)", calories: 153, protein: 1, carbs: 13, fat: 0, category: "Alcohol" },
        { name: "Red Wine (5 oz)", calories: 125, protein: 0, carbs: 4, fat: 0, category: "Alcohol" },
        { name: "Smoothie (12 oz)", calories: 180, protein: 5, carbs: 35, fat: 2, category: "Juice" }
    ];

    const categories = {
        meals: ["All", "Protein", "Vegetables", "Fruits", "Grains", "Dairy", "Nuts"],
        drinks: ["All", "Water", "Coffee", "Tea", "Juice", "Dairy", "Soda", "Alcohol", "Supplement"]
    };

    const [selectedCategory, setSelectedCategory] = useState('All');

    const currentData = activeTab === 'meals' ? meals : drinks;
    const currentCategories = categories[activeTab];

    const filteredData = currentData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getCalorieColor = (calories) => {
        if (calories === 0) return 'text-green-400';
        if (calories < 100) return 'text-blue-300';
        if (calories < 200) return 'text-yellow-300';
        return 'text-orange-400';
    };

    const getCategoryColor = (category) => {
        const colors = {
            Protein: 'bg-red-500/20 text-red-300 border-red-400/30',
            Vegetables: 'bg-green-500/20 text-green-300 border-green-400/30',
            Fruits: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
            Grains: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
            Dairy: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
            Nuts: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
            Water: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
            Coffee: 'bg-brown-500/20 text-brown-300 border-brown-400/30',
            Tea: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
            Juice: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
            Soda: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
            Alcohol: 'bg-red-500/20 text-red-300 border-red-400/30',
            Supplement: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30'
        };
        return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Nutrition Reference Table
                </h1>
                <p className="text-blue-200 text-lg">
                    Comprehensive list of common foods and drinks with their nutritional values
                </p>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-blue-800/30 rounded-xl p-1 backdrop-blur-sm border border-blue-400/20">
                {[
                    { id: 'meals', label: 'Food Items', icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )},
                    { id: 'drinks', label: 'Beverages', icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    )}
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setSelectedCategory('All');
                        }}
                        className={`flex items-center gap-2 flex-1 py-3 px-4 rounded-lg transition-all duration-200 ${
                            activeTab === tab.id
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'text-blue-200 hover:text-white hover:bg-blue-700/50'
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Controls */}
            <div className="bg-blue-700/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 mb-6">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    {/* Search */}
                    <div className="flex-1 w-full md:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={`Search ${activeTab === 'meals' ? 'food items' : 'beverages'}...`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-12 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-4 items-center">
                        <label className="text-blue-200 font-medium whitespace-nowrap">Filter by:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                        >
                            {currentCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Info */}
                <div className="mt-4 text-center">
                    <p className="text-blue-200">
                        Showing {filteredData.length} {activeTab === 'meals' ? 'food items' : 'beverages'}
                        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        {searchTerm && ` matching "${searchTerm}"`}
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-blue-700/30 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-blue-600/50 border-b border-blue-400/30 text-blue-200 font-semibold">
                    <div className="col-span-4">Name</div>
                    <div className="col-span-2 text-center">Calories</div>
                    <div className="col-span-2 text-center">Protein (g)</div>
                    <div className="col-span-2 text-center">Carbs (g)</div>
                    <div className="col-span-2 text-center">Fat (g)</div>
                </div>

                {/* Table Body */}
                <div className="max-h-96 overflow-y-auto">
                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 gap-4 p-4 border-b border-blue-400/10 hover:bg-blue-600/20 transition-all duration-200 group"
                        >
                            <div className="col-span-4 flex items-center gap-3">
                                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                                    {item.category}
                                </div>
                                <span className="text-white font-medium group-hover:text-blue-100 transition-colors">
                                    {item.name}
                                </span>
                            </div>
                            <div className={`col-span-2 text-center font-bold ${getCalorieColor(item.calories)}`}>
                                {item.calories}
                            </div>
                            <div className="col-span-2 text-center text-green-300 font-medium">
                                {item.protein}g
                            </div>
                            <div className="col-span-2 text-center text-yellow-300 font-medium">
                                {item.carbs}g
                            </div>
                            <div className="col-span-2 text-center text-orange-300 font-medium">
                                {item.fat}g
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
                        <p className="text-blue-200">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="mt-6 bg-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Calorie Guide
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-blue-200 text-sm">0 cal: Water/Tea</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                        <span className="text-blue-200 text-sm">1-99 cal: Low</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                        <span className="text-blue-200 text-sm">100-199 cal: Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-blue-200 text-sm">200+ cal: High</span>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                        {currentData.length}
                    </div>
                    <div className="text-blue-200">Total Items</div>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                        {Math.round(currentData.reduce((sum, item) => sum + item.calories, 0) / currentData.length)}
                    </div>
                    <div className="text-blue-200">Avg Calories</div>
                </div>
                <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                        {currentCategories.length - 1}
                    </div>
                    <div className="text-blue-200">Categories</div>
                </div>
            </div>
        </div>
    );
}