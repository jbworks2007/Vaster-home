import React, { useEffect, useState } from "react";
import InfoTooltip from "../Misc/InfoTooltip";

export default function Cannabinoid({ checkedIds, products, setProducts }) {
  const [productData, setProductData] = useState({});
  const [productsCode, setProductsCode] = useState([]);

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

  return (
    <div>
      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">PRU CBD MIN</label>
            <input
              id="PER_RETAIL_UNIT_CBD_MIN"
              className="input-field-one"
              value={productData?.PER_RETAIL_UNIT_CBD_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange("PER_RETAIL_UNIT_CBD_MIN", e.target.value)
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">PRU CBD MAX</label>
            <div className="d-flex">
              <input
                id="PRU_CBD_MAX"
                className="input-field-one"
                value={productData?.PRU_CBD_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange("PRU_CBD_MAX", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">PRU CBD UOM</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.PER_RETAIL_UNIT_CBD_UOM || ""}
            onChange={(e) =>
              handleInputChange("PER_RETAIL_UNIT_CBD_UOM", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {["mg", "mg/g"].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.PER_RETAIL_UNIT_CBD_UOM === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>

      <div className="divider-hline" />
      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">PRU THC MIN</label>
            <input
              id="PER_RETAIL_UNIT_THC_MIN"
              className="input-field-one"
              value={productData?.PER_RETAIL_UNIT_THC_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange("PER_RETAIL_UNIT_THC_MIN", e.target.value)
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">PRU THC MAX</label>
            <div className="d-flex">
              <input
                id="PER_RETAIL_UNIT_THC_MAX"
                className="input-field-one"
                value={productData?.PER_RETAIL_UNIT_THC_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange("PER_RETAIL_UNIT_THC_MAX", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">PRU THC UOM</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.PER_RETAIL_UNIT_THC_UOM || ""}
            onChange={(e) =>
              handleInputChange("PER_RETAIL_UNIT_THC_UOM", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {["mg", "mg/g"].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.PER_RETAIL_UNIT_THC_UOM === option}
              >
                {option}
              </option>
            ))}
          </select>
          <InfoTooltip tooltipText="Tooltip here" />
        </div>
      </div>
      <div className="divider-hline" />
      <div className="my-3">
        <label className="label-one">ALT CANNABINOID PRESENT 1</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.ALT_CANNABINOID_PRESENT_1 || ""}
            onChange={(e) =>
              handleInputChange("ALT_CANNABINOID_PRESENT_1", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "CBC (Cannabichromene)",
              "CBE (Cannabielsoin)",
              "CBG (Cannabigerol)",
              "CBL (Cannabicyclol)",
              "CBN (Cannabinol)",
              "CBT (Cannabitriol)",
              "CBDV (Cannabidivarin)",
              "THCVA (Tetrahydrocanabivarinic acid)",
              "THCV (D-9Tetrahydrocannabivarin)",
              "THCA (D-9Tetrahydrocannabinolic acid)",
              "WHEAT+TRIICALE",
              "None",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.ALT_CANNABINOID_PRESENT_1 === option}
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
            <label className="label-one">PRU CANNABINOID 1 MIN</label>
            <input
              id="PER_RETAIL_UNIT_CANNABINOID_1_MIN"
              className="input-field-one"
              value={productData?.PER_RETAIL_UNIT_CANNABINOID_1_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "PER_RETAIL_UNIT_CANNABINOID_1_MIN",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">PRU CANNABINOID 1 MAX</label>
            <div className="d-flex">
              <input
                id="PER_RETAIL_UNIT_CANNABINOID_1_MAX"
                className="input-field-one"
                value={productData?.PER_RETAIL_UNIT_CANNABINOID_1_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange(
                    "PER_RETAIL_UNIT_CANNABINOID_1_MAX",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="col-2">
            <InfoTooltip tooltipText="Tooltip here" />
          </div>
        </div>
      </div>
      <div className="my-3">
        <label className="label-one">ALT CANNABINOID PRESENT 2</label>
        <div className="d-flex">
          <select
            className="input-field-one"
            aria-label="Default select example"
            value={productData?.ALT_CANNABINOID_PRESENT_1 || ""}
            onChange={(e) =>
              handleInputChange("ALT_CANNABINOID_PRESENT_1", e.target.value)
            }
          >
            <option value="" disabled>
              Select
            </option>
            {[
              "N/A",
              "CBC (Cannabichromene)",
              "CBE (Cannabielsoin)",
              "CBG (Cannabigerol)",
              "CBL (Cannabicyclol)",
              "CBN (Cannabinol)",
              "CBT (Cannabitriol)",
              "CBDV (Cannabidivarin)",
              "THCVA (Tetrahydrocanabivarinic acid)",
              "THCV (D-9Tetrahydrocannabivarin)",
              "THCA (D-9Tetrahydrocannabinolic acid)",
              "WHEAT+TRIICALE",
              "None",
            ].map((option) => (
              <option
                key={option}
                value={option}
                selected={productData?.ALT_CANNABINOID_PRESENT_1 === option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-3">
        <div className="row justify-content-between">
          <div className="col-5">
            <label className="label-one">PRU CANNABINOID 2 MIN</label>
            <input
              id="PER_RETAIL_UNIT_CANNABINOID_2_MIN"
              className="input-field-one"
              value={productData?.PER_RETAIL_UNIT_CANNABINOID_2_MIN || ""}
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "PER_RETAIL_UNIT_CANNABINOID_2_MIN",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-5">
            <label className="label-one">PRU CANNABINOID 2 MAX</label>
            <div className="d-flex">
              <input
                id="PER_RETAIL_UNIT_CANNABINOID_2_MAX"
                className="input-field-one"
                value={productData?.PER_RETAIL_UNIT_CANNABINOID_2_MAX || ""}
                type="text"
                onChange={(e) =>
                  handleInputChange(
                    "PER_RETAIL_UNIT_CANNABINOID_2_MAX",
                    e.target.value
                  )
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
