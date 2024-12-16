import baseUrl from "../Api/baseUrl";
const useGetData = async(url , params )=>{
   const res =await baseUrl.get(url , params )
   console.log(res)

   return res.data
}
const useGetDataToken = async (url, parmas) => {
   const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
   }
   const res = await baseUrl.get(url, config);
   console.log(res)

   return res.data;
}

export {useGetData , useGetDataToken}   ;