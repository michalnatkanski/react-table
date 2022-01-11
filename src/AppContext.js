import { useState, useEffect, createContext, useContext } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { matureApps, betaApps, getTypes, getVersionApps } from './helpers/Helpers';


const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    //stores fetched data
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [appState, setAppState] = useState({
        apps: [],
        types: [],
        activeType: ''
    });

    useEffect(() => {
        const getData = () => {
            fetch('./dataset.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsLoading(false);
                    setError(null);
                    const types = getTypes(data);
                    setAppState({
                        apps: data,
                        types: types,
                        activeType: types[0]
                    });
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(err.message);
                })
        }
        getData()
    }, [isLoading, error])

    const setActiveType = (type) => setAppState({ ...appState, activeType: type })

    const getMatureApps = () => getVersionApps(appState.apps, matureApps).filter(app => app.type === appState.activeType);

    const getBetaApps = () => getVersionApps(appState.apps, betaApps).filter(app => app.type === appState.activeType);

    return (
        <>
            {isLoading && <h1>Loading data...</h1>}
            {error
                ? <ErrorBoundary error={error} /> :
                <AppContext.Provider
                    value={{
                        appState,
                        setActiveType,
                        getMatureApps,
                        getBetaApps
                    }}>
                    {children}
                </AppContext.Provider>
            }
        </>
    )
}

export default AppContextProvider;

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('Context must be used within Provider');
    }
    return context;
}