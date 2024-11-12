"use client";

import { useState } from "react";
import SignInFlow from "../types"; // Ensure the path is correct
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card copy";

export const AuthScreen = () => {
    const [state, setState] = useState(SignInFlow.SIGN_IN); // Use the defined constant
    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
            </div>
        </div>
    );
};
