import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body style={{
        width: "20ch",
        marginInline: "auto",
        marginTop: "5rem",
        fontSize: "3rem",
      }}>
        <h1>{children}</h1>
        <ul>
          <li><Link href="/a">Page A</Link></li>
          <li><Link href="/b">Page B</Link></li>
          <li><Link href="/c">Page C</Link></li>
          <li><Link href="/d">Page D</Link></li>
        </ul>
      </body>
    </html>
  );
}
