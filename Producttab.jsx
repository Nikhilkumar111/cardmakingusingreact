/* eslint-disable no-undef */
import Product from "./Product";

function Producttab(){
let styles = {
    textAlign:"center",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
   alignItems:"center" ,
   
};
    return (
  <div style={styles}>
  <Product title="Logitect master" idx ={0}/>
  <Product  title="S23 ultra" idx ={1}/>
  <Product title="oppo reno 11" idx ={2}/>
  <Product title="vivo v19" idx ={3}/>
  </div>
    );
}
export default Producttab;
