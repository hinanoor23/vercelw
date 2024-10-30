import Link from 'next/link';
import './card.css';

export default({meraAd, m})=>{

    return <div className="card" style={{ width: "18rem" }}>
        <Link href={"/product-detail/"+meraAd.name}>
        <h1>{m}</h1>
    <div style={ {textAlign:'center'} }>
        <img className="card-img-top" src={meraAd.src} alt="Card image cap" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{meraAd.name}</h5>
      <p className="card-text">
        Price {meraAd.price}
      </p>
      <a href="#" className="btn btn-primary">
        Add to Cart
      </a>
    </div>
    </Link>
  </div>
  

}