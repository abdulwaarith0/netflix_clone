import axios from "axios";

const api = () => {
    return {
        get: async (url, options) => {
            return await axios.get(url, options);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        post: async (url, data, options) => {
            return await axios.post(url, data, options);
        },
        delete: async (url, options) => {
            return await axios.delete(url, options);
        },
    };
};
export default api;
