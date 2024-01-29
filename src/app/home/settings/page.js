"use client";
import AccountTab from "@/components/SettingsTabs/AccountTab";
import GeneralTab from "@/components/SettingsTabs/GeneralTab";
import HistoryTab from "@/components/SettingsTabs/HistoryTab";
import Link from "next/link";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BiSolidChevronLeftCircle } from "react-icons/bi";

export default function Settings() {
  return (
    <div className="ms-4">
      <div className="d-flex gap-3">
        <Link className="tdn" href="/home">
          <BiSolidChevronLeftCircle
            size={30}
            role="button"
            className="text-deep"
          />
        </Link>
        <div className="fw-500 fs-20">Settings</div>
      </div>

      <div className="setting-tabs">
        <Tabs variant="underline" defaultActiveKey="general">
          <Tab eventKey="general" title="General">
            <GeneralTab />
          </Tab>
          <Tab eventKey="accounts" title="Accounts">
            <AccountTab />
          </Tab>
          <Tab eventKey="history" title="Product History">
            <HistoryTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
