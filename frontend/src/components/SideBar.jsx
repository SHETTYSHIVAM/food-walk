import React, { useState } from "react";
import sushiImage from "/images/sushi.jpg";
import ellu from "/images/ellu.png";
import greenGram from "/images/greenGram.jpg";
import rasayana from "/images/rasayana.png";
import MenuDetails from "./MenuDetails";

const menuItems = [
  {
    id: 1,
    name: "Sushi",
    imgSrc: sushiImage,
    details: "A delightful Japanese dish with fresh ingredients.",
    nutrition: {
      calories: 200,
      protein: "7g",
      fat: "5g",
      carbs: "28g",
      fiber: "1g",
      sodium: "300mg",
    },
  },
  {
    id: 2,
    name: "Yellu Juice",
    imgSrc: ellu,
    details: "A refreshing traditional sesame drink.",
    nutrition: {
      calories: 150,
      protein: "4g",
      fat: "10g",
      carbs: "12g",
      fiber: "2g",
      sodium: "50mg",
    },
  },
  {
    id: 3,
    name: "Green Gram Snack",
    imgSrc: greenGram,
    details: "A healthy and crispy snack made with green gram.",
    nutrition: {
      calories: 180,
      protein: "12g",
      fat: "3g",
      carbs: "30g",
      fiber: "6g",
      sodium: "120mg",
    },
  },
  {
    id: 4,
    name: "Rasayana",
    imgSrc: rasayana,
    details: "A sweet fruit-based delicacy from South India.",
    nutrition: {
      calories: 250,
      protein: "2g",
      fat: "8g",
      carbs: "45g",
      fiber: "5g",
      sodium: "40mg",
    },
  },
];

export default function SidebarMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative flex  h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b overflow-y-scroll from-gray-800 to-gray-900 text-white p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mt-4 mb-6">Menu</h2>
        <div className="grid gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 hover:shadow-lg rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-2">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <span className="text-lg font-semibold">{item.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem ? (
        <MenuDetails selectedItem={selectedItem}/>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <h1 className="text-6xl font-bold">Select an item to see more details</h1>
          </div>
      )}
    </div>
  );
}
