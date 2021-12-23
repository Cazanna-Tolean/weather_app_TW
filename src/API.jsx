import axios from 'axios'
import store from "./redux/store";

export const Region={
    TAIPEI:"臺北",
    TAICHUNG:"臺中",
    KOAHSIUNG:"高雄",
};

export const wInfoAPI=()=> {
    const endpoint=`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=臺北`;
    console.log("@@",endpoint);
    axios.get(endpoint)
        .then((res)=>{
            const temperature=res.data.records.location[0].weatherElement[3].elementValue;
            store.dispatch({type:'refresh',data:temperature*1});
            console.log(temperature);
        })
        .catch(
            (err)=>console.log("發生錯誤，其原因為",err)
        );

}