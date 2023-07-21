import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ProfileImg from "./components/ProfileImg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jakub Fronczyk's blog",
    description: "Created by Jakub Fronczyk",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="dark"
        >
            <body className="min-h-screen dark:bg-black">
                <Navbar />
                <ProfileImg />
                {children}
            </body>
        </html>
    );
}
