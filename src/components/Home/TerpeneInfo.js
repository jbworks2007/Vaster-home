import React, { useState, useEffect } from "react";
import InfoTooltip from "../Misc/InfoTooltip";

export default function TerpeneInfo({ checkedIds, products, setProducts }) {
  const [productData, setProductData] = useState({});
  const [productsCode, setProductsCode] = useState([]);

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );
  const terpeneOptions = [
    "N/A", "Alpha Cedrene", "Alpha Pinene", "Bergamontene", "Beta Caryophyllene", "Beta Myrcene",
    "Beta Pinene", "Bisabolol", "Borneol", "Camphene", "Caryophyllene", "Cedrene", "Cymene",
    "Delta-3 Carene", "Eucalyptol", "Farnesene", "Fenchol", "Geraniol", "Guaiol", "Humulene",
    "Isoborneol", "Limonene", "Linalool", "Myrcene", "Nerol & idol", "Ocimene", "Phellandrene",
    "Phytol", "Pinene", "Sabinene", "Selinadienes", "Terpineol", "Terpinolene", "Trans Caryophyllene",
    "Trans Caryophyllene Valencene", "Various", "Other",
  ];

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
  return (
    <div>
      <div className="my-3">
        <label className="label-one">TERPENE 1 TYPE</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.TERPENE_1_TYPE || ""}
            onChange={(e) =>
              handleInputChange("TERPENE_1_TYPE", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {terpeneOptions.map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.TERPENE_1_TYPE === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>

      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">1_MIN</label>
            <input
              id="TERPENE_1_MIN"
              className="input-field-one"
              value={productData?.TERPENE_1_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange("TERPENE_1_MIN", e.target.value)
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">1_MAX</label>
            <div className="d-flex">
              <input
                id="TERPENE_1_MAX"
                className="input-field-one"
                value={productData?.TERPENE_1_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange("TERPENE_1_MAX", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
      <div className="divider-hline" />
      {/* TERPENE_2_TYPE */}
      <div className="my-3">
        <label className="label-one">TERPENE 2 TYPE</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.TERPENE_2_TYPE || ""}
            onChange={(e) =>
              handleInputChange("TERPENE_2_TYPE", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {terpeneOptions.map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.TERPENE_2_TYPE === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">2_MIN</label>
            <input
              id="TERPENE_2_MIN"
              className="input-field-one"
              value={productData?.TERPENE_2_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange("TERPENE_2_MIN", e.target.value)
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">2_MAX</label>
            <div className="d-flex">
              <input
                id="TERPENE_2_MAX"
                className="input-field-one"
                value={productData?.TERPENE_2_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange("TERPENE_2_MAX", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
      <div className="divider-hline" />
      <div className="my-3">
        <label className="label-one">TERPENE 3 TYPE</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.TERPENE_3_TYPE || ""}
            onChange={(e) =>
              handleInputChange("TERPENE_3_TYPE", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {terpeneOptions.map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.TERPENE_3_TYPE === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">3_MIN</label>
            <input
              id="TERPENE_3_MIN"
              className="input-field-one"
              value={productData?.TERPENE_3_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange("TERPENE_3_MIN", e.target.value)
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">3_MAX</label>
            <div className="d-flex">
              <input
                id="TERPENE_3_MAX"
                className="input-field-one"
                value={productData?.TERPENE_3_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange("TERPENE_3_MAX", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
    </div>
  );
}
