// Write all the Javascript here
document.querySelector('form').addEventListener('submit', submit);

let data=[];
function submit(e) {
   e.preventDefault();
   let obj={
    name:document.querySelector("#name").value,
    cat:document.querySelector("#category").value,
    brand:document.querySelector("#brand").value,
    price:document.querySelector("#price").value,
    del:document.querySelector("#deliveredBy").value,
   }
   data.push(obj)
   console.log(data);



   showdata(data);
  
}


function showdata(data){

   let x= document.querySelector("tbody");
    x.textContent="";

   data.forEach((ele)=>{
       let row= document.createElement("tr");
       let col1= document.createElement("td");
       let col2= document.createElement("td");
       let col3= document.createElement("td");
       let col4= document.createElement("td");
       let col5= document.createElement("td");
      let col6= document.createElement("td");
      let button= document.createElement("button");
       col1.textContent=ele.name;
       col2.textContent=ele.cat;
       col3.textContent=ele.brand;
       col4.textContent=ele.price;
       col5.textContent=ele.del;

     
       if(ele.price>1000){
        col6.textContent="Expensive";
       }
       else{
        col6.textContent="Not-expensive";
       }
       
       button.textContent="delete";
       button.addEventListener("click",function(){
        row.textContent=""
       })

       row.append(col1,col2,col3,col4,col5,col6,button);

      x.append(row);
   })


}

























