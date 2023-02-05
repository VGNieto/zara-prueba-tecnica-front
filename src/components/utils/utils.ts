import { Podcast } from "../types/types"

 export const formatPodcastFromApi = (podcast: any): Podcast => {
    return {
        id: podcast.id.attributes["im:id"],
        image: podcast["im:image"][2].label,
        author: podcast["im:artist"].label,
        description: podcast.summary.label,
        title: podcast.title.label,
    }   

}

export const createCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

 export const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

 export const eraseCookie = (name: string) => {   
    document.cookie = name + '=; Max-Age=-99999999;';  
}


 export const checkCookieExpiration = (name: string) => {
    const cookie = getCookie(name);
    if (cookie) {
        const date = new Date();
        const timestamp = getCookie("timestamp");
        if (timestamp) {
            const time = date.getTime() - parseInt(timestamp);
            if (time > 86400000) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return true;
    }
}
 