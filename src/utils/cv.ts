import * as cvEN from "@cvEN"
import * as cvES from "@cvES"

export const dataCV = (path:string) => {
    if(path.includes('en')) return cvEN
    return cvES
}