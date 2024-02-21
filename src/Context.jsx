import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState('titanic');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    const getmovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setError({
                    show: false, 
                    msg: ""
                    })
                setIsLoading(false);
                setMovies(data.Search);
            }
            else {
                setError({
                     show: true, 
                     msg: data.Error
                     })
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 1000);
    
        // Clear the timeout when the `query` changes
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            getmovies(`http://www.omdbapi.com/?s=${debouncedQuery}&apikey=ca025858`);
        }
    }, [debouncedQuery]);
    
    return <AppContext.Provider value={{ isLoading, isError, movies, query, setQuery }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext }
