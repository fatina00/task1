/**
 * copy
 */
// �ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr) {
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]";
}

// �ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    return typeof fn === "function";
}

//--------------------------------------------------
// ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ����������
// �����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object���󡣲��������������������
function cloneObject(src) {
    var o; //result
    if (Object.prototype.toString.call(src) === "[object Array]") {
        o = []; //�ж��Ƿ������飬������ʼֵ
    } else {
        o = {};
    }
    for (var i in src) { //�����������
        if (src.hasOwnProperty(i)) { //�ų��̳�����
            if (typeof src[i] === "object") {
                o[i] = cloneObject(src[i]); //�ݹ鸳ֵ
            } else {
                o[i] = src[i]; //ֱ�Ӹ�ֵ
            }
        }
    }
    return o;
}

//--------------------------------------------------------------
// ���������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�غ������
function uniqArray(arr) {
    var newArr = []; //����������
    for (var i in arr) { //����������
        if (newArr.indexOf(arr[i]) == -1) { //����������в����ڵ�ǰԪ��
            newArr.push(arr[i]); //�������м��뵱ǰԪ��
        }
    }
    return newArr;
}


// �м���ͬѧ��������
// ʵ��һ���򵥵�trim����������ȥ��һ���ַ�����ͷ����β���Ŀհ��ַ�
// �ٶ��հ��ַ�ֻ�а�ǿո�Tab
// ��ϰͨ��ѭ�����Լ��ַ�����һЩ�����������ֱ�ɨ���ַ���strͷ����β���Ƿ��������Ŀհ��ַ�������ɾ�����ǣ���󷵻�һ�����ȥ�����ַ���
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //��ͷ�����ַ���
        if (str.charAt(i) != " " && str.charAt(i) != "\t") { //����Ϊ�յ�ʱ��
            break; //����ѭ��
        }
    }
    for (j = str.length - 1; j >= 0; j--) {
        if (str.charAt(j) != " " && str.charAt(j) != "\t") { //����Ϊ�յ�ʱ��
            break; //����ѭ��
        }
    }
    return str.slice(i, j + 1); //�������ַ���
}

// �ܶ�ͬѧ�϶���������Ĵ��뿴����ȥ������������������ʵ��һ��trim
// ���ַ���ͷβ���пո��ַ���ȥ��������ȫ�ǰ�ǿո�Tab�ȣ�����һ���ַ���
// ����ʹ��һ�м���������ʽ��ɸ���Ŀ
function trim(str) {
    if (str.length != -1) {
        return str.replace(/^\s+|\s+$/g, '');
        //ƥ�俪ͷ�ͽ�β�Ŀհ��ַ�����ȫ��ƥ��
    }
}

/*
 * ��ȥ�����еĿ�Ԫ��
 */
function deleteBlank(arr) {
    var arr2 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].match(/\s+/) || arr[i] === "") {
            continue;
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
function each(arr, fn) {
    for (var i in arr) {
        fn(arr[i], i);
    }
}



// ��ȡһ�����������һ��Ԫ�ص�����������һ������
function getObjectLength(obj) {
    return Object.keys(obj).length;
}



//---------------------------------------------------------
// �ж��Ƿ�Ϊ�����ַ
function isEmail(emailStr) {
    var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
    return pattern.test(emailStr);
}

// �ж��Ƿ�Ϊ�ֻ���
function isMobilePhone(phone) {
    var pattern = /^(\+\d{1,4})?\d{7,11}$/;
    return pattern.test(phone);
}



//-----------------------------------------------------------
// Ϊelement����һ����ʽ��ΪnewClassName������ʽ
function addClass(element, newClassName) {
    var oldClassName = element.className; //��ȡ�ɵ���ʽ��
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// �Ƴ�element�е���ʽoldClassName
function removeClass(element, oldClassName) {
    var originClassName = element.className; //��ȡԭ�ȵ���ʽ��
    var pattern = new RegExp("\\b" + oldClassName + "\\b"); //ʹ�ù��캯�����춯̬��������ʽ
    element.className = trim(originClassName.replace(pattern, ''));
}

// �ж�siblingNode��element�Ƿ�Ϊͬһ����Ԫ���µ�ͬһ����Ԫ�أ�����boolֵ
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// ��ȡelement�������������ڵ�λ�ã�����һ������{x, y}
function getPosition(element) {
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}



//---------------------------------------------------------
// ʵ��һ���򵥵�Query
//���ѡ�����е��ѵ����ˣ�����һЩ���Ͼ���˼·Ӧ�����£�
//1.�������#��ֱ�Ӵ�#��ʼ����
//2.�������tagֱ���ҵ����е�tagȻ������
//3.��ʽ�࣬���ԣ��Ӻ���ǰ�飬�õ������еĸ��ڵ����ƣ�ȥɸѡƥ��
//���ϵ������е�̫���ӣ��һ�����һ���򵥵�����ƥ��ɡ�
function $(selector) {

    if (!selector) {
        return null;
    }

    if (selector == document) {
        return document;
    }

    selector = trim(selector);
    if (selector.indexOf(" ") !== -1) { //�����ڿո�
        var selectorArr = selector.split(/\s+/); //�������

        var rootScope = myQuery(selectorArr[0]); //��һ�εĲ��ҷ�Χ
        var i = null;
        var j = null;
        var result = [];
        //ѭ��ѡ�����е�ÿһ��Ԫ��
        for (i = 1; i < selectorArr.length; i++) {
            for (j = 0; j < rootScope.length; j++) {
                result.push(myQuery(selectorArr[i], rootScope[j]));
            }
            // rootScope = result;
            // Ŀǰ�����������bug
        }
        return result[0][0];
    } else { //ֻ��һ����ֱ�Ӳ�ѯ
        return myQuery(selector, document)[0];
    }
}

/**
 * ���һ�����ݲ��ҽ�� success
 * @param  {String} selector ѡ��������
 * @param  {Element} root    ���ڵ�Ԫ��
 * @return {NodeList����}    �ڵ��б������Ƕ���ڵ�Ҳ������һ��
 */
function myQuery(selector, root) {
    var signal = selector[0]; //
    var allChildren = null;
    var content = selector.substr(1);
    var currAttr = null;
    var result = [];
    root = root || document; //��û�и�root����ֵdocument
    switch (signal) {
        case "#":
            result.push(document.getElementById(content));
            break;
        case ".":
            allChildren = root.getElementsByTagName("*");
            // var pattern0 = new RegExp("\\b" + content + "\\b");
            for (i = 0; i < allChildren.length; i++) {
                currAttr = allChildren[i].getAttribute("class");
                if (currAttr !== null) {
                    var currAttrsArr = currAttr.split(/\s+/);
                    // console.log(currAttr);
                    for (j = 0; j < currAttrsArr.length; j++) {
                        if (content === currAttrsArr[j]) {
                            result.push(allChildren[i]);
                            // console.log(result);
                        }
                    }
                }
            }
            break;
        case "[": //����ѡ��
            if (content.search("=") == -1) { //ֻ�����ԣ�û��ֵ
                allChildren = root.getElementsByTagName("*");
                for (i = 0; i < allChildren.length; i++) {
                    if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
                        result.push(allChildren[i]);
                    }
                }
            } else { //�������ԣ�����ֵ
                allChildren = root.getElementsByTagName("*");
                var pattern = /\[(\w+)\s*\=\s*(\w+)\]/; //Ϊ�˷���Ⱥ�ǰ�������
                var cut = selector.match(pattern); //�����Ľ����Ϊ����
                var key = cut[1]; //��
                var value = cut[2]; //ֵ
                for (i = 0; i < allChildren.length; i++) {
                    if (allChildren[i].getAttribute(key) == value) {
                        result.push(allChildren[i]);
                    }
                }
            }
            break;
        default: //tag
            result = root.getElementsByTagName(selector);
            break;
    }
    return result;
}

/**
 * ==================�¼�=======================
 */
// ��һ��element��һ�����event�¼�����Ӧ����Ӧ����Ϊlistener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
}

// ���磺

// addEvent($(".second"), "click", function () {
//     alert("clicksecond");
// });

// �Ƴ�element�������event�¼�����ʱִ��listener����Ӧ
function removeEvent(element, event, listener) {
    if (element.removeEventListenr) {
        element.removeEventListenr(event, listener);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);
    }
}

// ʵ�ֶ�click�¼��İ�
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// ʵ�ֶ��ڰ�Enter��ʱ���¼���
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function(event) {
        if (event.keyCode == 13) {
            listener();
        }
    });
}

// �¼�����
function delegateEvent(element,tag,eventName,listener){
    addEvent(element, eventName, function(event){
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()) {
            listener.call(target, event);
        }
    });
}

// ������ͬѧ�Ѿ���ʼ�²��ˣ���������һ��$�����ΰ�����ô�����������ǵ��¼����������·�װ�ı䣺

$.on = function(selector, event, listener) {
    addEvent($(selector), event, listener);
};
$.click = function(selector, listener) {
    addClickEvent($(selector), listener);
};
$.un = function(selector, event, listener) {
    removeEvent($(selector), event, listener);
};
$.delegate = function(selector, tag, event, listener) {
    delegateEvent($(selector), tag, event, listener);
};


// ---------5 BOM-------

// �ж��Ƿ�ΪIE�����������-1���߰汾��
function isIE() {
    var s = navigator.userAgent.toLowerCase();
    console.log(s);
    //ie10����Ϣ��
    //mozilla/5.0 (compatible; msie 10.0; windows nt 6.2; trident/6.0)
    //ie11����Ϣ��
    //mozilla/5.0 (windows nt 6.1; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; .net4.0e; infopath.2; rv:11.0) like gecko
    var ie = s.match(/rv:([\d.]+)/) || s.match(/msie ([\d.]+)/);
    if (ie) {
        return ie[1];
    } else {
        return -1;
    }
}

// ����cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var cookie = cookieName + "=" + encodeURIComponent(cookieValue);
    if (typeof expiredays === "number") {
        cookie += ";max-age=" + (expiredays * 60 * 60 * 24);
    }
    document.cookie = cookie;
}

// ��ȡcookieֵ
function getCookie(cookieName) {
    var cookie = {};
    var all = document.cookie;
    if (all === "") {
        return cookie;
    }
    var list = all.split("; ");
    for (var i = 0; i < list.length; i++) {
        var p = list[i].indexOf("=");
        var name = list[i].substr(0, p);
        var value = list[i].substr(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}

//-------------Ajax---------------
// ѧϰAjax���������Լ���װһ��Ajax������ʵ�����·�����
function ajax(url, options) {

    var dataResult; //���data

    // ����data
    if (typeof(options.data) === 'object') {
        var str = '';
        for (var c in options.data) {
            str = str + c + '=' + options.data[c] + '&';
        }
        dataResult = str.substring(0, str.length - 1);
    }

    // ����type
    options.type = options.type || 'GET';

    //��ȡXMLHttpRequest����
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    // ��������
    xhr.open(options.type, url);
    if (options.type == 'GET') {
        xhr.send(null);
    } else {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(dataResult);
    }

    // readyState
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.responseText, xhr.responseXML);
                }
            } else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    };
}

// ʹ��ʾ����
// ajax(
//     'http://localhost:8080/server/ajaxtest', {
//         data: {
//             name: 'simon',
//             password: '123456'
//         },
//         onsuccess: function(responseText, xhr) {
//             console.log(responseText);
//         }
//     }
// );��