

interface ReqObj {
    method?: string;
    mode?: string;
    cache?: string;
    credentials?: string;
    headers?: object
    redirect?: string;
    referrerPolicy?: string;

    data?: object;
    param?: object;
    params?: object;
    header?: object; // typo of headers
    methods?: string; // typo of method
}




const req = async (url = '', data: ReqObj = {}) => {
    const presetReqObj: ReqObj = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    let newObj = {}
    // handle typo words
    if (data.headers || data.header) {
        presetReqObj.headers = data.headers || data.header
    }
    if (data.method || data.methods) {
        presetReqObj.method = data.method || data.methods
    }

    if (data.data) {
        newObj = Object.assign(presetReqObj, data, { body: JSON.stringify(data.data) })
    } else if (data.param || data.params) {
        newObj = Object.assign(presetReqObj, data, { params: JSON.stringify(data.param || data.params) })
    } else {
        newObj = Object.assign(presetReqObj, { body: JSON.stringify(data) })
    }

    try {
        const response = await fetch( '/api' + url, newObj);
        return response.json(); // parses JSON response into native JavaScript objects

    } catch (error) {
        console.error(error);
        
    }
}

export default req