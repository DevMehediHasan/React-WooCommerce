import { isEmpty } from "lodash";
import { getSession } from "./session"

export const getaddOrViewCartConfig = () => {
    const config ={
        headers:{
            'X-Headless-CMS': true,
        },
    }

    const storedSession = getSession();

    if( !isEmpty(storedSession)){
        config.headers['x-wc-session'] = storedSession;
    }

    return config;
}