function chuyentrang() {
    let mk = document.getElementById("mk").value
    let ten = document.getElementById("ten").value

    switch (mk) {
        case "admin": {
            sessionStorage.setItem('name', ten)
            location.assign("main.html")
            alert("CHÀO MỪNG BẠN ĐẾN VỚI IKHO, WEB QUẢN LÝ KHO SỐ 1 THẾ GIỚI")
            break;
        }
        default: {
            alert("Sai mật khẩu")
        }
    }

    document.getElementById("hoten").value = ten
}

function phim(enter) {
    switch (enter.keyCode) {
        case 13:
            chuyentrang();
            break;
    }
}

function load2() {
    window.addEventListener('keydown', phim);
}

function load() {
    document.getElementById("hoten").innerHTML = sessionStorage.getItem('name')
}

class Banghang {
    ma;
    ten;
    donvi;
    sl;


    constructor(ma, ten, donvi, sl) {
        this.ma = ma;
        this.ten = ten;
        this.donvi = donvi;
        this.sl = +sl;
    }

}

let mangBanghang = JSON.parse(localStorage.getItem("bach"));
localStorage.setItem("bach", JSON.stringify(mangBanghang));
let tablebanghang = document.getElementById("banghang");
let hienTen = document.getElementById("hienten1");
let Time1 = document.getElementById("time1");
let chonMa1 = document.getElementById("chonma1");
let xuatNhap = document.getElementById("chonxuatnhap");
let slxuatNhap = document.getElementById("sl1");
let chonDonvi = document.getElementById("chondonvi");
let maMoi = document.getElementById("mamoi");
let tenMoi = document.getElementById("tenmoi");
let slbd = document.getElementById("slbandau");

function show() {
    let str = "<tr>\n" +
        "            <th width=\"100\">\n" +
        "                Mã\n" +
        "            </th>\n" +
        "            <th width=\"100\">\n" +
        "                Tên\n" +
        "            </th>\n" +
        "            <th width=\"100\">\n" +
        "                Đơn vị\n" +
        "            </th>\n" +
        "            <th width=\"100\">\n" +
        "                Số lượng\n" +
        "            </th>\n" +
        "        </tr>"
    for (let i = 0; i < mangBanghang.length; i++) {
        if (mangBanghang[i].sl <= 2) {
            str += `<tr>
              <td>${mangBanghang[i].ma}</td>  
              <td>${mangBanghang[i].ten}</td>     
              <td>${mangBanghang[i].donvi}</td> 
              <td style="color: red">${mangBanghang[i].sl}</td> 
              <td style="width: 50px"><button style="width: 50px;font-size: 10px" onclick="xoa(${i})">Delete</button></td>
              <td style="width: 50px"><button style="width: 50px;font-size: 10px" onclick="edit(${i})">Edit</button></td>
              </tr>`
        } else {
            str += `<tr>
              <td>${mangBanghang[i].ma}</td> 
              <td>${mangBanghang[i].ten}</td> 
              <td>${mangBanghang[i].donvi}</td> 
              <td style="color: black">${mangBanghang[i].sl}</td> 
             <td style="width: 50px"><button style="width: 50px;font-size: 10px" onclick="xoa(${i})">Delete</button></td>
              <td style="width: 50px"><button style="width: 50px;font-size: 10px" onclick="edit(${i})">Edit</button></td>
              </tr>`
        }
    }
    tablebanghang.innerHTML = str;
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function themhang() {
    let newOj = new Banghang(maMoi.value, tenMoi.value, chonDonvi.value, slbd.value)
    let check = true
    for (let i = 0; i < mangBanghang.length; i++) {
        if (maMoi.value === mangBanghang[i].ma) {
            alert("Mã hàng đã tồn tại");
            check = false
            return
        }
    }
    if (chonDonvi.value !== "" && maMoi.value !== "" && tenMoi.value !== "" && slbd.value !== "" && check == true) {
        mangBanghang.push(newOj)
        document.getElementById("chonmadata1").innerHTML += "<option>" + maMoi.value + "</option>"
        //arraychon.push("<option>" + maMoi.value + "</option>")
        show()
        clearbanghang()
    } else {
        alert("Vui lòng nhập đủ giá trị")
    }
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

let arraychon = []

function showarraychon() {
    for (let i = 0; i < arraychon.length; i++) {
        document.getElementById("chonmadata1").innerHTML = arraychon[i]
    }
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function xoa(index) {
    mangBanghang.splice(index, 1);
    for (let i = 0; i < mangBanghang.length; i++)
        arraychon.push("<option>" + mangBanghang[i].ma + "</option>");
    show();
    showarraychon();
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function edit(index) {
    let Ma = prompt("Nhập Mã muốn sửa");
    let Ten = prompt("Nhập Tên muốn sửa");
    let Donvi = prompt("Nhập Đơn vị muốn sửa");
    let Sl = prompt("Nhập Số lượng muốn sửa");
    let newObj = new Banghang(Ma, Ten, Donvi, Sl);
    mangBanghang.splice(index, 1, newObj);
    for (let i = 0; i < mangBanghang.length; i++)
        arraychon.push("<option>" + mangBanghang[i].ma + "</option>");
    show();
    showarraychon();
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function onchange1(value) {
    for (let i = 0; i < mangBanghang.length; i++) {
        if (mangBanghang[i].ma == value) {
            hienTen.value = mangBanghang[i].ten;

        }
    }
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function clearbanghang() {
    maMoi.value = ""
    tenMoi.value = ""
    chonDonvi.value = ""
    slbd.value = ""
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function clearxuatnhap() {
    Time1.value = "";
    chonMa1.value = "";
    hienTen.value = "";
    slxuatNhap.value = "";
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

let arrayLog = []


function xuatnhap() {
    if (Time1.value == "" || chonMa1.value == "" || slxuatNhap.value == "" || hienTen.value == "") {
        alert("Vui lòng nhập đủ giá trị");
    } else {
        for (let i = 0; i < mangBanghang.length; i++) {
            if (mangBanghang[i].ma === chonMa1.value && xuatNhap.value === "Nhập") {
                if (slxuatNhap.value > 0) {
                    mangBanghang[i].sl += +(slxuatNhap.value);
                    show();
                    alert("Bạn vừa nhập " + slxuatNhap.value + " Số lượng trong kho bây giờ là " + mangBanghang[i].sl)
                    arrayLog.push("<tr><td width='50'>" + Time1.value + "</td>" + "<td width='50'>" + chonMa1.value + "</td>" + "<td>" + hienTen.value + "</td>" + "<td width='50'>" + "Nhập" + "</td>" + "<td>" + slxuatNhap.value + "</td>" + "<td style='width: 50px'><button onclick='xoaLog(chonMa1.value)' id='xoalognhap' value='Xóa' >Delete</button></td>" + "</tr>");
                    clearxuatnhap()
                    showLog()
                    return;
                } else {
                    alert("Số lượng xuất nhập không hợp lệ")
                }
                ;
                return;
            }
            if (mangBanghang[i].ma === chonMa1.value) {
                if (slxuatNhap.value > mangBanghang[i].sl && xuatNhap.value === "Xuất") {
                    alert("không đủ hàng để xuất")
                    return;
                }
            }
            if (mangBanghang[i].ma === chonMa1.value && xuatNhap.value === "Xuất") {
                if (slxuatNhap.value > 0) {
                    mangBanghang[i].sl -= +(slxuatNhap.value);
                    show();
                    alert("Bạn vừa xuất " + slxuatNhap.value + " Số lượng trong kho bây giờ là " + mangBanghang[i].sl)
                    arrayLog.push("<tr><td width='50'>" + Time1.value + "</td>" + "<td width='50'>" + chonMa1.value + "</td>" + "<td>" + hienTen.value + "</td>" + "<td width='50'>" + "Xuất" + "</td>" + "<td>" + slxuatNhap.value + "</td>" + "<td style='width: 50px'><button onclick='xoaLog(chonMa1.value)' id='xoalogxuat' value='Xóa' >Delete</button></td>" + "</tr>");
                    clearxuatnhap()
                    showLog()
                    return;
                } else {
                    alert("Số lượng xuất nhập không hợp lệ")
                }
                ;
                return;
            }
        }
    }
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

function showLog() {
    document.getElementById("log").innerHTML = "<tr>\n" +
        "        <th width=\"100\">\n" +
        "            Date\n" +
        "        </th>\n" +
        "        <th width=\"100\">\n" +
        "            Mã\n" +
        "        </th>\n" +
        "        <th width=\"100\">\n" +
        "            Tên\n" +
        "        </th>\n" +
        "        <th width=\"100\">\n" +
        "            Xuất/Nhập\n" +
        "        </th>\n" +
        "        <th width=100\">\n" +
        "            Số lượng\n" +
        "        </th>\n" +
        "        </tr>"
    for (let i = 0; i < arrayLog.length; i++) {
        document.getElementById("log").innerHTML += arrayLog[i]
    }
    localStorage.setItem("bach", JSON.stringify(mangBanghang));

}

function xoaLog(ma) {
    for (let i = 0; i < arrayLog.length; i++) {
        //tim xem ma co xuat hien trong arrLog[i] khong
        if (arrayLog[i].search(ma) != -1) {
            arrayLog.splice(i, 1);
            break;
        }
    }
    showLog();
    localStorage.setItem("bach", JSON.stringify(mangBanghang));
}

showarraychon();
showLog();
show();


//y tưởng: function nhap xuất, duyệt marngbanghang nếu có mã trùng thì số lượng thay đổi, tương tự với nếu nhập trùng, thì alert ma nay da ton tại.
/*function themhang() {
    let chondonvi = document.getElementById("chondonvi").value;
    let mamoi = document.getElementById("mamoi").value;
    let tenmoi = document.getElementById("tenmoi").value;
    document.getElementById("banghang").innerHTML += "<tr>" + "<td>" + mamoi + "</td>" + "<td>" + tenmoi + "</td>" + "<td>" + chondonvi + "</td>" + "</tr>"
    document.getElementById("chonmadata1").innerHTML += "<option>" + mamoi + "</option>"
    document.getElementById("chonmadata2").innerHTML += "<option>" + mamoi + "</option>"
}
function nhap() {
    let hienten = document.getElementById("hienten1").value
    let time1 = document.getElementById("time1").value
    let chonma1 = document.getElementById("chonma1").value
    let sl1 = document.getElementById("sl1").value
    if (time1.trim() !== "" && chonma1.trim() !== "" && sl1.trim() !== "" && hienten.trim() !== "") {
        document.getElementById("log").innerHTML += "<tr><td width='50'>" + time1 + "</td>" + "<td width='50'>" + chonma1 + "</td>" + "<td>" + hienten + "</td>" + "<td width='50'>" + "Nhập" + "</td>" + "<td>" + sl1 + "</td>" + "</tr>"
    }
}

function xuat() {
    let hienten = document.getElementById("hienten2").value
    let time2 = document.getElementById("time2").value
    let chonma2 = document.getElementById("chonma2").value
    let sl2 = document.getElementById("sl2").value
    if (time2.trim() !== "" && chonma2.trim() !== "" && sl2.trim() !== "") {
        document.getElementById("log").innerHTML += "<tr><td width='50'>" + time2 + "</td>" + "<td width='50'>" + chonma2 + "<td>" + hienten + "</td>" + "</td>" + "<td width='50'>" + "Xuất" + "</td>" + "<td>" + sl2 + "</td>" + "</tr>"
    }
}
*/



