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
// chọn để show Số kết nối

const FEE_PER = 4.5;
const FEE_BUS = 15;

const COST_PER = 20.5;
const COST_BUS = 75;

const HIGH_QUAN_PER = 7.5;
const HIGH_QUAN_BUS = 50;

var phi = 0;

function show() {
  var x = document.getElementById("mySelect").value;
  if (x === "business") {
    document.getElementById("ketnoi").style.visibility = "visible";
  } else {
    document.getElementById("ketnoi").style.visibility = "hidden";
  }
}
// đầu vào
document.getElementById("nhapb2").onclick = function () {
  var code = document.getElementById("support").value;
  var connect = document.getElementById("highconnect").value * 1;
  var way = document.getElementById("way").value * 1;
  var x = document.getElementById("mySelect").value;
  // tinh phí  dịch vụ cơ bản

  if (x === "personal") {
    phi = connect * HIGH_QUAN_PER + FEE_PER + COST_PER;
  } else {
    phi = tinhphidoanhnghiep(connect, way);
  }

  var result = "";
  result += "<p>Phí truyền hình cáp tháng " + phi + " $</p>";

  // xuất ra

  document.getElementById("infob2").innerHTML = result;
};

function tinhphidoanhnghiep(soKetnoi, soKenh) {
  var content = 0;
  var way = soKetnoi;
  var channel = soKenh;

  if (way > 10) {
    content = FEE_BUS + COST_BUS + (way - 10) * 5 + channel * 50;
  } else {
    content = FEE_BUS + COST_BUS + channel * 50;
  }

  return content;
}
