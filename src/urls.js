import { API_KEY } from "./Constants/Constants";

export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
export const original = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
