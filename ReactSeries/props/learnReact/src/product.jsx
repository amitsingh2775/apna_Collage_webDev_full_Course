import "./App.css"
import Price from "./price"
function Product({title}){
    
   
    return(
        <>
        <div className="product" >
         <p>{title}</p>
         <p>discription</p>
         
          <Price/>
         </div>
        </>
    )
}
export default Product