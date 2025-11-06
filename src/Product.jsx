import { useState } from "react"
import "./Product.css"

function Product({ productName }) {
    const [strikethrough, setStrikethrough] = useState(false)

    const handleClick = () => {
        setStrikethrough(!strikethrough)
    }

    return (
        <div className="product">
            <p onClick={handleClick}
                className={strikethrough ? "line-through" : null}>
                {productName}
            </p>
            <button>Usuń</button>
        </div>
    )
}

export default Product