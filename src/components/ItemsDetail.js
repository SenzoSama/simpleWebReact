import React , {useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import '../App.css'


function ItemsDetail()
{

  const { id } = useParams();
  
  useEffect(() => {
    fetchItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const [item, setItem] = useState({
    images:{}
  });


  const fetchItems = async () => {

    const rowData = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
    const data = await rowData.json();
    setItem(data.data);
  };

    return (
      <div>
        <h2>this item is selected :</h2>
        <h3>{item.name}</h3> 
          <img src={item.images.icon} alt={item.description} />   
      </div>
    );
}


export default ItemsDetail;