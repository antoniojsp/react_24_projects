import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false)
    const [enableFlags, setEnableFlags] = useState({})

    async function fetchFeatureFlags() {
        setLoading(true)
        try {
            const response = await featureFlagsDataServiceCall();
            setEnableFlags(response)
            // console.log(response);
        } catch (error) {
            // console.log(error);
            setLoading(false);
            throw new Error(error);
        }finally{
            setLoading(true);
        }
    }

    useEffect(() =>{
        fetchFeatureFlags();
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{enableFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}