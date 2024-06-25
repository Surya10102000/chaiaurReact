import { useEffect , useState } from "react";

function useCurrrencyInfo(currency) {

    const [data, setData] = useState({})


    try {
        useEffect(() =>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            console.log(data);
        },[currency])

        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
    
}

export default useCurrrencyInfo