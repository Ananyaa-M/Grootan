import { useState,useEffect } from "react";

const useFetch = (url) => {
    //const abortCont = new AbortController();
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [ispending,setIsPending] = useState(true);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('No Such Resources');
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err=>{
            if(err.name === 'AbortError'){
                console.log('Aborted');
            }else{
                setError(err.message);
                setIsPending(false);
            }
        });
        //return () => abortCont.abort();
    },[url]);
    return [data,ispending,error];
}
 
export default useFetch;