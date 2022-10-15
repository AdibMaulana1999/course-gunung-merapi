console.log("starting tweak")
const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")
const productBox1 = document.getElementById("productBox1")
const productBox2 = document.getElementById("productBox2")
const tombol = document.getElementById("tombol")

function getDetail(nomor) {
  console.log('produk: ', nomor)
  newBox.style.display = "block"
  wrapper.style.display = "none"
  tombol.removeAttribute("hidden");

  if (nomor === 1) {
    productBox1.style.display = "flex"
  } else if (nomor === 2) {
    productBox2.style.display = "flex"
  }

}
function clickbutton() {
  wrapper.style.display = "flex";
  newBox.style.display = "none";
  productBox1.style.display = "none"
  productBox2.style.display = "none"
  productBox3.style.display = "none"
  productBox4.style.display = "none"
  productBox5.style.display = "none"
  productBox6.style.display = "none"
}