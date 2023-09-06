import { Header } from "./components/Headers"
import { Footer } from "./components/Footer"
import "./globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
return (
    <html lang="eng">
        <body >
            <Header />
            <p className="bg-purple"> Salut Layout </p>
            {children}

            <Footer />
        </body>

    </html>
)
} 