const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function postLocation(payload) {
  const res = await fetch("http://localhost:8000/visitors/capture_location", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Server error: ${res.status} - ${errorText}`);
  }

  return res.json();
}


/**
 * Log simple page visits
 */
export async function logPageVisit(payload) {
  try {
    const url = `${API_BASE}/visitors/page_visit`;   // ✅ not /page_visit
    console.log("➡️ Logging page visit:", url, payload);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Backend error:", res.status, errorText);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("✅ Page visit logged:", data);
    return data;
  } catch (err) {
    console.error("🚨 API call failed:", err.message);
    throw err;
  }
}
