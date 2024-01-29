import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdLink } from "react-icons/io";
import image from "../../../public/product.png";
import InfoTooltip from "../Misc/InfoTooltip";

export default function RetailUnitInfo({ products, setProducts }) {
  // console.log("----->>", products);
  const [productData, setProductData] = useState({});
  const [productsCode, setProductsCode] = useState([]);
  const [retailUnit, setRetailUnit] = useState(products);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [live, setLive] = useState(false);

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
  }, []);

  const handleInputChange = (fieldName, value) => {
    setProductData({ ...productData, [fieldName]: value });
  };

  const addNewRetailProduct = () => {
    setRetailUnit([...retailUnit, retailUnit[retailUnit.length - 1]]);
    console.log("retailUnit----->", retailUnit);
  };

  const delLastAddedProduct = () => {
    setRetailUnit(retailUnit.slice(0, -1));
    console.log("retailUnit----->", retailUnit);
  };

  useEffect(() => {
    setRetailUnit(products);
  }, [products]);

  return (
    <>
      {retailUnit.length > 0 &&
        retailUnit.map((key) => (
          <div className="">
            <div className="my-3">
              <div className="d-flex align-items-center gap-3">
                <label className="label-one">Live in Vaster</label>
                <label className="switch">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setLive(!live);
                      console.log("reatilUnit----->", reatailUnit);
                    }}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="my-3">
              <label className="label-one">SU Code / GTIN</label>
              <input
                id="suCodeGtin"
                className="input-field-one"
                value={key.SU_CODE || ""}
                // value={productsCode.join(", ")}
                type="text"
                onChange={(e) => handleInputChange("SU_CODE", e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="label-one">LOT_NUMBERS</label>
              <div className="d-flex">
                <input
                  id="LOT_NUMBERs"
                  className="input-field-one"
                  value={key.LOT_NUMBERs || ""}
                  type="text"
                  onChange={(e) =>
                    handleInputChange("LOT_NUMBERs", e.target.value)
                  }
                />
                <InfoTooltip tooltipText="Tooltip here" />
              </div>
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-6">
                  <label className="label-one">SU_PRODUCT_NET_SIZE</label>
                  <div className="d-flex">
                    <input
                      id="SU_PRODUCT_NET_SIZE"
                      className="input-field-one"
                      value={key.SU_PRODUCT_NET_SIZE || ""}
                      type="text"
                      onChange={(e) =>
                        handleInputChange("SU_PRODUCT_NET_SIZE", e.target.value)
                      }
                    />
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
                <div className="col-6">
                  <label className="label-one">SU_PRODUCT_NET_SIZE_UOM</label>
                  <div className="d-flex">
                    <select
                      className="input-field-one"
                      aria-label="Default select example"
                      value={key.SU_PRODUCT_NET_SIZE_UOM || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "SU_PRODUCT_NET_SIZE_UOM",
                          e.target.value
                        )
                      }
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option
                        value="Gram"
                        selected={key.PER_RETAIL_UNIT_CBD_UOM === "Gram"}
                      >
                        Gram
                      </option>
                      <option
                        value="Milliliter"
                        selected={key.SU_PRODUCT_NET_SIZE_UOM === "Milliliter"}
                      >
                        Milliliter
                      </option>
                    </select>
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-hline" />
            <div className="my-3">
              <label className="label-one">NUMBERS_OF_ITEMS</label>
              <div className="d-flex">
                <input
                  id="NUMBER_OF_ITEMS"
                  className="input-field-one"
                  value={key.NUMBER_OF_ITEMS || ""}
                  type="text"
                  onChange={(e) =>
                    handleInputChange("NUMBER_OF_ITEMS", e.target.value)
                  }
                />
                <InfoTooltip tooltipText="Tooltip here" />
              </div>
            </div>

            <div className="my-3">
              <div className="row">
                <div className="col-6">
                  <label className="label-one">ITEM_SIZE</label>
                  <div className="d-flex">
                    <input
                      id="ITEM_SIZE"
                      className="input-field-one"
                      value={key.ITEM_SIZE || ""}
                      type="text"
                      onChange={(e) =>
                        handleInputChange("ITEM_SIZE", e.target.value)
                      }
                    />
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
                <div className="col-6">
                  <label className="label-one">ITEM_UOM</label>
                  <div className="d-flex">
                    <select
                      className="input-field-one"
                      aria-label="Default select example"
                      value={key.ITEM_UOM || ""}
                      onChange={(e) =>
                        handleInputChange("ITEM_UOM", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Gram" selected={key.ITEM_UOM === "Gram"}>
                        Gram
                      </option>
                      <option
                        value="Milliliter"
                        selected={key.ITEM_UOM === "Milliliter"}
                      >
                        Milliliter
                      </option>
                    </select>
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-hline" />
            <div className="my-3">
              <div className="row">
                <div className="col-6">
                  <label className="label-one">Volume EQUIVALENCY</label>
                  <div className="d-flex">
                    <input
                      id="SU_VOLUME_EQUIVALENCY"
                      className="input-field-one"
                      value={key.SU_VOLUME_EQUIVALENCY || ""}
                      type="text"
                      onChange={(e) =>
                        handleInputChange(
                          "SU_VOLUME_EQUIVALENCY",
                          e.target.value
                        )
                      }
                    />
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
                <div className="col-6">
                  <label className="label-one">SU_VOLUME_EQUIVALENCY_UOM</label>
                  <div className="d-flex">
                    <select
                      className="input-field-one"
                      aria-label="Default select example"
                      value={key.SU_VOLUME_EQUIVALENCY_UOM || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "SU_VOLUME_EQUIVALENCY_UOM",
                          e.target.value
                        )
                      }
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option
                        value="Gram"
                        selected={key.SU_VOLUME_EQUIVALENCY_UOM === "Gram"}
                      >
                        Gram
                      </option>
                      <option
                        value="Milliliter"
                        selected={
                          key.SU_VOLUME_EQUIVALENCY_UOM === "Milliliter"
                        }
                      >
                        Milliliter
                      </option>
                    </select>
                    <InfoTooltip tooltipText="Tooltip here" />
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-hline" />

            {/* PACKAGING_MATERIAL */}
            <div className="my-3">
              <label className="label-one">PACKAGING_MATERIAL</label>
              <div className="d-flex">
                <select
                  class="input-field-one"
                  aria-label="Default select example"
                >
                  <option selected>POLYPROPYLENE</option>
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>
                <InfoTooltip tooltipText="Tooltip here" />
              </div>
            </div>

            <div className="my-3">
              <label className="label-one">
                Packaging image_Design_Flats_Frnt
              </label>
              <input
                id="file1"
                className="input-field-one"
                onChange={(e) => setImage1(e.target.value)}
                value=""
                type="file"
              />
              <label
                for="file1"
                className="input-field-one d-flex justify-content-between"
              >
                <span>Upload</span>
                <span>
                  <IoMdLink size={20} />
                </span>
              </label>
              <label className="fs-10">
                {" "}
                .jpgs or .pngs only. Must be Fill values in 1GB{" "}
              </label>
              <div
                className=""
                style={{
                  display:
                    productData?.PACKAGING_IMAGE_DESIGN_FLAT_FRNT !== null
                      ? "block"
                      : "none",
                }}
              >
                <div className="">
                  {productData?.PACKAGING_IMAGE_DESIGN_FLAT_FRNT !== null ? (
                    <Image
                      src={productData.PACKAGING_IMAGE_DESIGN_FLAT_FRNT}
                      alt="product"
                      width={79}
                      height={79}
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="my-3">
              <label className="label-one">
                Packaging image_DesignFlats_ Back
              </label>
              <input
                id="file2"
                className="input-field-one"
                onChange={(e) => setImage2(e.target.value)}
                value=""
                type="file"
              />
              <label
                for="file2"
                className="input-field-one d-flex justify-content-between"
              >
                <span>Upload</span>
                <span>
                  <IoMdLink size={20} />
                </span>
              </label>
              <label className="fs-10">
                {" "}
                .jpgs or .pngs only. Must be Fill values in 1GB{" "}
              </label>

              <div
                className=""
                style={{
                  display:
                    productData?.PACKAGING_IMAGE_DESIGN_FLATS_BACK !== null
                      ? "block"
                      : "none",
                }}
              >
                <div className="">
                  {productData?.PACKAGING_IMAGE_DESIGN_FLATS_BACK !== null ? (
                    <Image
                      src={productData.PACKAGING_IMAGE_DESIGN_FLATS_BACK}
                      alt="product"
                      width={79}
                      height={79}
                    />
                  ) : null}
                  <button
                    className="btn btn-delete"
                    onClick={() => setImage2(null)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>


            <div className="my-3">
              <label className="label-one">Packaging images (photos)</label>
              <input
                id="file1"
                className="input-field-one"
                onChange={(e) => setImage3(e.target.value)}
                value=""
                type="file"
              />
              <label
                for="file1"
                className="input-field-one d-flex justify-content-between"
              >
                <span>Upload</span>
                <span>
                  <IoMdLink size={20} />
                </span>
              </label>
              <label className="fs-10">
                {" "}
                .jpgs or .pngs only. Must be Fill values in 1GB{" "}
              </label>
              <div
                className=""
                style={{
                  display:
                    productData?.PACKAGING_IMAGES !== null ? "block" : "none",
                }}
              >
                <div className="">
                  {productData?.PACKAGING_IMAGES !== null ? (
                    <Image
                      src={productData.PACKAGING_IMAGES}
                      alt="product"
                      width={79}
                      height={79}
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="my-3">
              <label className="label-one">
                Product Image (inside package)
              </label>
              <input
                id="file1"
                className="input-field-one"
                onChange={(e) => setemail(e.target.value)}
                value=""
                type="file"
              />
              <label
                for="file1"
                className="input-field-one d-flex justify-content-between"
              >
                <span>Upload</span>
                <span>
                  <IoMdLink size={20} />
                </span>
              </label>
            </div>
            <div className="divider-dark" />
          </div>
        ))}
      <div
        className="mt-3"
        style={{ display: retailUnit.length > 0 ? "block" : "none" }}
      >
        <div className="divider-hline" />
        <div className="my-3">
          <button className="btn btn-retail" onClick={addNewRetailProduct}>
            Add new retail unit +
          </button>
        </div>
        <div className="divider-hline" />
      </div>
      <div
        className="mt-3"
        style={{ display: retailUnit.length > 1 ? "block" : "none" }}
      >
        <div className="divider-hline" />
        <div className="my-3">
          <button className="btn btn-retail" onClick={delLastAddedProduct}>
            delete last Added retail info -
          </button>
        </div>
        <div className="divider-hline" />
      </div>
    </>
  );
}
