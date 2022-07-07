import basket from '../images/basket.jpg'
import Products from './Products'
const Section = () => {
    return (
        <div className="section">
          <div className="basket">
            <img src={basket} alt="" />
          </div>
            <Products />
        </div>
    )
}

export default Section