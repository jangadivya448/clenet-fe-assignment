import Navbar from "@/components/layouts/navbar";
import Tabs from "@/components/layouts/tabs";
function NavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      <Tabs />
      {children}
    </>
  );
}

export default NavbarLayout;
