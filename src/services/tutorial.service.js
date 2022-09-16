import axios from "axios";
export const data  =()=>{
   return axios.get('https://api.publicapis.org/entries')
}