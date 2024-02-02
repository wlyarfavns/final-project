const requiredMark= document.querySelectorAll('span');
for(let i = 0; i < requiredMark.length; i++) {
    requiredMark[i].style.color = 'red'
}

const input = document.getElementsByTagName('input');
for(let i = 0; i < input.length; i++){
    input[i].style.borderStyle = 'solid';
    input[i].style.borderColor = 'blue';
    input[i].style.borderWidth = '2px';
    input[i].style.borderRadius = '4px';
}

const button = document.querySelector('button');
// function cekValidasi(){
//     if(input.values.length < 0){
//         alert('ppp')
//     }
// }
// let nama = document.querySelector('#nama');
// let email = document.querySelector('#email');
// let pesan = document.querySelector('#pesan');

button.addEventListener('click', function(){
    // if(nama == ""){
    //     alert('mohon di isi');
    //     return false;
    // }
    // if(email == ""){
    //     alert('mohon di isi');
    //     return false;
    // }
    // if(pesan == ""){
    //     alert('mohon di isi')
    //     return false;
    // }
    // else {
    //     alert('terim')
    // }
    for(let i = 0;i < input.length;i++){
        if (input[i].value === ""){
            alert('mohon diisi');
            return false;
        }
        else {
            alert('terimaksiah')
        }
    }
})