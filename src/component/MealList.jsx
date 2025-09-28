import React, { useState } from "react";
import MealItem from "./MealItem";
import deleteNutrition from "../delete";

function MealList({ nutritions, setNutrition }) {
    const [editingId, setEditingId] = useState(null);
    const [sortBy, setSortBy] = useState("name");
    const [searchTerm, setSearchTerm] = useState("");

    const handleEdit = (nutrition) => {
        setEditingId(nutrition.id);
        const updatedName = prompt("Enter new food name:", nutrition.itemName);
        if (updatedName && updatedName !== nutrition.itemName) {
            const updatedMeal = { ...nutrition, itemName: updatedName };

            fetch(`https://nutrition-api-nyjf.onrender.com/nutritions/${nutrition.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedMeal),
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Failed to update");
                    return res.json();
                })
                .then((data) => {
                    const updatedList = nutritions.map((nutrition) =>
                        nutrition.id === data.id ? data : nutrition
                    );
                    setNutrition(updatedList);
                    setEditingId(null);
                })
                .catch((error) => {
                    console.error("PATCH error:", error);
                    setEditingId(null);
                });
        } else {
            setEditingId(null);
        }
    };

    // Filter and sort functions
    const filteredNutritions = nutritions.filter(nutrition =>
        nutrition.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedNutritions = [...filteredNutritions].sort((a, b) => {
        switch (sortBy) {
            case "name":
                return a.itemName.localeCompare(b.itemName);
            case "calories-high":
                return b.calories - a.calories;
            case "calories-low":
                return a.calories - b.calories;
            case "protein":
                return b.protein - a.protein;
            default:
                return 0;
        }
    });

    const totalItems = nutritions.length;
    const totalCalories = nutritions.reduce((sum, item) => sum + parseInt(item.calories), 0);
    const avgCalories = totalItems > 0 ? Math.round(totalCalories / totalItems) : 0;

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Your Meal Diary
                </h1>
                <p className="text-blue-200 text-lg">
                    Track your nutrition journey in one place
                </p>
            </div>

            {/* Stats Overview */}
            {totalItems > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">{totalItems}</div>
                        <div className="text-blue-200">Total Meals</div>
                    </div>
                    <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">{totalCalories}</div>
                        <div className="text-blue-200">Total Calories</div>
                    </div>
                    <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 text-center hover:transform hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">{avgCalories}</div>
                        <div className="text-blue-200">Avg per Meal</div>
                    </div>
                </div>
            )}

            {/* Controls Section */}
            {totalItems > 0 && (
                <div className="bg-blue-700/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search */}
                        <div className="flex-1 w-full md:w-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search meals..."
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

                        {/* Sort */}
                        <div className="flex gap-4 items-center">
                            <label className="text-blue-200 font-medium">Sort by:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 rounded-xl bg-blue-600/50 border-2 border-blue-500/30 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            >
                                <option value="name">Name (A-Z)</option>
                                <option value="calories-high">Calories (High to Low)</option>
                                <option value="calories-low">Calories (Low to High)</option>
                                <option value="protein">Protein (High to Low)</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Info */}
                    {searchTerm && (
                        <div className="mt-4 text-center">
                            <p className="text-blue-200">
                                Found {filteredNutritions.length} meal{filteredNutritions.length !== 1 ? 's' : ''} matching "{searchTerm}"
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Meal Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedNutritions.map((nutrition, index) => (
                    <MealItem
                        key={nutrition.id}
                        nutritions={nutrition}
                        onDelete={() => deleteNutrition(nutrition.id, nutritions, setNutrition)}
                        onEdit={() => handleEdit(nutrition)}
                        isNew={index === sortedNutritions.length - 1 && sortedNutritions.length > nutritions.length - 1}
                    />
                ))}
            </div>

            {/* Empty State */}
            {nutritions.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">No meals yet!</h3>
                    <p className="text-blue-200 mb-8 max-w-md mx-auto">
                        Start your nutrition journey by adding your first meal. Track calories, protein, carbs, and fats to stay on top of your health goals.
                    </p>
                    <a
                        href="/form"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Your First Meal
                    </a>
                </div>
            )}

            {/* No Results State */}
            {nutritions.length > 0 && sortedNutritions.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">No matches found</h3>
                    <p className="text-blue-200 mb-4">
                        No meals match your search for "{searchTerm}"
                    </p>
                    <button
                        onClick={() => setSearchTerm("")}
                        className="text-blue-300 hover:text-white underline transition-colors duration-200"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </div>
    );
}

export default MealList;