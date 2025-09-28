export default function MealForm({ currentNutrition, handleChange, handleSubmit, notification }) {
    return (
        <div className="max-w-md mx-auto bg-blue-700 rounded-lg shadow-lg">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block mb-1 text-white text-sm font-bold">Item Name</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-slate-600 text-white"
                        type="text"
                        name="itemName"
                        value={currentNutrition.itemName}
                        onChange={handleChange}
                        placeholder="Item Name"
                        required
                    />
                    </div>
                    <div>
                    <label className="block mb-1 text-white text-sm font-bold">Calories</label>
                    <input
                    className="w-full px-3 py-2 rounded bg-slate-600 text-white"
                        type="number"
                        name="calories"
                        value={currentNutrition.calories}
                        onChange={handleChange}
                        placeholder="Calories"
                        required
                    />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-white mb-1 text-sm font-bold">Protein (g)</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-blue-600 text-white"
                        type="number"
                        name="protein"
                        value={currentNutrition.protein}
                        onChange={handleChange}
                        placeholder="Protein"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-white mb-1 text-sm font-bold">Carbs</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-blue-600 text-white"
                        type="number"
                        name="carbs"
                        value={currentNutrition.carbs}
                        onChange={handleChange}
                        placeholder="Carbs"
                        required
                    />
                    </div>
                </div>
                <div>
                <label className="block text-white mb-1 text-sm font-bold">Fat (g)</label>
                <input
                    className="w-full px-3 py-2 rounded bg-blue-600 text-white"
                    type="number"
                    name="fat"
                    value={currentNutrition.fat}
                    onChange={handleChange}
                    placeholder="Fat"
                    required
                />
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white 
                font-bold py-2 px-4 rounded focus:outline-none  focus:ring-blue-400 transition
                duration-150 mt-4
                ">Add Item</button>
            </form>
             {notification && (
            <div className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-slideIn">
            Added: {notification}
            <style jsx>{`
                @keyframes slideIn {
                    from{transform: translateX(100%);}
                    to{transform: translateX(0);}
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out forwards;
                }
                `}</style>
            </div>
        )}
        </div>

       
    );
}
