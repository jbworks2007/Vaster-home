import React from "react";
import menu from "../../utils/json/menuitems.json";

export default function HomeSidebar(prop) {
  return (
    <div className="">
      <div className={`sidebar edge-radius ${prop.visible ? "visible" : ""}`}>
        <div className="d-flex justify-content-center mt-5">
          <div className="round-icon-100 bg-shadeblue">WE GROW</div>
        </div>
        <div className="mt-5 menuitem">BRAND NAMES</div>
        <div className="my-2">
          {menu.map((key) => (
            <div className="px-5">
              <div className="d-flex align-items-center">
                <div
                  className="mx-2 round-icon-15"
                  style={{ background: `${key.color}` }}
                ></div>
                <div className="my-1 menuitem">{key.brand}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
