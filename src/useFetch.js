import {useState, useEffect} from 'react';


//my custom hook
const useFetch=(url)=>{

    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(()=>{

        const abortCont = new AbortController();

        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal})
          .then(res => {
           if(!res.ok){
              throw Error('could not fetch the data for the resource');
           }
            return res.json();
          })
          .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err)=>{

            if(err.name === 'AbortError'){
               
            }
            else{
            setIsPending(false);
            setError(err.message);
            }
            
          })
        }, 0);

        return ()=>{abortCont.abort()}
       
       }, [url]);

       return {data, isPending, error}

}


export default useFetch;