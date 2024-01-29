"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import arrow from "../../../public/SliderArrow.svg";
import Accordion from "react-bootstrap/Accordion";
import ProductInfo from "@/components/Home/ProductInfo";
import CommonDropdown from "@/components/Misc/CommonDropdown";
import Cannabinoid from "@/components/Home/Cannabinoid";
import TerpeneInfo from "@/components/Home/TerpeneInfo";
import RetailUnitInfo from "@/components/Home/RetailUnitInfo";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default function HomePage() {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(false);
  const [acckey, setAcckey] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [sizeArray, setSizearray] = useState([]);
  const [TerpeneList, setTerpeneList] = useState([]);
  const [strainList, setNewstrain] = useState([]);
  const [statusList, setStatuslist] = useState([]);
  const [selectedSize, setselectedSize] = useState([]);
  const [selectedStrain, setSelectedStrain] = useState([]);
  const [selectedTerpene, setselectedTerpene] = useState([]);
  const [SelectedStatus, setSelectedStatus] = useState([]);
  const [clearFilters, setClearFilters] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isTerpeneSelected, setIsTerpeneSelected] = useState(false);
  const [isStrainSelected, setIsStrainSelected] = useState(false);
  const [isStatusSelected, setIsStatusSelected] = useState(false);

  const [filter, setFilter] = useState({
    filterType: "",
    filterValue: [],
  });

  const setStrainFilter = async (strain) => {
    setSelectedStrain(strain);
    setIsStrainSelected(true);
    setFilter({
      filterType: "Strain",
      filterValue: strain,
    });
  };

  const clearStrainSelection = () => {
    setClearFilters(true);
    setIsStrainSelected(false);
  };
  const setStatusFilter = async (status) => {
    setSelectedStatus(status);
    setIsStatusSelected(true);
    setFilter({
      filterType: "Status",
      filterValue: status,
    });
  };

  const clearStatusSelection = () => {
    setClearFilters(true);
    setIsStatusSelected(false);
  };

  const setTerpeneFilter = async (terpene) => {
    setselectedTerpene(terpene);
    setIsTerpeneSelected(true);
    setFilter({
      filterType: "Terpene",
      filterValue: terpene,
    });
  };

  const clearTerpeneSelection = () => {
    setClearFilters(true);
    setIsTerpeneSelected(false);
  };

  const setsizedropdown = (size, TerpeneList, StrainList, statusList) => {
    const newArray = [...size];
    const newTepeneList = [...TerpeneList];
    const newStrainList = [...StrainList];
    const newStatuslist = [...statusList];
    console.log("newStatuslist--->", newStatuslist);

    setSizearray(newArray);
    setTerpeneList(newTepeneList);
    setNewstrain(newStrainList);
    setStatuslist(newStatuslist);
  };

  const setfilterfuncion = async (size) => {
    setselectedSize(size);
    setIsSizeSelected(true);
    setFilter({
      filterType: "Size",
      filterValue: size,
    });
  };

  const clearSizeSelection = () => {
    setClearFilters(true);
    setIsSizeSelected(false);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-8">
          <div
            className="position-relative px-3"
            style={{ display: search ? "block" : "none" }}
          >
            <BsSearch size={20} className="search-icon" />
            <input
              id="search"
              className="input-field-long-search"
              placeholder="Search"
              type="text"
              onChange={() => ""}
            />

            <IoClose
              size={20}
              className="search-close"
              role="button"
              onClick={() => setSearch(false)}
            />
          </div>
          <div className="d-flex gap-3 overflow-x-visible">
            <div className="">
              <div
                className="btn btn-icon"
                role="button"
                onClick={() => setSearch(!search)}
                style={{ display: !search ? "block" : "none" }}
              >
                {" "}
                <BsSearch size={20} />
              </div>
            </div>
            <div
              className="gap-3"
              style={{ display: !search ? "flex" : "none" }}
            >
              <div className="">
                <Dropdown>
                  {isSizeSelected ? (
                    <div
                      className="dd-white"
                      onClick={clearSizeSelection}
                      style={{ cursor: "pointer" }}
                    >
                      {selectedSize} <IoClose size={20} />
                    </div>
                  ) : (
                    <Dropdown.Toggle className="dd-white">Size</Dropdown.Toggle>
                  )}

                  <Dropdown.Menu>
                    {sizeArray?.map((size, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setfilterfuncion(size)}
                      >
                        {size}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="">
                <Dropdown>
                  {isStatusSelected ? (
                    <div
                      className="dd-white text_wrap"
                      onClick={clearStatusSelection}
                      style={{ cursor: "pointer" }}
                    >
                      {!SelectedStatus
                        ? "Deactivated in Vaster"
                        : "Live in Vaster"}
                      <IoClose size={20} />
                    </div>
                  ) : (
                    <Dropdown.Toggle className="dd-white">
                      Status
                    </Dropdown.Toggle>
                  )}

                  <Dropdown.Menu>
                    {statusList?.map((status, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setStatusFilter(status)}
                      >
                        {status ? " Live in Vaster" : "Deactivated in Vaster"}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="">
                <Dropdown>
                  {isTerpeneSelected ? (
                    <div
                      className="dd-white text_wrap"
                      onClick={clearTerpeneSelection}
                      style={{ cursor: "pointer" }}
                    >
                      {selectedTerpene} <IoClose size={20} />
                    </div>
                  ) : (
                    <Dropdown.Toggle className="dd-white">
                      Terpene
                    </Dropdown.Toggle>
                  )}
                  <Dropdown.Menu>
                    {TerpeneList.map((list, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setTerpeneFilter(list)}
                      >
                        {list}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="">
                <Dropdown>
                  {isStrainSelected ? (
                    <div
                      className="dd-white text_wrap"
                      onClick={clearStrainSelection}
                      style={{ cursor: "pointer" }}
                    >
                      {selectedStrain} <IoClose size={20} />
                    </div>
                  ) : (
                    <Dropdown.Toggle className="dd-white">
                      Strain
                    </Dropdown.Toggle>
                  )}

                  <Dropdown.Menu>
                    {strainList.map((strain, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setStrainFilter(strain)}
                      >
                        {strain}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="">
            <CommonDropdown
              checkedIds={checkedIds}
              setCheckedIds={setCheckedIds}
              products={products}
              setProducts={setProducts}
              setError={setError}
              setsizedropdown={setsizedropdown}
              filter={filter}
              setAcckey={setAcckey}
              clearFilters={clearFilters}
              setClearFilters={setClearFilters}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-bar">
            <div className="mt-2 d-flex justify-content-between gap-2">
              <div className="w-100">
                {checkedIds.length === 0 ? (
                  <div className="special-input">Product Name</div>
                ) : (
                  <div className="special-input">
                    {error
                      ? "ALERT"
                      : products.find(
                          (product) => product.id === checkedIds[0].PRODUCT_NAME
                        ).PRODUCT_NAME}
                  </div>
                )}
              </div>
              <div className="btn btn-special">
                <Image alt="arrow" src={arrow} width={48} />
              </div>
            </div>
            <div className="" style={{ display: !error ? "block" : "none" }}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Product Information</Accordion.Header>
                  <Accordion.Body>
                    <ProductInfo
                      checkedIds={checkedIds}
                      products={products}
                      setProducts={setProducts}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>CANNABINOID INFORMATION</Accordion.Header>
                  <Accordion.Body>
                    <Cannabinoid
                      checkedIds={checkedIds}
                      products={products}
                      setProducts={setProducts}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Terpene Information</Accordion.Header>
                  <Accordion.Body>
                    <TerpeneInfo
                      checkedIds={checkedIds}
                      products={products}
                      setProducts={setProducts}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Retail Unit Information</Accordion.Header>
                  <Accordion.Body>
                    <RetailUnitInfo
                      checkedIds={checkedIds}
                      products={products}
                      setProducts={setProducts}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="" style={{ display: error ? "block" : "none" }}>
            <div className="bg-white p-4">
              <div className="error-box">
                <AiOutlineExclamationCircle size={25} />
                <div className="mt-3 err-up-text">
                  YOU HAVE TWO DIFFERENT PRODUCTS SELECTED
                </div>
                <p className="mt-2 err-low-text">
                  Select one product to edit information.
                  <br></br>or <br></br>
                  Select two products with enough shared information to edit two
                  items at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
