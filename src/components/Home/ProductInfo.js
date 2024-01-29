import React, { useEffect, useState } from "react";
import Backendless from "backendless";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import InfoTooltip from "../Misc/InfoTooltip";

export default function ProductInfo({ checkedIds, products, setProducts }) {
  const [productData, setProductData] = useState({});
  const [productsCode, setProductsCode] = useState([]);
  const [strain1, setStrain1] = useState(false);
  const [strain2, setStrain2] = useState(false);
  const [classOptions, setclassOptions] = useState([]);

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );

  useEffect(() => {
    if (products && products.length > 0) {
      let codes = [];
      for (let i = 0; i < products.length; i++) codes.push(products[i].SU_CODE);
      setProductsCode(JSON.parse(JSON.stringify(codes)));
      setProductData(products[products.length - 1]);
    } else {
      setProductsCode([]);
      setProductData([]);
    }
  }, [products]);

  const handleInputChange = (fieldName, value) => {
    setProductData({ ...productData, [fieldName]: value });
  };
  const handleSubcategoryChange = (value) => {
    setProductData({ ...productData, SUBCATEGORY: value });
  };

  useEffect(() => {
    if (productData.SUBCATEGORY) {
      switch (productData.SUBCATEGORY) {
        case "Beverages":
          setclassOptions([
            "Carbonated Drink",
            "Non Carbonated Drink",
            "Drink Mix",
            "Other Beverages",
            "Dry Tea and Coffee",
          ]);
          break;

        case "Edibles":
          setclassOptions([
            "Choclate",
            "Chews",
            "Other Edibles",
            "Hard Candy",
            "Baked Goods",
          ]);
          break;

        case "Ingestible Extracts":
          setclassOptions([
            "Capsule and Pills",
            "Oil and Tinctures",
            "Other Ingestible Extracts",
          ]);
          break;

        case "Inhalable Extracts":
          setclassOptions([
            "Cartridge",
            "Disposable Pens",
            "Dry Sift",
            "Hash",
            "Other Inhalable Extracts",
            "Resin and Rosin",
            "Shatter",
            "Vape Kits",
            "Wax",
            "Badder",
          ]);
          break;

        case "Topicals":
          setclassOptions([
            "Other Topicals",
            "Massage Oils and Lubricants",
            "Creams and Lotions",
            "Bath Products",
            "Balms",
          ]);
          break;

        default:
          setclassOptions([
            "Creams and Lotions",
            "Hybrid",
            "Sativa",
            "Carbonated Drink",
            "Chocolate",
          ]);
          break;
      }
    } else {
      setclassOptions([]);
    }
  }, [productData.SUBCATEGORY]);

  return (
    <div>
      <div className="my-3">
        <label className="label-one">SU Code / GTIN</label>
        <input
          id="suCodeGtin"
          className="input-field-one"
          // value={productData?.SU_CODE || ""}
          value={productsCode.join(", ")}
          type="text"
          onChange={(e) => handleInputChange("SU_CODE", e.target.value)}
        />
      </div>
      <div className="my-3">
        <label className="label-one">PRODUCT NAME</label>
        <input
          id="productName"
          className="input-field-one"
          value={productData?.PRODUCT_NAME || ""}
          type="text"
          onChange={(e) => handleInputChange("PRODUCT_NAME", e.target.value)}
        />
      </div>
      <div className="my-3">
        <label className="label-one">BRAND NAME</label>
        <div className="d-flex">
          <input
            id="email"
            className="input-field-one"
            value={productData?.BRAND_NAME || ""}
            onChange={(e) => handleInputChange("BRAND_NAME", e.target.value)}
            type="text"
            placeholder="Email"
          />
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">SHORT DESC</label>
        <div className="d-flex">
          <input
            id="email"
            className="input-field-one"
            value={productData?.SHORT_DESC || ""}
            type="text"
            onChange={(e) => handleInputChange("SHORT_DESC", e.target.value)}
          />
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">ABOUT THIS PRODUCT</label>
        <div className="d-flex">
          <textarea
            id="email"
            className="input-field-one"
            value={productData?.ABOUT_THIS_PRODUCT || ""}
            type="text"
            onChange={(e) =>
              handleInputChange("ABOUT_THIS_PRODUCT", e.target.value)
            }
            rows="6"
          />
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">consumption method</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.CONSUMPTION_METHOD || ""}
            onChange={(e) =>
              handleInputChange("CONSUMPTION_METHOD", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            <option
              value="INHALE"
              selected={productData?.CONSUMPTION_METHOD === "INHALE"}
            >
              INHALE
            </option>
            <option
              value="TOPICAL"
              selected={productData?.CONSUMPTION_METHOD === "TOPICAL"}
            >
              TOPICAL
            </option>
            <option
              value="INGEST"
              selected={productData?.CONSUMPTION_METHOD === "INGEST"}
            >
              INGEST
            </option>
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="divider-hline" />

      {/* sub category */}
      <div className="my-3">
        <label className="label-one">sub category</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.SUBCATEGORY || ""}
            onChange={(e) => handleSubcategoryChange(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "Flower",
              "Pre-roll",
              "Beverages",
              "Edibles",
              "Topicals",
              "Seeds",
              "Inhalable Extracts",
              "Ingestible Extracts",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.SUBCATEGORY === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>

      {/* Class Dropdown */}
      <div className="my-3">
        <label className="label-one">class</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.CLASS || ""}
            onChange={(e) => handleInputChange("CLASS", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>

      {/* Origin Region */}
      <div className="my-3">
        <label className="label-one">origin region</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.ORIGIN_REGION || ""}
            onChange={(e) => handleInputChange("ORIGIN_REGION", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {["N/A", "BRITISH COLUMBIA", "ALBERTA"].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.ORIGIN_REGION === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      
      {/* Growing Method */}
      <div className="my-3">
        <label className="label-one">grow method</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.GROWING_METHOD || ""}
            onChange={(e) =>
              handleInputChange("GROWING_METHOD", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "Greenhouse",
              "Outdoor",
              "Indoor",
              "Hybrid Greenhouse",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.GROWING_METHOD === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      {/* Plant Type */}
      <div className="my-3">
        <label className="label-one">plant type</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.PLANT_TYPE || ""}
            onChange={(e) => handleInputChange("PLANT_TYPE", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {["Indica", "Hybrid", "Sativa", "Blend", "Variety Pack"].map(
              (option) => (
                <option
                  key={option}
                  value={option}
                  selected={productData?.PLANT_TYPE === option}
                >
                  {option}
                </option>
              )
            )}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">strain 1</label>
        <div className="d-flex position-relative">

        <input
          id="strain1"
          className="input-field-one"
          value={strain1 ? productData?.STRAIN_1 :  "*********"}
          type="text"
          onChange={(e) => handleInputChange("STRAIN_1", e.target.value)}
        />

          <span className="input-eye-icon" onClick={() => setStrain1(!strain1)}>
            {strain1 ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </span>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">strain 2</label>
        <div className="d-flex position-relative">
        <input
          id="strain2"
          className="input-field-one"
          value={strain2 ? productData?.STRAIN_2 :  "*********"}
          type="text"
          onChange={(e) => handleInputChange("STRAIN_1", e.target.value)}
        />
          <span className="input-eye-icon" onClick={() => setStrain2(!strain2)}>
            {strain2 ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </span>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">EXTRACTION PROCESS</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.EXTRACTION_PROCESS || ""}
            onChange={(e) =>
              handleInputChange("EXTRACTION_PROCESS", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "Alcohol",
              "Butane",
              "CO2",
              "Dry Sieve",
              "Ethanol",
              "Heat",
              "Hexane",
              "Isopropanol",
              "Water",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.EXTRACTION_PROCESS === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">ALLERGEN 1 Present</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.ALLERGEN_1_PRESENT || ""}
            onChange={(e) =>
              handleInputChange("ALLERGEN_1_PRESENT", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "Eggs",
              "Milk",
              "Mustard",
              "Peanut",
              "CRUSTACEANS+MOLLUSUS",
              "Fish",
              "SESAME_SEEDS",
              "Soy",
              "SULPHITES",
              "Tree nuts",
              "WHEAT+TRIICALE",
              "None",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.ALLERGEN_1_PRESENT === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">ALLERGEN 2 PRESENT</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.ALLERGEN_1_PRESENT || ""}
            onChange={(e) =>
              handleInputChange("ALLERGEN_1_PRESENT", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "Eggs",
              "Milk",
              "Mustard",
              "Peanut",
              "CRUSTACEANS+MOLLUSUS",
              "Fish",
              "SESAME_SEEDS",
              "Soy",
              "SULPHITES",
              "Tree nuts",
              "WHEAT+TRIICALE",
              "None",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.ALLERGEN_1_PRESENT === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="divider-hline"></div>
      <div className="my-3">
        <label className="label-one">VASTER LIVE STATUS</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.LIVE_STATUS || ""}
            onChange={(e) => handleInputChange("LIVE_STATUS", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option
              value="false"
              selected={productData?.LIVE_STATUS === "false"}
            >
              Not Active
            </option>
            <option value="true" selected={productData?.LIVE_STATUS === "true"}>
              Active
            </option>
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">LAST GO LIVE DATE</label>
        <div className="d-flex">
          <input
            id="email"
            className="input-field-one"
            type="text"
            value={productData?.LAST_GO_LIVE_DATE || ""}
            onChange={(e) =>
              handleInputChange("LAST_GO_LIVE_DATE", e.target.value)
            }
          />
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">DATE CREATED</label>
        <div className="d-flex">
          <input
            id="email"
            className="input-field-one"
            value={productData?.created || ""}
            onChange={(e) => handleInputChange("created", e.target.value)}
          />
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
    </div>
  );
}
