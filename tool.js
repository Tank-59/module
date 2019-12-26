// 获取地址参数
export function getParameters(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return "";
}

/**
 * 数组元素替换位置  caoyanqi
 * @param arr  数组
 * @param index1 元素下标
 * @param index2
 * @returns {*}
 */
export function arrayInterchange(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}
