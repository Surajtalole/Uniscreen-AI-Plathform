"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat =()=>{
    useEffect(()=>{
        Crisp.configure("46ba2958-d6d3-4389-9e6e-1eaac451f1c7");
      
    },[]);

    return null;
}