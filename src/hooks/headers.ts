import {headers} from "next/headers";

export default function getUserViewport() {
    const reqHeaders = headers()
    const viewport = reqHeaders.get('viewport')
    console.log(viewport)
    return viewport;
}
