import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </>
  );
};

export default Layout;
