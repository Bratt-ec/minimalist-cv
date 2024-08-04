import * as cvEN from "@cvEN"
import * as cvES from "@cvES"

export const dataCV = (path:string) => {
    let _dataCV = cvES
    if(path == '/en') _dataCV = cvEN
    return  _dataCV
}