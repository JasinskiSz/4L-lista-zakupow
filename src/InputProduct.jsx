import { useState } from "react"

function InputProduct({ addProduct }) {
    const [inputValue, setInputValue] = useState("")

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleAddProduct() {
        if (inputValue === "") {
            return
        }
        addProduct(inputValue)
        setInputValue("")
    }

    return (
        <div style={{ display: "flex" }}>
            <input
                type="text"
                placeholder="Nazwa produktu..."
                value={inputValue}
                onChange={(e) => handleInputChange(e)} />

            <button onClick={() => handleAddProduct()}>Dodaj</button>
        </div>
    )
}

export default InputProduct