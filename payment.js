var addressdata={}

function strdata(){
    var arr=[]
    let name =document.getElementById("name").value;
    let Lname =document.getElementById("Lname").value;
    let comp=document.getElementById("comp").value;
    let street=document.getElementById("street").value;
    let address=document.getElementById("address").value;
    let postcode=document.getElementById("postcode").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let mbno=document.getElementById("mbno").value;
    arr.push(name,Lname,comp,city,street,address,postcode,state,mbno)
    console.log(name,Lname,comp,city,street,address,postcode,state,mbno);
   storeaddress(arr)
}
function storeaddress(arr){
    addressdata.push(arr)
    console.log(addressdata);
}
