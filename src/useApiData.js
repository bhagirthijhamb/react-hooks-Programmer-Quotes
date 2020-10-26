import { useEffect, useState } from 'react';

// create a custom hook for the API logic.
export const useApiData = (initialUrl) => {
    const [quoteData, setQuoteData] = useState(null);
    const [url, setUrl] = useState(initialUrl);
    // console.log(quoteData);

    // after the compoennt is rendered on the page, useEffect() runs
    useEffect(() => {
        // console.log('use effect yo...')
        // can wrap the fetchData in the useCallback() hook
        const fetchData = async () => {
            const response = await fetch(url);
            const parsed = await response.json();
            // console.log(parsed);
            setQuoteData(parsed);
            setUrl(undefined);
            // JSON.parse("thing": "thing")
            // wrap this in try catch block to handle errors
        }
        if(url){
            fetchData();
        }

        return () => {
            // clean up logic
        }
    }, [url])

    return [quoteData, setUrl]

}