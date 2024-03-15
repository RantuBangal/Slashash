import axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCard from '../components/SingleCard';

function HomePage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.quotable.io/search/quotes?query=${search}`)
        .then(res => {
            console.log(res.data.results);
            setData(res.data.results)
        })
        .catch(err => console.log(err))
    }
console.log(data);

  return (
    <>
        <h2 className='mt-3' >Welcome Quote Lover! Have a Good Time.</h2>
        <div>
            <form onSubmit={handleSubmit} className='mt-3' >
                <input className="border rounded p-2" type="text" name="search" placeholder="Search your quotes" value={search} onChange={(e) => setSearch(e.target.value)} />
                <input className="border rounded p-2 m-3" type="submit" name="submit" />
            </form>
            <div className='d-flex flex-wrap gap-3 mt-3' >
                {
                    data?.map((item, index) => {
                        return <SingleCard key={index} item={item} />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default HomePage