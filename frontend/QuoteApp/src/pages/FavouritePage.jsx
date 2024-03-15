import axios from "axios";
import { useEffect, useState } from "react";
import SingleFavQuote from "../components/SingleFavQuote";


export default function FavouritePage() {
  const [allQuotes, setAllQuotes] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9090/favourites`)
      .then(res => {
        console.log(res.data);
        setAllQuotes(res.data.result)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="d-flex flex-wrap gap-3 pt-4">
      {
        allQuotes?.map((item, index) => {
          return <SingleFavQuote key={index} item={item} />
        })
      }
    </div>
  )
}
