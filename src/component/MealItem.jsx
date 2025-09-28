import React from "react";

function MealItem({ nutritions, onDelete, onEdit, isNew }) {
    const getIconForFood = (foodName) => {
        const name = foodName.toLowerCase();
        if (name.includes('chicken') || name.includes('meat')) {
            return (
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            );
        }
        if (name.includes('fish')) {
            return (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            );
        }
        if (name.includes('salad') || name.includes('vegetable')) {
            return (
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
        }
        return (
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        );
    };

    return (
        <div className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg border border-blue-400/30 hover:transform hover:scale-105 transition-all duration-300 ${isNew ? 'animate-pulse' : ''}`}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-blue-400/20">
                {getIconForFood(nutritions.itemName)}
                <h3 className="text-white font-bold text-lg truncate">
                    {nutritions.itemName}
                </h3>
            </div>
            
            {/* Nutrition Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                    <div className="text-white font-bold text-xl">{nutritions.calories}</div>
                    <div className="text-blue-200 text-sm">Calories</div>
                    {nutritions.calories > 49 && (
                        <div className="text-red-300 text-xs mt-1 bg-red-500/20 px-2 py-1 rounded-full border border-red-400/30">
                            High
                        </div>
                    )}
                </div>
                
                <div className="text-center">
                    <div className="text-white font-bold text-xl">{nutritions.protein}g</div>
                    <div className="text-blue-200 text-sm">Protein</div>
                    {nutritions.protein > 30 && (
                        <div className="text-red-300 text-xs mt-1 bg-red-500/20 px-2 py-1 rounded-full border border-red-400/30">
                            High
                        </div>
                    )}
                </div>
                
                <div className="text-center">
                    <div className="text-white font-bold text-xl">{nutritions.carbs}g</div>
                    <div className="text-blue-200 text-sm">Carbs</div>
                    {nutritions.carbs > 30 && (
                        <div className="text-red-300 text-xs mt-1 bg-red-500/20 px-2 py-1 rounded-full border border-red-400/30">
                            High
                        </div>
                    )}
                </div>
                
                <div className="text-center">
                    <div className="text-white font-bold text-xl">{nutritions.fat}g</div>
                    <div className="text-blue-200 text-sm">Fat</div>
                    {nutritions.fat > 30 && (
                        <div className="text-red-300 text-xs mt-1 bg-red-500/20 px-2 py-1 rounded-full border border-red-400/30">
                            High
                        </div>
                    )}
                </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-3">
                <button 
                    onClick={onDelete}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                </button>
                <button 
                    onClick={onEdit}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default MealItem;