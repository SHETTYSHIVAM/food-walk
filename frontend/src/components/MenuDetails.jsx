import React from "react";
import ItemDetails from "./ItemDetails";

function MenuDetails({ selectedItem }) {
  return (
    <>
      <section className="relative bottom-0 w-full h-screen max-h-screen right-0">
        <div
          className="flex-1 p-2 w-full h-full relative bottom-0"
          style={{ backgroundImage: "url(/images/blackBoard.jpg)" }}
        >
          <div className="flex justify-center items-center mt-12">
            <img
              src="/images/Menu-with-Add-ons.png"
              alt="menu image"
              className="max-w-40 max-h-40"
            />
          </div>
          <div className="flex items-start justify-center space-x-4 mt-12">
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
