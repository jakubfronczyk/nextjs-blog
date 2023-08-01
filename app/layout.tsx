import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

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

                <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
