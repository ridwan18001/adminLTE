var nama= document.getElementById("inputNama");
var posisi = document.getElementById("inputPosisi");
var asal = document.getElementById("askot");
var instagram = document.getElementById("inst");
var foto = document.getElementById("fp");
var linkIn = document.getElementById("linkedIn");


function tambah() {
    let print = document.getElementById("identitas");
    let input = print.innerHTML +
    '<div class="card-header"><h5 class="m-0"><b>Identitas Pegawai</b></h5></div><div class="card-body">'+
    '<div class="card card-widget widget-user"><!-- Add the bg color to the header using any of the bg-* classes -->'+
    '<div class="widget-user-header bg-info">'+
    '<h3 class="widget-user-username">'+nama.value+'</h3>'+
    '<h5 class="widget-user-desc">'+posisi.value+'</h5>'+
    '</div><div class="widget-user-image">'+
    '<img class="img-circle elevation-2" alt="User Avatar" src='+foto.value+'></img>'+
    '</div><div class="card-footer"><div class="row"><div class="col-sm-4 border-right">'+
    '<div class="description-block"><i class="fab fa-instagram"></i><p>'+
    '<a class="description-text" href='+instagram.value+'target="_blank">Instagram</a>'+
    '</p></div><!-- /.description-block --></div><!-- /.col --><div class="col-sm-4 border-right">'+
    '<div class="description-block"><i class="fab fa-linkedin"></i><p>'+
    '<a class="description-text" href='+linkIn.value+'target="_blank">LinkedIn</a>'+
    '</p></div><!-- /.description-block --></div><!-- /.col --><div class="col-sm-4">'+
    '<div class="description-block"><i class="fas fa-map-marker-alt"></i>'+
    '<h5 class="description-header" >'+asal.value+'</h5>'+
    '</div><!-- /.description-block --></div><!-- /.col --></div><!-- /.row -->'+
    '</div></div></div>'
    
    print.innerHTML = input;
}

function tambah2() {
    let scrip = [{
        nama : "Ridwan Maulana", posisi : "Fullstack Developer", foto : "https://scontent.fbdo8-1.fna.fbcdn.net/v/t39.30808-6/276317411_2141727632661461_5080174202868138438_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG5fG-rfbsh_v8_XD_jVWmoktUruv0nJEOS1Su6_SckQ5jhUIGEhy36uWLzFPNgTZ8Tl2fboYFTYUIAM_r_Y2-C&_nc_ohc=Ay6naB3IOdUAX_HHZsS&_nc_zt=23&_nc_ht=scontent.fbdo8-1.fna&oh=00_AT8eZtfRk2yyPbMSQBcIq-qwbzGBUMrtz8iSTvHzAXE5rQ&oe=62EF10B6",
        instagram : "https://www.instagram.com/9ridwanmaulana/", linkIn : "https://www.linkedin.com/in/ridwanm170900/", asal : "Kuningan"
    }]
    
    for (let i = 0; i < scrip.length; i++) {
        let print = document.getElementById("identitas");
    let input = print.innerHTML +
    '<div class="card-header"><h5 class="m-0"><b>Identitas Pegawai</b></h5></div><div class="card-body">'+
    '<div class="card card-widget widget-user"><!-- Add the bg color to the header using any of the bg-* classes -->'+
    '<div class="widget-user-header bg-info">'+
    '<h3 class="widget-user-username">'+scrip[i].nama+'</h3>'+
    '<h5 class="widget-user-desc">'+scrip[i].posisi+'</h5>'+
    '</div><div class="widget-user-image">'+
    '<img class="img-circle elevation-2" alt="User Avatar" src='+scrip[i].foto+'></img>'+
    '</div><div class="card-footer"><div class="row"><div class="col-sm-4 border-right">'+
    '<div class="description-block"><i class="fab fa-instagram"></i><p>'+
    '<a class="description-text" href='+scrip[i].instagram+'target="_blank">Instagram</a>'+
    '</p></div><!-- /.description-block --></div><!-- /.col --><div class="col-sm-4 border-right">'+
    '<div class="description-block"><i class="fab fa-linkedin"></i><p>'+
    '<a class="description-text" href='+scrip[i].linkIn+'target="_blank">LinkedIn</a>'+
    '</p></div><!-- /.description-block --></div><!-- /.col --><div class="col-sm-4">'+
    '<div class="description-block"><i class="fas fa-map-marker-alt"></i>'+
    '<h5 class="description-header" >'+scrip[i].asal+'</h5>'+
    '</div><!-- /.description-block --></div><!-- /.col --></div><!-- /.row -->'+
    '</div></div></div>'
    
    print.innerHTML = input;
    }
}