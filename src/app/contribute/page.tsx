import Features from "@/components/Features";

export default function contribute() {
    return(
        <>
            <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/component/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-600 text-4xl md:text-5xl lg:text-6xl">
                            Collaborate, Code, and Contribute
                            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Openly</span>
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-500 mt-5">Introducing ResQsync, the open-source Android app that redefines connection and safety. Keep track of your loved ones in real time, fostering an unbreakable bond. In moments of distress, the SOS feature is your guardian angel. Elevate your peace of mind with ResQsync, where security meets connectivity. </p>
                    </div>

                    <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/ResQSync" target={"_blank"}>
                            Get started
                            <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}