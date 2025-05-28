import { Link } from "react-router-dom"
import ProductCard from "../Components/product-card"


const Home = () => {

  const addToCartHandler = () => {};
  return (
    <div className="home">
      <span>Shop here for best electronic gadgets...</span>
      <section></section>
      <h1>Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard
        productId="adshsdhj" 
        name="MacbookPro"
        price={95990}
        stock={1343}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/416e1B8V75L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <ProductCard
        productId="bfsshsdhj" 
        name="Echo - Smart speaker & Alexa"
        price={13999}
        stock={143}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/51C+FWhW9xL._SX425_.jpg"
        />
        <ProductCard
        productId="qweshsdhj" 
        name="MacbookPro"
        price={4545}
        stock={1343}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41r5qavpphL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <ProductCard
        productId="adshsdhj" 
        name="Fire TV Stick HD"
        price={4499}
        stock={444}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg"
        />
        <ProductCard
        productId="zjshsdhj" 
        name="Saregama Carvaan Premium Hindi - Portable Music Player"
        price={1365}
        stock={1119}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71ftBTXfsbL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <ProductCard
        productId="mnbhsdhj" 
        name="eMeet S600 4K Webcam for Streaming"
        price={2166}
        stock={619}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61cFB2OrkCL._SY355_.jpg"
        />
        <ProductCard
        productId="yuiohsdhj" 
        name="Nylon Double Layer Electronic Gadget Organizer Bag"
        price={649}
        stock={111}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71e3YLIZHWL._SY355_.jpg"
        />
      </main>
    </div>
  )
}

export default Home