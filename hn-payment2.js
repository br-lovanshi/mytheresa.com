function main() {
    var shippingaddr = JSON.parse(localStorage.getItem("shippingAddr"))
    console.log(shippingaddr)
    document.getElementById("name").innerText = shippingaddr.name;
    document.getElementById("city").innerText = shippingaddr.city;
    document.getElementById("city").innerText = shippingaddr.city;
    document.getElementById("state").innerText = shippingaddr.state;
    document.getElementById("postcode").innerText = shippingaddr.postcode;


}
main()
function succefull(){
    alert("order placed succsefully")
}