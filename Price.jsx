export default function price({oldPrice,newPrice}){
 let oldStyles = {
  textDecorationLine:"line-through",
 };
 let newStyles ={
   fontWeight: "bold",
 }  
 let styles ={
    backgroundColor:"#e0c367",
    height:"30px",
    width:"280px",
    borderBottomLeftRadius:"20px",
    borderBottomRightRadius:"20px",
    paddingRight:"1px",
    // paddingLeft:"5px",
    paddingBottom:"10px",
    paddingTop:"15px",
 }
    return (
<div style={styles}>
    <span style={oldStyles}>oldPrice:{oldPrice}</span>
    &nbsp;&nbsp;&nbsp;

    <span style={newStyles}>newPrice:{newPrice}</span>
</div>
    );
}
