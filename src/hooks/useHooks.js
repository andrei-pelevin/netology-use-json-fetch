import { useState, useEffect, useRef } from 'react';


export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(opts);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    const timestampRef = useRef()

    useEffect(() => { 
        const fetchData = async () => { 
            const timestamp = Date.now(); 
            timestampRef.current = timestamp; 
            setLoading(true); 
            
            try { 
                const response = await fetch(url); 
                if (!response.ok) { 
                    throw new Error(response.statusText); 
                } if (timestampRef.current === timestamp) { 
                    const data = await response.json(); 
                    setData(data); 
                } 
                
                setError(null); 
            } catch (e) { 
                setError(e); 
            } finally { 
                setLoading(false); 
            }
        }; 
        
        fetchData(); 
        const intervalId = setInterval(fetchData, 5000); 
        return () => clearInterval(intervalId); }, [url])

    return [{ data, isLoading, hasError }];
}
