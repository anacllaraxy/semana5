import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

let db = null;

function getDb() {
  if (db) return db;
  const app = getApps().length
    ? getApps()[0]
    : initializeApp({ projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID });
  db = getFirestore(app);
  if (process.env.NEXT_PUBLIC_USE_EMULATOR === "true") {
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
  }
  return db;
}

export async function getFirestoreItems() {
  const q = query(collection(getDb(), "items"), orderBy("ordem"));
  const snap = await getDocs(q);
  return { status: "ok", items: snap.docs.map((d) => d.data().titulo) };
}
