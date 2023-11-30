import ThemeRegistry from "../theme/ThemeRegistry";
import { lexed } from "../font";

import "../styles/globals.css";

export const metadata = {
  title: "Divya Janga",
  description: "Clenet Technologies Front-End Assignmnet",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexed.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
export default RootLayout;
