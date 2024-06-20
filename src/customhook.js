import React, { useState, useEffect } from "react";

export function useHook (url){
    const [value, setValue] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setValue(data))
        .catch((error) => console.error('Error fetching data:')   
    )

    },[url]);

    return [value];

}