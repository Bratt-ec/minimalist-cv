import * as cvEN from "@cvEN"
import * as cvES from "@cvES"

export const dataCV = (path:string) => {
    console.log("path == '/en'",path == '/en');
    let _dataCV = cvES
    if(path == '/en' ) _dataCV = cvEN
    return  _dataCV
}