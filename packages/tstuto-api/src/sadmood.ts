import { IMoodAPIResponse } from "./imoodapiresponse";

function sadMood(indicator: number): IMoodAPIResponse {
    return {
        indicator: indicator,
        mood: 'sad',
        text: 'I am not feeling well today :sad_face:'
    };
}

export { sadMood };