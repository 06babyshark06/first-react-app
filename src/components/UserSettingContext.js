import { children, createContext, useState } from "react";

export const UserSettingContext = createContext({apiURL:"http://cat.api.com",maxItemsPerPage:10});
const UserSettingProvider = ({children}) => {
    const [userSetting, setUserSetting] = useState(null);
    const changeUserSetting =(newSetting) => {
        setUserSetting(newSetting);
    }
    return (
        <UserSettingContext.Provider value={{userSetting,changeUserSetting}}>{children}</UserSettingContext.Provider>
    )
}
export default UserSettingProvider;