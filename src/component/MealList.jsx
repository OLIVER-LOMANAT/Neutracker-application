import React from "react";
import MealItem from "./MealItem";
import deleteNutrition from "../delete"

function MealList ({nutritions, setNutrition}) {
    const handleEdit = (nutrition) => {
      const updatedName = prompt("Enter new food name:", nutrition.itemName);
        if(updatedName && updatedName !== nutritions.itemName){
        const updatedMeal = {...nutrition, itemName: updatedName};

        fetch(`https://nutrition-api-nyjf.onrender.com/nutritions/${nutrition.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedMeal),
        })
        .then((res) => {
        if (!res.ok) throw new Error("Failed to update");
          return res.json()})

        .then((data) =>{
            const updatedList = nutritions.map((nutrition) =>
                nutrition.id === data.id ? data : nutrition)
            setNutrition(updatedList);})
         .catch((error) => {
            console.error("PATCH error:", error);})
      }
    }

    return (
        <div className="meal-list">
            {nutritions.map(nutrition => (
                <MealItem 
                key={nutrition.id}
                nutritions={nutrition} 
                onDelete = {() =>deleteNutrition(nutrition.id, nutritions, setNutrition)}
                onEdit = {() => handleEdit(nutrition)}
                 />
            ))}
            {nutritions.length === 0 && <p>No meals added yet.</p>}
        </div>
    )
}
export default MealList;