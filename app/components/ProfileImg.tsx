import Image from "next/image";

const ProfileImg = () => {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 max-w-[200px] max-h-[200px] object-cover"
                src="/images/img2.png"
                width={200}
                height={200}
                alt="Jakub Fronczyk"
                priority={true}
            />
        </section>
    );
};

export default ProfileImg;
