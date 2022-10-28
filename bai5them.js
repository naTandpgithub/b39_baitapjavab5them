// bài 1: tính thuế

// đầu vào
document.getElementById("nhapb1").onclick = function () {
  var support = document.getElementById("support").value * 1;
  var luong = document.getElementById("luong").value * 1;
  var currentFormat = Intl.NumberFormat("VN-vn");
  luongnam = luong * 1000000 * 12;
  var result = "";
  sauthue = tinhthunhap(luongnam) - 4000000 - support * 1600000;

  result +=
    "<p>Tổng thu nhập sau thuế : " + currentFormat.format(sauthue) + "VND</p>";

  document.getElementById("infob1").innerHTML = result;
};

function tinhthunhap(luongnam) {
  var tongthunhap = "";

  if (luongnam > 0 && luongnam <= 60000000) {
    tongthunhap = luongnam * 0.95;
  } else if (luongnam > 60000000 && luongnam <= 120000000) {
    tongthunhap = luongnam * 0.9;
  } else if (luongnam > 120000000 && luongnam <= 210000000) {
    tongthunhap = luongnam * 0.85;
  } else if (luongnam > 210000000 && luongnam <= 384000000) {
    tongthunhap = luongnam * 0.8;
  } else if (luongnam > 384000000 && luongnam <= 624000000) {
    tongthunhap = luongnam * 0.75;
  } else if (luongnam > 624000000 && luongnam <= 960000000) {
    tongthunhap = luongnam * 0.7;
  } else if (luongnam > 960000000) {
    tongthunhap = luongnam * 0.65;
  } else {
    alert("Vui lòng nhập chính xác thu nhập");
  }

  return tongthunhap;
}

// bài 2 : tính tiền cáp

function show() {
  var x = document.getElementById("mySelect").value;
  if (x === "business") {
    document.getElementById("ketnoi").style.visibility = "visible";
  } else {
    document.getElementById("ketnoi").style.visibility = "hidden";
  }
}
