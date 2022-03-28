import React , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import '../App.css'


function Shop()
{
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br");
    const items = await data.json();
    setItem(items.data.slice(0,20));
  };

  return (
    <div>
      {item.map((i) => (
        <div key={i.id}>
          <Link className="link-shop" to={`/items/${i.id}`}>{i.name}</Link>
        </div>
      ))}
    </div>
  );
}


export default Shop;