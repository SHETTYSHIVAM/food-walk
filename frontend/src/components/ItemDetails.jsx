import React from "react";
import { motion } from "framer-motion";

function ItemDetails({ selectedItem }) {
  return (
    <div className="flex items-center justify-center mx-24 relative w-full">
      <div className="z-10 w-1/2">
        <img
          src={selectedItem.imgSrc}
          alt={selectedItem.name}
          className="w-full max-w-[800px] h-auto max-h-50 object-cover"
        />
      </div>

      <div className="w-1/2 transform -translate-x-12 z-20">
        <div className="bg-white shadow-md flex flex-col items-center justify-start max-h-[800px] p-12 w-auto relative">
          <h1 className="text-6xl uppercase text-gray-500 mb-12">
            {selectedItem.name}
          </h1>

          <svg width="100" height="10">
            <motion.line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="yellow"
              strokeWidth="10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </svg>

          <p className="text-gray-300 mt-20 mb-6 text-lg">{selectedItem.details}</p>
          <table className="w-full border-collapse border border-slate-600 shadow-lg bg-white">
            <tbody>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Calories
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.calories}
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Protein
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.protein}
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Fat
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.fat}
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Fiber
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.fiber}
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Carbohydrates
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.carbs}
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-semibold">
                  Sodium
                </td>
                <td className="p-4 border border-gray-300">
                  {selectedItem.nutrition.sodium}
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-4xl font-hand uppercase text-gray-400 mt-12">
            ~Code Cafe
          </h1>
          <div className="mb-24">
            <div className="absolute  right-0 w-24 h-10 bg-yellow-300 transform translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
