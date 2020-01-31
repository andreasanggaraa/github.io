// 2015
var imageIndex = 1;
function changeIndex (n){
    showImages(imageIndex += n)
}

function showImages (n){

    var captionPost2015 = [
        "Konten Prodi Program Studi Manajemen 2015",
        "Divisi Acara melakukan briefing game",
        "Tim BAAK UMN mempresentasikan tugas dan kewajiban divisinya",
        "Mahasiswa baru dan PIC-nya menyanyikan lagu mars UMN",
        "Body Wave Maba dipimpin oleh komandan lapangan"
    ]

    if (n < 1){imageIndex = 5};
    if (n > 5){imageIndex = 1};  
    document.getElementById("image2015").src = `img/2015${imageIndex}.jpg`;
    document.getElementById("captionPost2015").innerHTML = captionPost2015[imageIndex-1];

}

function image2015 (n){
    document.getElementById("image2015").src = `img/2015${n}.jpg`;
}

// 2016
var imageIndex2016 = 2
setInterval(function(){
    document.getElementById("image2016").src = `img/2016${imageIndex2016}.jpg`;
    
    var captionPost2016 = [
        "Briefing oleh PIC masing-masing",
        "Briefing dari divisi keamanan mengenai peraturan OMB",
        "Presentasi dari DKBM mengenai tugas dan kewajibannya",
        "Pengenalan kepada Rektor dan Wakil-Wakil Rektor",
        "Tantangan dari komandan lapangan",
        "Salam UMN",

    ];
    document.getElementById("captionPost2016").innerHTML = captionPost2016[imageIndex2016-1];
    document.getElementsByClassName("fade2016")
    imageIndex2016 += 1;

    if (imageIndex2016 > 6){imageIndex2016 = 1};
    
}, 2500) // Interval per milisecond, 1000ms = 1s

// 2017
var imageIndex2017 = 1;
function changeIndex2017 (n){
    showImages2017(imageIndex2017 += n)
}

function showImages2017 (n){

    var data2017 = [
        {"Photo" : `img/20171.jpg`, "Caption" : "Absensi pagi sebelum briefing OMB UMN 2017" },
        {"Photo" : `img/20172.jpg`, "Caption" : "Maba antri untuk wudhu"},
        {"Photo" : `img/20173.jpg`, "Caption" : "Maba menunggu giliran untuk ke pos berikutnya"},
        {"Photo" : `img/20174.jpg`, "Caption" : "Maba mengantri menuju Hall A"},
        {"Photo" : `img/20175.jpg`, "Caption" : "Penambahan poin untuk kelompok yang bisa menyelesaikan tantangan panitia"},
        {"Photo" : `img/20176.jpg`, "Caption" : "Mahasiswa baru UMN 2017"}
    ]

    if (n < 1){imageIndex2017 = 6};
    if (n > 6){imageIndex2017 = 1};  

    document.getElementById("image2017").src = data2017[imageIndex2017-1].Photo;
    document.getElementById("captionPost2017").innerHTML = data2017[imageIndex2017-1].Caption;
}

function image2017 (n){
    document.getElementById("image2017").src = `img/2017${n}.jpg`;
}