import { IMoodAPIResponse } from "./imoodapiresponse";

function happyMood(indicator: number): IMoodAPIResponse {
    return {
        indicator: indicator,
        mood: 'happy',
        text: 'I am feeling glad today!'
    };
}

export { happyMood };