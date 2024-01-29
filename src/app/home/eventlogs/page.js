"use client";
import React, { useState, useEffect } from "react";
import Backendless from "backendless";

export default function EventLogs() {
  const [logs, setLogs] = useState([]);

  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY
  );

  async function retrieveLogs() {
    await Backendless.Data.of("Event_Logs")
      .find()
      .then((logresult) => {
        setLogs(logresult);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log("logs :", logs);
  }, [logs]);

  useEffect(() => {
    retrieveLogs();
  }, []);

  // console.log("logs-->", logs);

  return (
    <div className="container">
      {logs.length > 0 &&
        logs.map((key) => (
          <div className="d-flex gap-3">
            <div className="">{key.created}</div>
            <div className="">{key.event_message}</div>
            <div className="">{key.ownerId}</div>
          </div>
        ))}
    </div>
  );
}
