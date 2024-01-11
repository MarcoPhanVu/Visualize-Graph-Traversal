function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] == obj) {
            return true;
        }
    }

    return false;
}

function removeAllChilds(ele) {
    while (ele.hasChildNodes()) {
        ele.removeChild(ele.firstChild);
    }
}

function clearAllEle(list) {
    for (i = 0; i < list.length; i++) {
        list.pop();
    }
}