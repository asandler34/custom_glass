import type { Metadata } from "next";
import { SeoLocationPage } from "@/components/templates/SeoLocationPage";
import { locationPages } from "@/lib/seo/location-registry";
import { withCanonical } from "@/lib/seo/metadata-helpers";
import type { LocationPath } from "@/lib/seo/urls";

const id: LocationPath = "haverhill-ma";
export const metadata: Metadata = withCanonical(`/${id}`, locationPages[id].metadata);

export default function Page() {
  return <SeoLocationPage data={locationPages[id]} />;
}
