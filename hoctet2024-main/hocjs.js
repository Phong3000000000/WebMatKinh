// // var mang = [];
// // var dem = 0;
// // function them_vao_mang() {
// //     dem += 1;
// //     mang.push(dem);
// //     console.log(mang);
// // }

// // for (let i = 0; i < 101; i++) {
// //     them_vao_mang(mang);
// // }

// // function thay_gia_tri() {
// //     for (let i = 0; i < 101; i++) {
// //         if (mang[i] % 3 == 0 && mang[i] % 5 == 0) {
// //             mang[i] = "haita";
// //         }
// //         else {
// //             if (mang[i] % 3 == 0) {
// //                 mang[i] = "anh";
// //             }
// //             if (mang[i] % 5 == 0) {
// //                 mang[i] = "em";
// //             }
// //         }

// //     }
// // }

// // thay_gia_tri();

// // console.log(mang);

// function in100() {
//     var dem  = 0;
//     while (dem < 101) {
//         console.log("phan tu thu: " + dem);
//         console.log(dem);
//         dem++;
//     }
// }

// in100();

var array_number = [0, 1];
var soluong = 5;
for (let i = 2; i < array_number.length; i++) {
    array_number[i] = array_number[i - 1] + array_number[i - 2];
    console.log("so fibonancy thu: " + i + "la: " + array_number[i]);
}