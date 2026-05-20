import { useEffect, useState } from "react";
import "./VisitCount.scss";

export default function VisitCount() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/count-public")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (data && typeof data.count === "number") setCount(data.count);
        else setError("invalid response");
      })
      .catch(() => setError("failed to load"))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="visit-count" aria-live="polite">
      {loading && <span className="muted">Loading visits…</span>}
      {error && <span className="error">{error}</span>}
      {count !== null && !loading && !error && (
        <span className="count">Visitors: {count.toLocaleString()}</span>
      )}
    </div>
  );
}
