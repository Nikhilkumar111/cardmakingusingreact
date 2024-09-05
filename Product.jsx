import "./Product.css" ;

import Price from "./Price";
// eslint-disable-next-line react/prop-types
function Product({ title,idx}){
let oldPrice = ["12000","14500","89593","999999"];
let newPrice = ["12450","14666","89999","992893"];

let description = [["Description 1","Description 2"],
["Description 1","Description 2"],["Description 1","Description 2"],["Description 1","Description 2"]];
    return (
        <div className="Product">
<h4>{title}</h4>
<p>{description[idx][0]}</p>
<p>{description[idx][1]}</p>
<p>{description[idx][2]}</p>
<p>{description[idx][3]}</p>
<Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );

}
export default  Product;
