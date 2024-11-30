import React from "react";
import ItemDetails from "./ItemDetails";

function MenuDetails({ selectedItem }) {
  return (
    <>
      <section className="relative bottom-0 w-2/3 h-screen right-0">
        <div
          className="flex-1 p-2 w-full"
          style={{ backgroundImage: "url(/images/blackBoard.jpg)" }}
        >
          <div className="flex justify-center items-center">
            <img
              src="/images/Menu-with-Add-ons.png"
              alt="menu image"
              className="max-w-40"
            />
          </div>
          <div className="flex items-center justify-start space-x-4 mt-12">
            <div className="z-30 transform -translate-x-8">
              <ItemDetails
                selectedItem={selectedItem}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuDetails;
