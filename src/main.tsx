/// <reference lib="dom" />
import { createRoot } from "react-dom/client";
import { IncidentParty } from "./components/incident-party";

const root = document.getElementById("root");

if (!root) throw new Error("Missing root element");

createRoot(root).render(<IncidentParty />);
