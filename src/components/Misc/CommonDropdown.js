"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Backendless from "backendless";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose, IoFilter } from "react-icons/io5";
import Image from "next/image";
import Topical from "../../../public/Images/topical.png";
import inhale from "../../../public/Images/inhale.png";
import injest from "../../../public/Images/injest.png";
import productjson from "../../utils/json/products.json";

const CommonDropdown = ({
  checkedIds,
  setCheckedIds,
  products,
  setProducts,
  setsizedropdown,
  setError,
  filter,
  setAcckey,
  clearFilters,
  setClearFilters,
}) => {
  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );
  const [showInhaleTable, setshowInhaleTable] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedDataTemp, setFetchedDataTemp] = useState([]);
  const [showTopicalTable, setShowTopicalTable] = useState(false);
  const [fetchedTopicalData, setFetchedTopicalData] = useState([]);
  const [fetchedTopicalDataTemp, setFetchedTopicalDataTemp] = useState([]);
  const [showInjestTable, setShowInjestTable] = useState(false);
  const [fetchedInjestData, setFetchedInjestlData] = useState([]);
  const [fetchedInjestDataTemp, setFetchedInjestlDataTemp] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [Terpene, setTerpene] = useState([]);
  const [strain, setStrain] = useState([]);
  const [status, setStatus] = useState([]);
  const [liveproducts, setLiveProducts] = useState(0);
  const [totalproducts, setTotalProducts] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [hovered, setHovered] = useState(false);
  const [kebab, setKebab] = useState(false);
  const [indexcount, setIndexCount] = useState(0);

  //function to sort table
  const sortData = (data) => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.PRODUCT_NAME.toUpperCase();
      const nameB = b.PRODUCT_NAME.toUpperCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return sortedData;
  };

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  //fetching all products
  const getAllProducts = () => {
    console.log("getallproducts =>", productjson);
    // const queryBuilder = Backendless.DataQueryBuilder.create();
    // const data = await Backendless.Data.of("Products").find(queryBuilder);
    setAllProducts(productjson); //replace with "data" when fectch from BAckendless API
  };

  const toggleTable = () => {
    setshowInhaleTable(!showInhaleTable);
  };
  const toggleTopicalTable = () => {
    setShowTopicalTable(!showTopicalTable);
  };
  const toggleInjestTable = () => {
    setShowInjestTable(!showInjestTable);
  };

  const showTopicalTableOnly = () => {
    setShowTopicalTable(!showTopicalTable);
    setshowInhaleTable(false);
    setShowInjestTable(false);
  };

  const showInhaleTableOnly = () => {
    setShowTopicalTable(false);
    setshowInhaleTable(!showInhaleTable);
    setShowInjestTable(false);
  };

  const showInjestTableOnly = () => {
    setShowTopicalTable(false);
    setshowInhaleTable(false);
    setShowInjestTable(!showInjestTable);
  };

  const fetchProductData = async (consumptionMethod, setData, setDatatemp) => {
    try {
      let tempSizes = [];
      let tempTerpenes = [];
      let tempStrain = [];
      let tempStatus = [];
      // const queryBuilder = Backendless.DataQueryBuilder.create();
      // queryBuilder.setWhereClause(`CONSUMPTION_METHOD= '${consumptionMethod}'`);
      // const data = await Backendless.Data.of("Products").find(queryBuilder);
      const data = allProducts.filter(
        (item) => item.CONSUMPTION_METHOD === consumptionMethod
      );
      setData(data);
      setDatatemp(data);
      for (let i = 0; i < data.length; i++) {
        const temp = data[i];
        if (!sizes.includes(temp?.ITEM_SIZE)) {
          tempSizes.push(temp?.ITEM_SIZE);
        }
        if (!Terpene.includes(temp?.TERPENE_1_TYPE)) {
          tempTerpenes.push(temp?.TERPENE_1_TYPE);
        }
        if (!strain.includes(temp?.STRAIN_1)) {
          tempStrain.push(temp?.STRAIN_1);
        }
        if (!status.includes(temp?.LIVE_STATUS)) {
          tempStatus.push(temp?.LIVE_STATUS);
        }
      }
      setSizes((sizes) => [...sizes, ...tempSizes]);
      setTerpene((Terpene) => [...Terpene, ...tempTerpenes]);
      setStrain((Strain) => [...Strain, ...tempStrain]);
      setStatus((status) => [...status, ...tempStatus]);
    } catch (error) {
      console.error(`Error retrieving ${consumptionMethod} data:`, error);
    }
  };

  // calculating live products
  const calculateLiveProducts = () => {
    // console.log("allProducts =>", allProducts);
    let totalproducts = 0;
    let liveproducts = 0;
    allProducts.map((key) => {
      totalproducts++;
      if (key.LIVE_STATUS) {
        liveproducts++;
      }
    });
    setTotalProducts(totalproducts);
    setLiveProducts(liveproducts);
  };

  useEffect(() => {
    console.log("live/total => ", liveproducts, totalproducts);
    typeof window != undefined &&
      localStorage.setItem("totalproducts", JSON.stringify(totalproducts));
    typeof window != undefined &&
      localStorage.setItem("liveproducts", JSON.stringify(liveproducts));
  }, [liveproducts, totalproducts]);

  // clear filter logic
  useEffect(() => {
    console.log("clearFilters:", clearFilters);
    if (clearFilters) {
      console.log("Clearing filters...");
      setFetchedData(fetchedDataTemp);
      setFetchedTopicalData(fetchedTopicalDataTemp);
      setFetchedInjestlData(fetchedInjestDataTemp);
      setClearFilters(false);
    }
  }, [clearFilters]);

  useEffect(() => {
    // console.log("allProducts :", allProducts);
    calculateLiveProducts();
    fetchProductData("INHALE", setFetchedData, setFetchedDataTemp);
    fetchProductData(
      "TOPICAL",
      setFetchedTopicalData,
      setFetchedTopicalDataTemp
    );
    fetchProductData(
      "INGEST",
      setFetchedInjestlData,
      setFetchedInjestlDataTemp
    );
    setshowInhaleTable(true);
    setShowTopicalTable(true);
    setShowInjestTable(true);
  }, [allProducts]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const uniqueSizes = [...new Set(sizes)];
    const uniqueTerpene = [...new Set(Terpene)];
    const uniqueStrain = [...new Set(strain)];
    const uniqueStatus = [...new Set(status)];

    setsizedropdown(uniqueSizes, uniqueTerpene, uniqueStrain, uniqueStatus);
  }, [sizes]);

  useEffect(() => {
    if (filter.filterType === "Size") {
      const tempfetchedData = fetchedData.filter(
        (item) => item.ITEM_SIZE === filter.filterValue
      );
      // console.log("tempfetchedData----->" , tempfetchedData);
      setFetchedData(tempfetchedData);

      const temptopicalfilter = fetchedTopicalData.filter(
        (item) => item.ITEM_SIZE === filter.filterValue
      );
      setFetchedTopicalData(temptopicalfilter);

      const tempinjestfilter = fetchedInjestData.filter(
        (item) => item.ITEM_SIZE === filter.filterValue
      );
      setFetchedInjestlData(tempinjestfilter);
    } else if (filter.filterType === "Strain") {
      const tempfetchedData = fetchedData.filter(
        (item) => item.STRAIN_1 === filter.filterValue
      );
      setFetchedData(tempfetchedData);

      const temptopicalfilter = fetchedTopicalData.filter(
        (item) => item.STRAIN_1 === filter.filterValue
      );
      setFetchedTopicalData(temptopicalfilter);

      const tempinjestfilter = fetchedInjestData.filter(
        (item) => item.STRAIN_1 === filter.filterValue
      );
      setFetchedInjestlData(tempinjestfilter);
    } else if (filter.filterType === "Terpene") {
      const tempfetchedData = fetchedData.filter(
        (item) => item.TERPENE_1_TYPE === filter.filterValue
      );
      setFetchedData(tempfetchedData);

      const temptopicalfilter = fetchedTopicalData.filter(
        (item) => item.TERPENE_1_TYPE === filter.filterValue
      );
      setFetchedTopicalData(temptopicalfilter);

      const tempinjestfilter = fetchedInjestData.filter(
        (item) => item.TERPENE_1_TYPE === filter.filterValue
      );
      setFetchedInjestlData(tempinjestfilter);
    } else if (filter.filterType === "Status") {
      const tempfetchedData = fetchedData.filter(
        (item) => item.LIVE_STATUS === filter.filterValue
      );

      setFetchedData(tempfetchedData);

      const temptopicalfilter = fetchedTopicalData.filter(
        (item) => item.LIVE_STATUS === filter.filterValue
      );
      setFetchedTopicalData(temptopicalfilter);

      const tempinjestfilter = fetchedInjestData.filter(
        (item) => item.LIVE_STATUS === filter.filterValue
      );
      setFetchedInjestlData(tempinjestfilter);
    }

    if (filter.filterType === "Status") {
      if (filter.filterValue === true) {
        setShowTopicalTable(true);
        setshowInhaleTable(true);
        setShowInjestTable(true);
      } else if (filter.filterValue === false) {
        setShowTopicalTable(true);
        setshowInhaleTable(true);
        setShowInjestTable(true);
      }
    }
  }, [filter]);

  const onChangeCheckbox = (checked, id, item) => {
    // (X1.consumptionMethod !=X2.consumptionMethod  || X1.productName != X2.productName || x1.brand!=X2.brand)
    // console.log("Item --", item);
    // setIsChecked(checked);

    let checkedList = checkedIds;
    let productsList = products;
    if (checked) {
      if (productsList.length > 0) {
        let product = productsList[0];
        if (
          product.CONSUMPTION_METHOD != item.CONSUMPTION_METHOD ||
          product.PRODUCT_NAME != item.PRODUCT_NAME ||
          product.BRAND_NAME != item.BRAND_NAME
        ) {
          setError(true);
          return;
        }
      }
      checkedList.push(id);
      productsList.push(item);
    } else {
      let index = checkedIds.findIndex((elm) => elm == id);
      checkedList.splice(index, 1);
      productsList.splice(index, 1);
      setError(false);
    }
    setCheckedIds(JSON.parse(JSON.stringify(checkedList)));
    setProducts(JSON.parse(JSON.stringify(productsList)));
  };

  return (
    <>
      <div className="p-1 my-5">
        {/* Header */}

        <div className="row">
          <div className="col-md-4 col-lg-4 ">
            <div className="displayer-box p-3 d-flex justify-content-between">
              <div
                className="displayer-filter-icon"
                role="button"
                onClick={showTopicalTableOnly}
              >
                {showTopicalTable ? (
                  <IoClose size={30} />
                ) : (
                  <IoFilter size={30} />
                )}
              </div>
              <div className="mt-4">
                <span className="displayer-txt">
                  {fetchedTopicalData.length}
                </span>{" "}
                <br />
                <div className=" ">TOPICALS</div>
              </div>
              <div className="mt-4">
                <Image src={Topical} width={70} height={70} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 ">
            <div className="displayer-box p-3 d-flex justify-content-between ">
              <div
                className="displayer-filter-icon"
                role="button"
                onClick={showInhaleTableOnly}
              >
                {showInhaleTable ? (
                  <IoClose size={30} />
                ) : (
                  <IoFilter size={30} />
                )}
              </div>
              <div className="mt-4">
                <span className="displayer-txt">{fetchedData.length}</span>{" "}
                <br />
                <div className=" ">INHALE</div>
              </div>
              <div className="mt-4">
                <Image src={inhale} width={100} height={70} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 ">
            <div className="displayer-box p-3 d-flex justify-content-between ">
              <div
                className="displayer-filter-icon"
                role="button"
                onClick={showInjestTableOnly}
              >
                {showInjestTable ? (
                  <IoClose size={30} />
                ) : (
                  <IoFilter size={30} />
                )}
              </div>
              <div className="mt-4">
                <span className="displayer-txt">
                  {fetchedInjestData.length}
                </span>{" "}
                <br />
                <div className=" ">INJEST</div>
              </div>
              <div className="mt-4">
                <Image src={injest} width={70} height={70} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div
            className="d-flex justify-content-between th-text"
            style={{ padding: "10px" }}
          >
            <span className="my-auto">
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
              />
            </span>

            <span
              className="my-auto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div onClick={toggleSortOrder} style={{ cursor: "pointer" }}>
                PRODUCT_NAME
                {hovered && (
                  <>
                    {!sortOrder ? (
                      <IoClose size={10} />
                    ) : (
                      <IoFilter size={10} />
                    )}
                  </>
                )}
              </div>
            </span>

            {/* <span className="my-auto">PRODUCT_NAME</span> */}
            {/* <span className="my-auto table-content">{item.id}</span> */}
            <span className="my-auto">GTIN CODE</span>
            <span className="my-auto">SIZE</span>
            <span className="my-auto">BRAND</span>
            <span className="my-auto">SUBCATEGORY</span>
            <span className="my-auto">CLASS</span>
            <span className="my-auto">APP STATUS</span>
          </div>
          <div className="white-line"></div>
        </div>

        <div>
          <span className="italic-txt mb-4" onClick={toggleTable}>
            INHALE{" "}
            {showInhaleTable ? (
              <IoIosArrowUp size={30} className="mx-4" />
            ) : (
              <IoIosArrowDown size={30} className="mx-4" />
            )}
          </span>

          {showInhaleTable &&
            sortData(fetchedData).map((item, index) => (
              <div key={index} className="table-bg mt-4">
                <div className="d-flex justify-content-between position-relative">
                  <span className="my-auto">
                    <input
                      id={item?.objectId}
                      type="checkbox"
                      checked={checkedIds.includes(item?.objectId)}
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => {
                        onChangeCheckbox(
                          e.target.checked,
                          item?.objectId,
                          item
                        );
                        setAcckey("0");
                      }}
                    />
                  </span>
                  <span className="my-auto table-content">
                    {item.PRODUCT_NAME}
                  </span>
                  <span className="my-auto table-content">{item.SU_CODE}</span>
                  <span className="my-auto table-content">
                    {item.ITEM_SIZE}
                  </span>
                  <span className="my-auto table-content">
                    {item.BRAND_NAME}
                  </span>
                  <span className="my-auto table-content">
                    {item.SUBCATEGORY}
                  </span>
                  <span className="my-auto table-content">{item.CLASS}</span>
                  <span className="my-auto">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </span>
                  <span className="my-auto" onClick={() => setKebab(!kebab)}>
                    {" "}
                    <CiMenuKebab className="italic-txt" size={30} />{" "}
                  </span>
                  <div
                    className="kebab-menu"
                    style={{
                      display: kebab ? "block" : "none",
                    }}
                  >
                    <div className="kebab-item">Duplicate</div>
                    <div className="kebab-item">Archive</div>
                    {/* <div className="kebab-edit">Edit Shared Data</div>
                    <div className="kebab-restore">Restore</div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-5">
          <div>
            <span className="italic-txt mb-4" onClick={toggleTopicalTable}>
              TOPICAL{" "}
              {showTopicalTable ? (
                <IoIosArrowUp size={30} className="mx-4" />
              ) : (
                <IoIosArrowDown size={30} className="mx-4" />
              )}
            </span>

            {showTopicalTable &&
              sortData(fetchedTopicalData).map((item, index) => (
                <div key={index} className="table-bg mt-3">
                  <div className="d-flex justify-content-between">
                    <span className="my-auto">
                      <input
                        id={item?.objectId}
                        type="checkbox"
                        checked={checkedIds.includes(item?.objectId)}
                        style={{ width: "20px", height: "20px" }}
                        onChange={(e) =>
                          onChangeCheckbox(
                            e.target.checked,
                            item?.objectId,
                            item
                          )
                        }
                      />
                    </span>
                    <span className="my-auto table-content">
                      {item.PRODUCT_NAME}
                    </span>
                    {/* <span className="my-auto table-content">{item.id}</span> */}
                    <span className="my-auto table-content">
                      {item.SU_CODE}
                    </span>
                    <span className="my-auto table-content">
                      {item.ITEM_SIZE}
                    </span>
                    <span className="my-auto table-content">
                      {item.BRAND_NAME}
                    </span>
                    <span className="my-auto table-content">
                      {item.SUBCATEGORY}
                    </span>
                    <span className="my-auto table-content">{item.CLASS}</span>
                    <span className="my-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </span>
                    <span className="my-auto">
                      {" "}
                      <CiMenuKebab className="italic-txt" size={30} />{" "}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-5">
          <div>
            <span className="italic-txt mb-4" onClick={toggleInjestTable}>
              INJEST{" "}
              {showInjestTable ? (
                <IoIosArrowUp size={30} className="mx-4" />
              ) : (
                <IoIosArrowDown size={30} className="mx-4" />
              )}
            </span>

            {showInjestTable &&
              sortData(fetchedInjestData).map((item, index) => (
                <div key={index} className="table-bg mt-3">
                  <div className="d-flex justify-content-between">
                    <span className="my-auto">
                      <input
                        id={item?.objectId}
                        type="checkbox"
                        checked={checkedIds.includes(item?.objectId)}
                        style={{ width: "20px", height: "20px" }}
                        onChange={(e) =>
                          onChangeCheckbox(
                            e.target.checked,
                            item?.objectId,
                            item
                          )
                        }
                      />
                    </span>
                    <span
                      className="my-auto table-content"
                      style={{ wordWrap: "break-word" }}
                    >
                      {item.PRODUCT_NAME}
                    </span>
                    {/* <span className="my-auto table-content">{item.id}</span> */}
                    <span className="my-auto table-content">
                      {item.SU_CODE}
                    </span>
                    <span className="my-auto table-content">
                      {item.ITEM_SIZE}
                    </span>
                    <span className="my-auto table-content">
                      {item.BRAND_NAME}
                    </span>
                    <span className="my-auto table-content">
                      {item.SUBCATEGORY}
                    </span>
                    <span className="my-auto table-content">{item.CLASS}</span>
                    <span className="my-auto">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </span>
                    <span className="my-auto">
                      {" "}
                      <CiMenuKebab className="italic-txt" size={30} />{" "}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonDropdown;
