import axios from "axios";

export const Axios = axios.create({
  baseURL:"http://localhost:2000",
  withCredentials:true,
})

const SummaryAPI = {
    register:{
      url:"/api/user/create-user",
      method:"post"
    },
    registerviaref:{
      url:"/api/user/request-for-referals",
      method:"post"
    },
    login:{
      url:"/api/user/login-user",
      method:"post"
    },
    getUser:{
      url:"api/user/get-user",
      method:"get"
    },
    updatePassword:{
      url:"api/user/update-password",
      method:"put"
    },
    updateBasic:{
      url:"api/user/update-basic",
      method:"put"
    },
    updateEducation:{
      url:"api/user/update-education",
      method:"put"
    },
    updateFinance:{
      url:"api/user/update-finance",
      method:"put"
    },
    updateFLifeStyle:{
      url:"api/user/update-lse",
      method:"put"
    },
    updateShopping:{
      url:"api/user/update-shopping",
      method:"put"
    },
    getStatus:{
      url:"api/user/request-for-client",
      method:"put"
    }

}

Axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default SummaryAPI;