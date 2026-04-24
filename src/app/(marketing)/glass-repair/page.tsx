import type { Metadata } from "next";
import { SeoServicePage } from "@/components/templates/SeoServicePage";
import { servicePages } from "@/lib/seo/service-registry";
import { withCanonical } from "@/lib/seo/metadata-helpers";
import type { ServicePath } from "@/lib/seo/urls";

const id: ServicePath = "glass-repair";
export const metadata: Metadata = withCanonical(`/${id}`, servicePages[id].metadata);

export default function Page() {
  return <SeoServicePage data={servicePages[id]} />;
}
