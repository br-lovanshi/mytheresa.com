function strdata(){
    alert("Address added");
    var addressdata =   {
        
        name: document.getElementById("name").value,
        Lname :document.getElementById("Lname").value,
        comp:document.getElementById("comp").value,
        street:document.getElementById("street").value,
        address:document.getElementById("address").value,
        postcode:document.getElementById("postcode").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        mbno:document.getElementById("mbno").value
    }
    localStorage.setItem("shippingAddr", JSON.stringify(addressdata))
}
