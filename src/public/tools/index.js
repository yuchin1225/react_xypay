//排除特殊文字
const strReplace = (str) => {
    const pattern = /[`~!@#$^&*()+=\-_|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    return str.replace(pattern, "");
}

export {
    strReplace
}