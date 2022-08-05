function identitasDiri(){
    var nama= document.getElementById("inputNama").value;
    var posisi = document.getElementById("inputPosisi").value;
    var asal = document.getElementById("askot").value;
    var instagram = document.getElementById("inst").value;
    var foto = document.getElementById("fp").value;
    // var input = document.getElementById("input-img").value;
    var linkIn = document.getElementById("linkedIn").value;
    document.getElementById("namaPegawai").innerHTML=nama;
    document.getElementById("jabatan").innerHTML=posisi;
    document.getElementById("alamat").innerHTML=asal;
    document.getElementById("linkInsta").setAttribute("href", instagram);
    document.getElementById("linkFoto").setAttribute("src", foto);
    document.getElementById("linkLinkedIn").setAttribute("href", linkIn);

    // var fReader = new FileReader();
    // fReader.readAsDataURL(input.files[0]);
    // fReader.onload = function(event) {
    //     var img = document.getElementById("img-data");
    //     img.src=event.target.result;
    // }
     // mendapatkan element list input
    // let listInput = document.getElementById("list_input")
    // let input = listInput.innerHTML + "<input type='text'>" 
    // listInput.innerHTML =  input
    //https://www.instagram.com/9ridwanmaulana/
    //https://www.linkedin.com/in/ridwanm170900/
    //https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png
    //https://scontent.fbdo8-1.fna.fbcdn.net/v/t39.30808-6/276317411_2141727632661461_5080174202868138438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG5fG-rfbsh_v8_XD_jVWmoktUruv0nJEOS1Su6_SckQ5jhUIGEhy36uWLzFPNgTZ8Tl2fboYFTYUIAM_r_Y2-C&_nc_ohc=Ay6naB3IOdUAX_HHZsS&_nc_zt=23&_nc_ht=scontent.fbdo8-1.fna&oh=00_AT8eZtfRk2yyPbMSQBcIq-qwbzGBUMrtz8iSTvHzAXE5rQ&oe=62EF10B6
}