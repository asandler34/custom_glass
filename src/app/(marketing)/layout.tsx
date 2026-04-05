import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-body flex min-h-full flex-1 flex-col">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
