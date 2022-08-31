import React, { useEffect, useState } from "react";
import axios from "axios";

function useSubscription() {
    const subscribe = ({ firstname = "", lastname = "", email = "", phone = "" }) => {
        const baseUrl = "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles";
        return axios.post(`${baseUrl}/newsletter`, {
            firstname,
            lastname,
            email,
            phone,
        });
    };
    return { subscribe };
}

export default useSubscription;