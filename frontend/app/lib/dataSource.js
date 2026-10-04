export async function getHealth() {
  const source = process.env.NEXT_PUBLIC_DATA_SOURCE || "api";
  if (source === "firestore") {
    const { getFirestoreItems } = await import("./firestore");
    return getFirestoreItems();
  }
  const res = await fetch("/api/health/");
  return res.json();
}
