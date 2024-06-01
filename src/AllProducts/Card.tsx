
import { Card } from "antd";



const Cart: React.FC = ({ product }) => {
   
 return(
  <Card
    className="mx-auto mt-24 "
    hoverable
    style={{ width: 250 }}
  // cover={<img alt="example" src={product.image} />}
  >
    
    <div className="relative">
      <img alt="example" src={product.image} className="w-full" />
      <div className="absolute -top-6 -ml-6 bg-black bg-opacity-50 text-white px-1 rounded-br-md">
        {product.category}
      </div>
    </div>
    <div className="mt-4 ">
      <h1 className="font-semibold w-full mx-auto bg-slate-400 text-emerald-800 px-2 mb-4 rounded-md bg-opacity-30">{product.title}</h1>
      <h1 className="font-semibold">price : {product.price}$</h1>
      <div className="flex items-center justify-center">
        <h1 className="font-semibold flex-1 ">Rating: {product.rating.rate}</h1>
       
      </div>
    </div>

    {/* <Meta title={product.title}/> */}
    </Card>
 )
}

export default Cart;
