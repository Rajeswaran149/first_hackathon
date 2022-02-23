let body = document.body;
let containerdiv = document.createElement("div");
containerdiv.classList.add("container");
let rowdiv = document.createElement("div");
rowdiv.classList.add("row");
rowdiv.setAttribute("id","content");

body.append(containerdiv);
containerdiv.appendChild(rowdiv);

let paraTitle1 =document.createElement("p");
paraTitle1.classList.add("col-2","text-center");
let spanTitle1=document.createElement("span");
spanTitle1.classList.add("h4","fs-2");
spanTitle1.innerText = "Name";

rowdiv.appendChild(paraTitle1).appendChild(spanTitle1);


let paraTitle2 =document.createElement("p");
paraTitle2.classList.add("col-2","text-center");
let spanTitle2=document.createElement("span");
spanTitle2.classList.add("h4","fs-2");
spanTitle2.innerText = "Brand";

rowdiv.appendChild(paraTitle2).appendChild(spanTitle2);


let paraTitle3 =document.createElement("p");
paraTitle3.classList.add("col-2","text-center");
let spanTitle3=document.createElement("span");
spanTitle3.classList.add("h4","fs-2");
spanTitle3.innerText = "Product Link";

rowdiv.appendChild(paraTitle3).appendChild(spanTitle3);


let paraTitle4 =document.createElement("p");
paraTitle4.classList.add("col-4","text-center");
let spanTitle4=document.createElement("span");
spanTitle4.classList.add("h4","fs-4");
spanTitle4.innerText = "Description";

rowdiv.appendChild(paraTitle4).appendChild(spanTitle4);


let paraTitle5 =document.createElement("p");
paraTitle5.classList.add("col-2","text-center");
let spanTitle5=document.createElement("span");
spanTitle5.classList.add("h4","fs-2");
spanTitle5.innerText = "Product Price";

rowdiv.appendChild(paraTitle5).appendChild(spanTitle5);

fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
  .then((x) => x.json())
  .then((response) => {

     response.map((x) => {
        let para1 =document.createElement("p");
        para1.classList.add("col-2","text-center");
        let span1=document.createElement("span");
        span1.classList.add("h5");
        span1.innerText = x.name;
        
        rowdiv.appendChild(para1).appendChild(span1);
        
        
        let para2 =document.createElement("p");
        para2.classList.add("col-2","text-center");
        let span2=document.createElement("span");
        span2.classList.add("h5");
        span2.innerText = x.brand;
        
        rowdiv.appendChild(para2).appendChild(span2);
        
        
        let para3 =document.createElement("p");
        para3.classList.add("col-2","text-center");
        let span3=document.createElement("a");
        span3.classList.add("h5");
        span3.setAttribute("href", x.product_link)
        span3.innerText = "product";
        
        rowdiv.appendChild(para3).appendChild(span3);
        
        
        let para4 =document.createElement("p");
        para4.classList.add("col-4","text-center");
        let span4=document.createElement("span");
        span4.classList.add("h5")
        span4.innerText = x.description;
        
        rowdiv.appendChild(para4).appendChild(span4);
        
        
        let para5 =document.createElement("p");
        para5.classList.add("col-2","text-center");
        let span5=document.createElement("span");
        span5.classList.add("h5");
        span5.innerText = x.price;
        
        rowdiv.appendChild(para5).appendChild(span5);
     })
  })
  .catch((er) => console.error(er));