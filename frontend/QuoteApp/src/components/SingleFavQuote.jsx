import axios from 'axios';


export default function SingleFavQuote({item}) {

    const handleRemoveFromFavourite = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:9090/favourites/${item.id}`)
        .then(res => {
        console.log(res);
        location.reload();
      })
      .catch(err => console.log(err))
    }

  return (

        <div className='border rounded p-3 text-start' style={{width:"300px"}} >
            <p><b>Quote:</b> {item.content}</p>
            <p><b>Author:</b> {item.author}</p>
            <div>
            <button
            onClick={handleRemoveFromFavourite}
            className='btn btn-warning'
            
            >Remove</button>
           </div>
    </div>
    
  )
}
