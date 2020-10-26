import { useEffect, useState } from "react"
import { useApiData } from './useApiData';

// Reach out to API, get some data, display on page
// When user clicks button, reach out to API again and get a new quote

export const RandomQuote = () => {
    // const stateArray = useState(null);
    // console.log(stateArray); // [null, function()]

    const initialUrl = 'https://programming-quotes-api.herokuapp.com/quotes/random';
    const [quoteData, setUrl] = useApiData(initialUrl);
    

    return (
        <div>
            <h2>Random Quote</h2>
            {quoteData &&
                <blockquote>
                    <p>{quoteData.en}</p>
                    <cite>{quoteData.author}</cite>
                </blockquote>
            }
            <button onClick={() => setUrl(initialUrl)}>Give me another</button>
        </div>
    )
}