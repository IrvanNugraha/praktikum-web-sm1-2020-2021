function changeDataToChart(dPenduduk, dDokter){
    var label = dPenduduk.nilai_per_wilayah.map(function(perData){
        return perData.wilayah;
    });
    var tDokter = dDokter.nilai_per_wilayah.map(function(perData){
        return perData.nilai_per_tahun[0].nilai
    })
    var tPenduduk = dPenduduk.nilai_per_wilayah.map(function(perData){
        return perData.nilai_per_tahun[0].nilai
    })
    var tPendudukPerDokter = tPenduduk.map(function(perData, order){
        return Math.round(tPenduduk[order]/tDokter[order]);
    });
    var IdealLinesWHOPendudukPerDokter = tPenduduk.map(function(){
        return 1000;
    });
    
    var IdealLinesBPJSPendudukPerDokter = tPenduduk.map(function(){
        return 5000;
    });
    var dForChart = {
        labels: label,
        datasets: [{
            label: "Ideal Jumlah Penduduk per 1 Dokter - BPJS",
            backgroundColor: "#508860",
            borderWidth: 1,
            yAxisID: "yAxis-Right",
            data: IdealLinesBPJSPendudukPerDokter,
            type: 'line',
        }, {
            label: "Ideal Jumlah Penduduk per 1 Dokter - WHO",
            backgroundColor: "#200040",
            borderWidth: 3,
            yAxisID: "yAxis-Right",
            data: IdealLinesWHOPendudukPerDokter,
            type: 'line',
        }, {
            label: "Jumlah Penduduk",
            backgroundColor: "#66ff66",
            yAxisID: "yAxis-Left",
            data: tPenduduk,
        }, {
            label: "Jumlah Penduduk per 1 Dokter",
            backgroundColor: "#990000",
            yAxisID: "yAxis-Right",
            data: tPendudukPerDokter,
        }]
    };
    return dForChart;
}
function makeChart(dPenduduk, dDokter){
    console.log("Executed");
    console.log("Check Data");
    var eCanvas = document.getElementById("myChart");
    var drCanvas = eCanvas.getContext("2d");
    var tChart = "Data Dokter dan Data Penduduk Per Kota/Kabupaten Provinsi JawaBarat";
    var dFor_Chart = changeDataToChart(dPenduduk, dDokter); 
    var cChartJs = {
        type: 'bar',
        data: dFor_Chart,
        options: {
            responsive: true,
            title:{
                display: true,
                text: tChart
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        min: 0
                    },
                    id: 'yAxis-Left'
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        min: 0
                    },
                    id: 'yAxis-Right'
                }]
            }
        }
    };
    var mChart = new Chart(drCanvas, cChartJs)
}
window.onload = function(){
    // Url API
    var urldPenduduk = "https://mechaid.github.io/course-materials/praktikum-web/2020-2021/contoh/json-api-ke-chart/penduduk-jawa-barat-2019.json";
    var urldDokter = "https://mechaid.github.io/course-materials/praktikum-web/2020-2021/contoh/json-api-ke-chart/dokter-jawa-barat-2019.json";
    // Variable
    var dPenduduk, dDokter;
    // Getting Penduduk Data
    var requestdPenduduk = new XMLHttpRequest();
    requestdPenduduk.open("GET", urldPenduduk, true);
    requestdPenduduk.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
           dPenduduk = JSON.parse(this.responseText);
           
           if(dDokter !== undefined){
               makeChart(dPenduduk, dDokter);
           }
       }
    };
    requestdPenduduk.send();
    // Getting Dokter Data
    var requestdDokter = new XMLHttpRequest();
    requestdDokter.open("GET", urldDokter, true);
    requestdDokter.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
           dDokter = JSON.parse(this.responseText);
           
           if(dPenduduk !== undefined){
               makeChart(dPenduduk, dDokter);
           }
       }
    };
    requestdDokter.send();
};