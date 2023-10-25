import axios from 'axios'
// import { createToast } from 'mosha-vue-toastify'

const domain = process.env.link_api

const api = {
    async get(url, headers = {}) {
        try {
            console.log(headers)
            const data = await fetch(domain + url,  {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: headers,
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
              });

            // const data = await axios.get(domain + url, { headers: headers })
            console.log(url)
            console.log(data)
            return data
        } catch (e) {
            throw e
            // return e
        }
    },

    async post(url, formData = {}, headers = {}) {
        try {
            const data = await axios.post(domain + url, formData, { headers: headers })
            return data
        } catch (e) {
            console.log(e)
            console.log(e?.response)
            throw e
            // return e
        }
    },

    async put(url, data = {}, headers = {}) {
        try {
            let result = await axios.put(url, data, headers)

            return result
        } catch (e) {
            return e
        }
    },

    async delete(url, data = {}, headers = {}) {
        console.log(url)
        try {
            let result = await axios.delete(domain + url, { headers: headers })

            if (result.data.status != 200) {
                createToast(result.data.message, {
                    type: 'danger',
                    transition: 'zoom',
                    showIcon: 'true',
                    hideProgressBar: 'false',
                    position: 'top-center',
                })
                return
            }

            return result
        } catch (e) {
            return e
        }
    },
}

export default api
