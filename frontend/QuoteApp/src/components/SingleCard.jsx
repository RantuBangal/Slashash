import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SingleCard({ item }) {

  const handleAddToFavourite = (e) => {
    e.preventDefault();

    let quoteObj = {
      id: item._id,
      content: item.content,
      author: item.author
    };

    axios.post(`http://localhost:9090/favourites`, quoteObj)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='border rounded p-3 text-start' style={{ width: "280px" }} >
      <p><b>Quote:</b> {item.content}</p>
      <p><b>Author:</b> {item.author}</p>
      <div>
        <button
          onClick={handleAddToFavourite}
          className='btn btn-warning'
        >Add to favourites</button>
      </div>
    </div>
  )
}

export default SingleCard;

