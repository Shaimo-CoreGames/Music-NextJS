import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
    return (
        /* Parent Container (e.g., in your page.tsx or a wrapping section) */
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            {/* Your Component */}
            <div className="h-auto md:h-[40rem] w-full md:w-3/4 rounded-md shadow-lg flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

                <div className="p-4 relative z-10 w-full text-center">
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Master the art of music
                    </h1>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        Dive into our comprehensive music courses and transform your musical journey today.
                        Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                    </p>
                    <div className="mt-4">
                        <Link href={"/courses"}>
                            <Button className="dark:bg-black">
                                Explore Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection