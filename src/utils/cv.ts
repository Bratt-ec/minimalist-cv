import * as cvEN from "@cvEN"
import * as cvES from "@cvES"

export const dataCV = (path:string) => {
    if(path == '/en' || path == '/en/'  || path == 'en') return cvEN
    return cvES
}