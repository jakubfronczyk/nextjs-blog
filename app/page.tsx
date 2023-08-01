import Posts from "./components/Posts";
import ProfileImg from "./components/ProfileImg";

export const revalidate = 10;

export default function Home() {
    return (
        <div className="mx-auto">
            <ProfileImg />
            <p className="my-12 tex-3xl text-center dark:text-white">
                Hello, I'm <span className="text-sky-700">Jakub Fronczyk</span>
            </p>
            {/* @ts-expect-error Server Component */}
            <Posts />
        </div>
    );
}
