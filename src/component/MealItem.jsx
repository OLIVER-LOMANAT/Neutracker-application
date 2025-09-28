import React from "react";


function MealItem({nutritions, onDelete, onEdit}) {

return(
    <div className="card">
        <h3>{nutritions.itemName}</h3>
        <p>Calories: {nutritions.calories}</p>
        <span className="limit-exceed">{nutritions.calories > 49 ? "Exceed" : ""}</span>
        <p>Protein: {nutritions.protein}g</p>
        <span className="limit-exceed">{nutritions.protein > 30 ? "Exceed" : ""}</span>
        <p>Carbs: {nutritions.carbs}g</p>
        <span className="limit-exceed">{nutritions.carbs > 30 ? "Exceed" : ""}</span>
        <p>Fat: {nutritions.fat}g</p>
        <span className="limit-exceed">{nutritions.fat > 30 ? "Exceed" : ""}</span>
        <div className="card-buttons">
        <button onClick={onDelete} className="delete-btn">Delete</button>
        <button onClick={onEdit} className="edit-btn">Edit</button>
        </div>
    </div>
    
)
}
export default MealItem;