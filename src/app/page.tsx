import type { Metadata } from "next";
import ECG from "./ECG";
import { withCanonical } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = withCanonical("/", {
  title: "Custom Frameless Showers & Glass | Haverhill MA | Exquisite Custom Glass",
  description:
    "Haverhill-based custom frameless shower doors, glass railings, mirrors, and partitions. Serving North Shore MA, Boston, Portsmouth NH, and southern NH. Request a free estimate.",
});

export default function Home() {
  return <ECG />;
}

