let arrSoN = [];
document.getElementById("themSo").onclick = function () {
  // truy xuất dữ liệu người dùng
  let soN = Number(document.getElementById("soN").value);
  // Phương thức lưu trữ dữ liệu vào mảng push()
  arrSoN.push(soN);
  document.getElementById("ketQuaThemSo").innerHTML = "👉 " + arrSoN;
};

// 1. Tính tổng số dương
document.getElementById("btnTinhTongSoDuong").onclick = function () {
  // Sử dụng mảng arrSoN để tính tổng và sử dụng vòng lặp for of để xét
  let tongSoDuong = 0;
  for (let item of arrSoN) {
    if (item > 0) {
      tongSoDuong += item;
    }
  }
  document.getElementById("ketQuaTinhTong").innerHTML =
    "👉 " + "Tổng số dương: " + tongSoDuong;
};

// 2. Đếm số dương
document.getElementById("btnDemSoDuong").onclick = function () {
  // Sử dụng mảng arrSoN để tính tổng và sử dụng vòng lặp for of để xét
  let count = 0;
  for (let item of arrSoN) {
    if (item > 0) {
      count++;
    }
  }
  document.getElementById("ketQuaDemSo").innerHTML =
    "👉 " + "Số dương: " + count;
};

// 3. Tìm số nhỏ nhất
document.getElementById("btnTimSoNhoNhat").onclick = function () {
  let soMin = arrSoN[0];
  for (let item of arrSoN) {
    if (item > soMin) {
      soMin;
    } else {
      soMin = item;
    }
  }
  document.getElementById("ketQuaTimSoNhoNhat").innerHTML =
    "👉 " + "Số nhỏ nhất: " + soMin;
};

// 4. Tìm số dương nhỏ nhất
document.getElementById("btnTimSoDuongNhoNhat").onclick = function () {
  let soDuongNhoNhat = document.getElementById("ketQuaTimSoDuongNhoNhat");

  //   Cách 1: tìm giá trị dương đầu tiên trong mảng bằng cách chạy vòng lặp for...of
  let soDuongMin = Infinity;
  for (let num of arrSoN) {
    if (num > 0) {
      soDuongMin = num;
      break;
    }
  }

  //   Nếu không có số dương nào thì trả về "Không có số dương trong mảng"
  if (soDuongMin === Infinity) {
    return (soDuongNhoNhat.innerHTML = "👉 Không có số dương nào trong mảng");
  }
  for (let num of arrSoN) {
    if (num > 0 && num <= soDuongMin) {
      soDuongMin = num;
      soDuongNhoNhat.innerHTML = "👉 Số dương nhỏ nhất: " + soDuongMin;
    }
  }

  //   Cách 2: Khởi tạo giá trị nhỏ nhất bằng phân tử đầu tiên trong mảng (nếu nó là số dương)
  //   let soDuongMin = arrSoN[0] > 0 ? arr[0] : Infinity;
  //   for (let item of arrSoN) {
  //     if (item > 0 && item <= soDuongMin) {
  //       soDuongMin = item;
  //       soDuongNhoNhat.innerHTML = "👉 Số dương nhỏ nhất: " + soDuongMin;
  //     } else if (item > 0 && item > soDuongMin) {
  //       soDuongMin;
  //       soDuongNhoNhat.innerHTML = "👉 Số dương nhỏ nhất: " + soDuongMin;
  //     } else {
  //       soDuongNhoNhat.innerHTML = "👉 Không có số dương nào trong mảng";
  //     }
  //   }
};

// 5. Tìm số chẵn cuối cùng
document.getElementById("btnTimSoChan").onclick = function () {
  let soChanCuoiCung = ""; //Biến cờ khởi tạo là chuỗi rỗng
  let soChanTimDuoc = document.getElementById("ketQuaTimSoChan");

  // Duyệt qua mảng từ cuối lên đầu
  for (let i = arrSoN.length - 1; i >= 0; i--) {
    if (arrSoN[i] % 2 === 0) {
      soChanCuoiCung = arrSoN[i]; //Cập nhật biến cờ với số chẵn vừa tìm được
      break; //Thoát khỏi vòng lặp
    }
  }
  soChanTimDuoc.innerHTML = "👉 Số chẵn cuối cùng: " + soChanCuoiCung;
  // Trả về số chẵn cuối cùng hoặc 'số chẵn cuối cùng bằng 0' nếu không tìm thấy số chẵn nào
  return soChanCuoiCung === ""
    ? (soChanTimDuoc.innerHTML = "👉 Số chẵn cuối cùng: -1")
    : soChanCuoiCung;
};

// 6. Đổi chỗ
document.getElementById("btnDoiCho").onclick = function () {
  let ketQuaDoiCho = document.getElementById("ketQuaDoiCho");
  let viTriSoThu1 = document.getElementById("viTriSoThu1").value * 1;
  let viTriSoThu2 = document.getElementById("viTriSoThu2").value * 1;
  let index1 = arrSoN.indexOf(viTriSoThu1);
  let index2 = arrSoN.indexOf(viTriSoThu2);
  if (index1 !== -1 && index2 !== -1) {
    let temp = arrSoN[index1];
    arrSoN[index1] = arrSoN[index2];
    arrSoN[index2] = temp;
    ketQuaDoiCho.innerHTML = "👉 Mảng sau khi đổi: " + arrSoN;
  } else {
    ketQuaDoiCho.innerHTML = "Vị trí không hợp lệ. Vui lòng thử lại.";
  }
  console.log(arrSoN);
};
// 7. Sắp xếp tăng dần
document.getElementById("btnSapXep").onclick = function () {
  arrSoN.sort((a, b) => a - b);
  document.getElementById("ketQuaSapXep").innerHTML =
    "👉 Mảng sau khi sắp xếp: " + arrSoN;
};

// 8. Số nguyên tố đầu tiên
document.getElementById("btnTimSoNguyenTo").onclick = function () {
  let soNguyenToDauTien = document.getElementById("ketQuaSoNguyenTo");
  let firstPrime = "";
  // Duyệt qua mảng để tìm số nguyên tố đầu tiên
  for (let i = 0; i < arrSoN.length; i++) {
    let n = arrSoN[i];
    if (n > 1) {
      let isPrime = true;
      for (let z = 2; z <= Math.sqrt(n); z++) {
        if (n % z === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        firstPrime = n;
        soNguyenToDauTien.innerHTML = "👉 " + firstPrime;
        break;
      } else {
        soNguyenToDauTien.innerHTML = "👉 Số nguyên tố đầu tiên: -1";
      }
    }
  }
  console.log(firstPrime);
};

// 9. Đếm số nguyên
let arrNewSoN = [];
document.getElementById("themSoNguyen").onclick = function () {
  // truy xuất dữ liệu người dùng
  let newSoN = Number(document.getElementById("newSoN").value);
  // Phương thức lưu trữ dữ liệu vào mảng push()
  arrNewSoN.push(newSoN);
  document.getElementById("ketQuaThemSoNguyen").innerHTML = "👉 " + arrNewSoN;
};
document.getElementById("btnDemSoNguyen").onclick = function () {
  let demSoNguyen = 0;
  for (let item of arrNewSoN) {
    if (Number.isInteger(item)) {
      demSoNguyen++;
    }
  }
  document.getElementById("ketQuaDemSoNguyen").innerHTML =
    "👉 Số nguyên: " + demSoNguyen;
};

// 10. So sánh số lượng âm và dương
document.getElementById("btnSoSanh").onclick = function () {
  let soSanh = document.getElementById("ketQuaSoSanh");
  let soNguyenAm = "";
  let soNguyenDuong = "";
  for (let item of arrSoN) {
    if (item > 0) {
      soNguyenDuong++;
    } else {
      soNguyenAm++;
    }
  }
  if (soNguyenDuong > soNguyenAm) {
    soSanh.innerHTML = "👉 Số dương > Số âm";
  } else if (soNguyenDuong < soNguyenAm) {
    soSanh.innerHTML = "👉 Số dương < Số âm";
  } else {
    soSanh.innerHTML = "👉 Số dương = Số âm";
  }
};
