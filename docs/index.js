// window.onscroll = function () {
//   scrollFunction()
// }

// function scrollFunction () {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     console.log(document.documentElement.scrollTop)

//     document.getElementById("navbar").style.height = "70px"

//   } else {
//     document.getElementById("navbar").style.height = "100px"

//   }
// }
// $(document).ready(function () {
//   //上面的代码
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 80) {
//       $('navbar').height(70)
//     } else {
//       $('navbar').height(100)
//     }
//   })

// })

// let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // document.getElementById("navbar").style.height = "70px"
    document.getElementById("header").style.height = "0px"

  } else {
    // document.getElementById("navbar").style.height = "100px"
    document.getElementById("header").style.height = "30px"

  }
})
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.getElementById("navbar").style.height = "70px"
    // document.getElementById("header").style.height = "0px"

  } else {
    document.getElementById("navbar").style.height = "100px"
    // document.getElementById("header").style.height = "30px"

  }
})