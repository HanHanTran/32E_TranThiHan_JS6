// 4 yếu của vòng lặp: 
// B1: Xác định yếu tố thay đổi (khởi tạo giá trị bắt đầu) => Nó sẽ bị thay đổi trong vòng lặp
// B2: Thiết lặp điều kiện lặp (đúng thì làm và lặp lại)
// B3: Cài đặt khối xử lý 
// B4: Thay đổi giá trị của biến khai báo ở bước 1
// Bài tập 3: Tính giai thừa
// input: nhập số n
// ouput: tính giai thừa số đó
// vd n=5 => gia thừa sẽ bằng 1*2*3*4*5
// xử lý



// bài 1: tìm sốnguyeen dương nhỏ nhất
// input: tìm số nguyên dương nhỏ nhất thoả mãn điều kiện đề bài 
// output: gọi tổng là S sao cho S < 10000 (đề bài)
// xử lý: gọi số N (N=0) S = N +1+2..+N++ < 10000
document.getElementById('btnsoNguyenDuong').onclick = function(){
    // var n = document.getElementById('soNguyenDuongNhoNhat').value;
    var N = 0;
    var S = 0;
  
    //B2: thiết lập dk lặp
    while (S < 10000) {
        //B3: Khối lệnh xử lý
        S+= N;
        //B4: Thay đổi giá trị lặp (thay đổi dk lặp
        N++;
    } if (S>10000){ 
        N = N -1;
    }
    //in kết quả ra giao diện
    document.getElementById('soNguyenDuongNhoNhat').value = N;


}

// Bài tập 2: Tính tổng
// INPUT: nhập vào số bất kỳ x, y
// output: tính tổng S(n) = x + x^2+ x^3 + … + x^y
// xử lý: tạo biến tổng: tong và biến đếm: soHang
    // tong = x+ x*x^y (tron đó y là biến đếm từ 0 đến soHang)

document.getElementById('btnTinhTong').onclick = function () {
    //input: so: number
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    //output: tong = 15 :number
    var tong = 0;

    //progress: 
    //B1: Xác định giá thay đổi
    var soHang = 1;
    
    
    //B2: thiết lập dk lặp
    while (soHang <= y) {
        //B3: Khối lệnh xử lý
        tong += Math.pow(x,soHang) ;
        //B4: Thay đổi giá trị lặp (thay đổi dk lặp
        soHang++;
    }
    //in kết quả ra giao diện
    document.getElementById('ketQuab2').innerHTML = tong;
}


// bài 3: tính giai thừa
// input: nhập vào số tự nhiên
// output: tính giai thừa
// xử lý: tạo biến giai thừa: giaThua và biến đếm của số tự nhiên nhập vào: soHang
// giaiThua =  giaiThua * soHang ( soHang<= số nhập vào)
document.getElementById('btnTinhGiaiThua').onclick = function (){
    var so = (document.getElementById('n').value);
     //output: giaiThua: number = 120
     var giaiThua = 1;

     //progress: Xử lý
     //B1: Giá trị thay đổi
     var soHang = 1;
     //B2: Thiết lặp điều kiện lặp
     while (soHang <= so) {
         //Bước 3: Khối lệnh xử lý
         giaiThua = giaiThua * soHang;
         //Bước 4: Thay đổi điều kiện
         soHang++;
     }
     //in output ra giao diện
     document.getElementById('ketQuab3').innerHTML = giaiThua;
}

// bài 4: đổi màu background
// input: có 10 thẻ div và chiia số chẵn và số lẻ
// output: in ra thẻ div có bg màu xanh là số lẻ và màu đỏ là số chẵn
// xử lý: tạo thẻ chứa thẻ div
// tạo biến và cho nhảy số tơí 10
// chia điều kiện nếu biến chẵn in ra mài đỏ và ngược lại in ra màu xanh
document.getElementById('btnTaoDIV').onclick = function(){
    // var doiMau = document.getElementById('ketQuab3').value;
    var html = '';
   
    var nhaySo = 1;
    while(nhaySo <= 10) {
        if(nhaySo % 2 === 0){
            html  += "<div class='alert alert-danger '> div chẵn</div>";
            
            

        }
        else{
            html += "<div class='alert alert-primary'> div lẻ</div>";
            
           
        } nhaySo++;

    }
    document.getElementById('ketQuab4').innerHTML= html;
}