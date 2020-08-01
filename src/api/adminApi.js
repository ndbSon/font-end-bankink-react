import axiosClient from "./axiosClient";

const employeeApi = {
    signup: (req) => {
        const url = '/admin/signup';
        return axiosClient.post(url,{...req});
    },
    transaction:(params)=>{
        const url = '/admin/transaction';
        return axiosClient.get(url,{params});
    },
    statis:(params)=>{
        const url = '/admin/statis';
        return axiosClient.get(url,{params});
    }
}
export default employeeApi;