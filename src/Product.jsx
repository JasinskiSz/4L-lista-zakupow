import { useState } from "react"
import "./Product.css"

function Product() {
    const [strikethrough, setStrikethrough] = useState(false)

    const handleClick = () => {
        setStrikethrough(!strikethrough)
    }

    return (
        <div className="product">
            <p onClick={handleClick}
                className={strikethrough ? "line-through" : null}>
                Nazwa produktu
            </p>
            <button>Usuń</button>
        </div>
    )
}

export default Product