import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
    return (
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]
        flex items-center justify-center">

            {/* BOX */}
            <div className="h-full shadow-2xl shadow-purple-400 rounded-md flex flex-col md:flex-row 
	        md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">

                {/* IMAGE CONTAINER */}
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <Image src="/login.png" alt="" fill
                        className="object-cover" />
                </div>

                {/* FORM CONTAINER */}
                <div className="p-10 flex flex-col gap-8 md:w-1/2 bg-purple-100">

                    <h1 className="font-bold text-xl xl:text-3xl">
                        Welcome
                    </h1>

                    <p>Sign in with your social media account</p>

                    <button className="flex gap-4 p-4 ring-1 ring-orange-200 rounded-md">
                        <Image
                            src="/google.png"
                            alt="Google image"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Sign in with Google</span>
                    </button>

                    <button className="flex gap-4 p-4 ring-1 ring-blue-200 rounded-md">
                        <Image
                            src="/facebook.png"
                            alt="Facebook image"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Sign in with Facebook</span>
                    </button>

                    <p className="text-sm flex gap-2">
                        Have a problem?
                        <Link className="underline" href="/">
                            Contact us
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
