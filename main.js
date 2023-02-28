let nama ='ryan'// tipe string 
let usia ='30'// tipe interger 
let tinggiBadan = 168.5 //tipe data double float tidak memkai koma tetapi titik
let beratBadan
let pacar = null //null adalah kosong
beratBadan = 60

if (pacar == null) {
    pacar = 'belum punya'
}  else {
    (pacar = 'udah punya')
} 

let saldoAwal = 50000
let saldoTambahan = 10000
const saldoAkhir = saldoAwal + saldoTambahan

alert(
    `nama saya adalah ${nama} usia saya adalah ${usia} 
     tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`,
    )

alert(
    `saldo awal saya sebesar Rp. ${saldoAwal} dan saldo tambahan saya Rp. ${saldoTambahan}`,
)