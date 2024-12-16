import baseUrl from "../Api/baseUrl";
const useDeleteData = async (url, parmas) => {


   const config = {
       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
   }
   const res = await baseUrl.delete(url, config, parmas);
   console.log(res)
   return res.data;
}
export default useDeleteData