"use client";

import { useEffect, useState } from "react";
import "./VisitCount.scss";

export default function VisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    // Record the visit first, then read the updated count.
    // Failures stay silent — the counter is a nice-to-have, not content.
    fetch("/api/visit", { method: "POST", keepalive: true })
      .catch(() => {})
      .then(() => fetch("/api/count-public"))
      .then((r) => r.json())
      .then((data) => {
        if (mounted && data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="visit-count">Visitors: {count.toLocaleString()}</p>
  );
}
