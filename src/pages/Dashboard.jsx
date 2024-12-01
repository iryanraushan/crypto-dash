import { useEffect, useState } from "react"
import Header from "../components/Common/Header"
import TabComponents from "../components/Dashboard/Tabsomponents"
import axios from "axios"

const Dashboard = () => {

    const [coins , setCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=> {
            setCoins(response.data)
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])


  return (
    <div>
        <Header />
        <TabComponents coins={coins}/>
    </div>
  )
}

export default Dashboard