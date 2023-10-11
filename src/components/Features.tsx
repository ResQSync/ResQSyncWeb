import Image from "next/image";

export default function Features(){
    return(<>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">

                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto ">
                        <svg className="w-8 h-8 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00c6ff" viewBox="0 0 100 100">
                            <path d="M54.8,80.4V96c0,1,0.8,2,2,2s2-1,2-2V80.4c0-1-0.8-2-2-2S54.8,79.4,54.8,80.4z"
                                  fill="#0695ed" className="color000000 svgShape"></path>
                            <path d="M10.2,31c-0.6,2.2-0.2,4.6,1.6,6L26,50.8c0.4,0.4,0.6,1,0.6,1.8L23,72c-0.4,1.8,0.2,3.6,1.4,4.8c1.8,2,4.8,2.8,7.4,1.4
		L49.2,69c0.6-0.4,1.2-0.4,1.8,0l17.4,9.2c2.8,1.4,5.6,0.6,7.4-1.4c1.2-1.4,1.6-3,1.4-4.8l-3.4-19.4c0-0.6,0.2-1.2,0.6-1.8L88.6,37
		c1.6-1.6,2.2-4,1.6-6c-0.8-2.2-2.6-3.8-4.8-4l-19.8-3c-0.6,0-1.2-0.4-1.4-1L55.4,5.4C54.4,3.2,52.2,2,50,2s-4.4,1.2-5.4,3.4L36,23
		c-0.2,0.6-0.8,1-1.4,1L15,26.8C12.8,27.2,10.8,28.8,10.2,31z" fill="#00c6ff"
                                  className="color000000 svgShape"></path>
                            <path d="M41.2,79v13.2c0,1,0.8,2,2,2s2-1,2-2V79c0-1.2-0.8-2-2-2C42.2,77,41.2,77.8,41.2,79z"
                                  fill="#0695ed" className="color000000 svgShape"></path>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">Completely free</h3>
                        <p className="mt-1 text-gray-600">Without any ads, no surveillance, no nonsense. Open Source because we have nothing to hide.</p>
                    </div>
                </div>


                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto ">
                        <svg className="w-8 h-8 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00c6ff" viewBox="0 0 24 24">
                            <path fill="url(#paint0_linear_1233_4675)" fillRule="evenodd"
                                  d="M11 2C8.51472 2 6.5 4.01472 6.5 6.5V8C5.11929 8 4 9.11929 4 10.5V19.5C4 20.8807 5.11929 22 6.5 22H16.5C17.8807 22 19 20.8807 19 19.5V10.5C19 9.11929 17.8807 8 16.5 8V6.5C16.5 4.01472 14.4853 2 12 2H11ZM14.5 8V6.5C14.5 5.11929 13.3807 4 12 4H11C9.61929 4 8.5 5.11929 8.5 6.5V8H14.5ZM7.5 10H15.5H16.5C16.7761 10 17 10.2239 17 10.5V19.5C17 19.7761 16.7761 20 16.5 20H6.5C6.22386 20 6 19.7761 6 19.5V10.5C6 10.2239 6.22386 10 6.5 10H7.5ZM11 13.5C11 13.2239 11.2239 13 11.5 13C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5ZM13.7117 14.6666C13.8958 14.3183 14 13.9213 14 13.5C14 12.1193 12.8807 11 11.5 11C10.1193 11 9 12.1193 9 13.5C9 13.9213 9.10422 14.3183 9.2883 14.6666C8.21041 15.3832 7.5 16.6086 7.5 18C7.5 18.5523 7.94772 19 8.5 19H14.5C15.0523 19 15.5 18.5523 15.5 18C15.5 16.6086 14.7896 15.3832 13.7117 14.6666ZM11.5 16C10.7597 16 10.1134 16.4022 9.76756 17H13.2324C12.8866 16.4022 12.2403 16 11.5 16Z"
                                  clipRule="evenodd"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1233_4675" x1="11.5" x2="11.5" y1="2" y2="22"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00c6ff" className="stopColorf857a6 svgShape"></stop>
                                    <stop offset="1" stopColor="#58bfff" className="stopColorff585a svgShape"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">Data Privacy and Safety</h3>
                        <p className="mt-1 text-gray-600">We respect data privacy, never misuse data, and maintain transparency by making all our code public, ensuring the safety of user information.</p>
                    </div>
                </div>



                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto">
                        <svg className="w-8 h-8 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                            <g transform="translate(543.5 -1175.894)" fill="#000000" className="color000000 svgShape">
                                <path fill="#00c6ff"
                                      d="M-515.5 1189.171c0 6.229-11.5 17.722-11.5 17.722s-11.5-11.493-11.5-17.722c0-6.228 5.149-11.278 11.5-11.278s11.5 5.05 11.5 11.278z"
                                      color="#000" overflow="visible"
                                      className="colorf05542 svgShape"></path>
                                <circle cx="-527" cy="1189.393" r="5" fill="#52abe1" color="#000" overflow="visible"
                                        className="colorb0e152 svgShape"></circle>
                                <circle cx="-527" cy="1189.393" r="6.5" fill="#0695ed" color="#000" overflow="visible"
                                        className="color25b39e svgShape"></circle>
                            </g>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">Instant Location Updates</h3>
                        <p className="mt-1 text-gray-600">Get ready to streamline your journey with real-time location updates. You'll never lose sight of what matters most. Let's start tracking!</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto">
                        <svg className="w-8 h-8 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 64 64">
                            <path fill="#00c6ff"
                                  d="M31.33 23.48a7.06 7.06 0 0 0-4.79 1.87 1.48 1.48 0 0 0-.94-.35 8.13 8.13 0 0 1-3.11-.59 12.28 12.28 0 0 0 2.48-6.3h.66a1.5 1.5 0 0 0 0-3h-4.29v-2.33a1.5 1.5 0 1 0-3 0v2.34h-4.26a1.5 1.5 0 0 0 0 3h7.84A9 9 0 0 1 20 22.67a9.32 9.32 0 0 1-1.76-2.93 1.5 1.5 0 1 0-2.82 1 12.38 12.38 0 0 0 2.11 3.63 9.28 9.28 0 0 1-3.42.6 1.5 1.5 0 1 0 0 3A11.3 11.3 0 0 0 20 26.54 10.42 10.42 0 0 0 24.71 28a7 7 0 0 0-.51 2.63v1.12H13.77a1.5 1.5 0 0 0-1.14.52 1.47 1.47 0 0 0-.34 1.21c0 .1.19 1.23.53 2.82a1 1 0 0 1-1.57 1C8.1 35 4.74 32.2 3.69 30.23a1.82 1.82 0 0 0-.15-.23 4.07 4.07 0 0 1-.74-2.35V11.52a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13v12Zm29.87 7.13V46.7a4 4 0 0 1-.74 2.35 1.17 1.17 0 0 0-.15.27c-1 2-4.41 4.77-7.56 7.09a1 1 0 0 1-1.57-1c.34-1.6.52-2.73.53-2.83a1.49 1.49 0 0 0-1.48-1.73h-18.9a4.13 4.13 0 0 1-4.13-4.15V30.61a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13Zm-10.42 14-1.73-4.31-3.42-8.56a1.3 1.3 0 0 0-.08-.17l-.06-.1-.09-.12-.09-.1-.1-.09-.13-.1L45 31l-.16-.09a.38.38 0 0 0-.1 0l-.16-.05H44l-.17.05a.38.38 0 0 0-.1 0l-.15.09-.11.05-.12.1-.1.09-.09.1-.1.12s0 .07-.05.1l-.09.17-3.5 8.57-1.73 4.32a1.51 1.51 0 0 0 .84 2 1.55 1.55 0 0 0 .56.11 1.51 1.51 0 0 0 1.39-1l1.34-3.35h4.84L48 45.73a1.49 1.49 0 0 0 1.39 1 1.54 1.54 0 0 0 .55-.11 1.5 1.5 0 0 0 .84-2ZM43 39.38h2.44l-1.22-3Z"
                                  className="color222222 svgShape"></path>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">Multilingual</h3>
                        <p className="mt-1 text-gray-600 ">Will be available soon in different community-contributed languages, ensuring multilingual accessibility.</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto">
                        <svg className="w-8 h-8 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                            <path
                                d="M0 18c0-6 3-8 3-9-.5-2-.5-5 0-6 3 0 6 2 7 3 2-1 4-1 6-1s4 0 6 1c1-1 4-3 7-3 .5 1 .5 4 0 6 0 1 3 3 3 9 0 7-2 12-16 12S0 25 0 18m3 2c0 4 1 8 13 8s13-4 13-8-1-6-13-6-13 2-13 6m5 1a1.5 2.5 0 0 0 5 0 1.5 2.5 0 0 0-5 0m16 0a1.5 2.5 0 0 0-5 0 1.5 2.5 0 0 0 5 0z"
                                fill="#00c6ff" className="color000000 svgShape"></path>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">Empower Open Source</h3>
                        <p className="mt-1 text-gray-600 ">Contribute to our project by adding your own new features or fixing bugs through open source.</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-300 rounded-full mx-auto">
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00c6ff" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold text-gray-800">SOS Emergency Alerts</h3>
                        <p className="mt-1 text-gray-600 ">Violent shaking triggers SMS alerts, or you can call emergency contacts directly.</p>
                    </div>
                </div>

            </div>
        </div>

    </>);
}
