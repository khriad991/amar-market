import './globals.css'
import NextTopLoader from "nextjs-toploader";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/css/main.css"
import "@/assets/css/animate.min.css"
import "react-loading-skeleton/dist/skeleton.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      {children}
      <NextTopLoader color="#123456"  height={3}/>
      </body>
    </html>
  )
}
