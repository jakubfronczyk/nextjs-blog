/* eslint-disable react/no-unescaped-entities */
import Posts from "./components/Posts";

export default function Home() {
    return (
        <main className="px-6 mx-auto max-w-[1200px]">
            <p className="my-12 tex-3xl text-center dark:text-white">
                Hello, I'm <span className="text-sky-700">Jakub Fronczyk</span>
            </p>
            <Posts />
        </main>
    );
}
