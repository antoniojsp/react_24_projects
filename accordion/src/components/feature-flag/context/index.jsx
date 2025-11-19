import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnableFlags] = useState({})

    async function fetchFeatureFlags() {
        setLoading(true)
        try {
            const response = await featureFlagsDataServiceCall();
            setEnableFlags(response)
        } catch (error) {
            throw  error;
        }finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchFeatureFlags();
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}