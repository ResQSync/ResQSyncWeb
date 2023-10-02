"use client"
export default function Home() {
  return (
      <>
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 my-8">

              <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                  <div className="lg:col-span-3">
                      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
                          ResQSync</h1>
                      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Keeping Loved Ones Close, Wherever They Roam. Safety First, Always Free!
                      </p>

                      <div className="mt-6">
                          <a className="group inline-block bg-gray-900/[.05] hover:bg-gray-400/[.1] border border-gray-900/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
                              <p className="mr-2 inline-block text-black text-sm">
                                  Download
                              </p>
                              <span className="group-hover:bg-gray-400/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-900/[.075] font-semibold text-black text-sm">
                                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                              </span>
                          </a>
                      </div>

                  </div>


                  <div className="lg:col-span-4 mt-10 lg:mt-0">
                      <img className="w-full rounded-xl"
                           src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                           alt="Image Description"/>
                  </div>

              </div>

          </div>


      </>
  )
}
