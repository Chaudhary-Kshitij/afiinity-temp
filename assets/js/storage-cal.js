function tabselect1(){

    document.getElementById("c1").style.backgroundColor = "#cccccc";
    document.getElementById("c2").style.backgroundColor = "#f1f1f1";
    document.getElementById("c3").style.backgroundColor = "#f1f1f1";

}

function tabselect2(){
    document.getElementById("c2").style.backgroundColor = "#cccccc";
    document.getElementById("c1").style.backgroundColor = "#f1f1f1";
    document.getElementById("c3").style.backgroundColor = "#f1f1f1";
}

function tabselect3(){
    document.getElementById("c3").style.backgroundColor = "#cccccc";
    document.getElementById("c1").style.backgroundColor = "#f1f1f1";
    document.getElementById("c2").style.backgroundColor = "#f1f1f1";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function dateFilled() {
$('#Stbtn').attr('disabled', true);
$('#Debtn').attr('disabled', true);
$('#Dtbtn').attr('disabled', true);

if ($('#discharge').val() != '' && $('#cons').val() != '' && $('#retn').val() != '') {
    $('#Stbtn').attr('disabled', false);
    $('#Debtn').attr('disabled', false);
    $('#Dtbtn').attr('disabled', false);
} else {
    $('#Stbtn').attr('disabled', true);
    $('#Debtn').attr('disabled', true);
    $('#Dtbtn').attr('disabled', true);
}

}


var difference;
var StDays;
var rangeDays=0;


function reload(){
    $("#free1").val("").trigger('change');
    $("#free2").val("").trigger('change');
    $("#free3").val("").trigger('change');
}

function resetSt(){

removeStpackage();

document.getElementById("resu1").innerHTML = "<h5>Storage Charges:</h5>";
document.getElementById("resu1.2").innerHTML = " ";
document.getElementById("resu1.3").innerHTML = " ";

$('#free1').val(" ")
// document.getElementById("free1").innerHTML = " ";
}


function calFreeSt(nextDate, obj = "") {

    removeStpackage();

    document.getElementById("resu1").innerHTML = "<h5>Storage Charges:</h5>";
    document.getElementById("resu1.2").innerHTML = " ";
    document.getElementById("resu1.3").innerHTML = " ";


    dis = document.getElementById("discharge");
    cons = document.getElementById("cons");

    var StFree = new Date(dis.value);
    var date2 = new Date(cons.value);

    StFree.setDate(StFree.getDate() + parseInt(nextDate) - 1);

        console.log(StFree);


    var Time = date2.getTime() - StFree.getTime();
        console.log("TIME: " + Time);

    // To calculate the no. of days between two dates
    StDays = (Time / (1000 * 3600 * 24)) + 1;
    
        console.log("Storage Days: " + StDays);

        if(StDays<=0){
            document.getElementById("sub1").disabled = true;
            // $("#sub").disabled = true;
            console.log("Disabled");

            let curr = $('#currency1 :selected').val();

            if(curr == "INR"){
                document.getElementById("resu1").innerHTML = "<h5><b>Storage Charges: </b> 0₹ </h5>";
                document.getElementById("resu1.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu1.3").innerHTML = "<p>0</p>";
            }
            else{
                document.getElementById("resu1").innerHTML = "<h5><b>Storage Charges: </b> 0$</h5>";
                document.getElementById("resu1.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu1.3").innerHTML = "<p>0</p>";
            }


        }
        else if(StDays>0){
            document.getElementById("sub1").disabled = false;
            console.log("Enabled");

        }


        difference = parseInt(nextDate) + StDays; 

        console.log("Min: " + nextDate);
        console.log("Max: " + difference)


    if(obj!="" && obj!=undefined)
    {
        rangeDays =0;
        if (obj.value < 0)
        {
        $(obj).val('');
        return false;
        }
    }

        if(StDays>0){
        addLabelSt();
        createStoragePackage(++nextDate);
        }

}



// function updateFrom(obj){
//  console.log("obj : "+(++obj));
//  $("#fromSt1").val(obj);
// }



var formattedToday;
var today;
var yyyy;
var mm;
var dd;
var m;
var d;


// var formattedToday2;


// function checkDays(d, m, year){
//     if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
//     console.log("No of Days : 31");
//         if(d>31){
//             d = d-31;
//             m = m+1;
//             console.log("Date : "+d);
//             console.log("Month : "+m);
//         }
//     }
    
//     else if(m==4||m==6||m==9||m==11){
//     console.log("No of Days : 30");
//         if(d>30){
//             d = d-30;
//             m = m+1;
//             console.log("Date : "+d);
//             console.log("Month : "+m);
//         }
//     }

//     else if(m==2){
//         if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//         console.log("No of Days : 29");
//             if(d>29){
//                 d = d-29;
//                 m = m+1;
//                 console.log("Date : "+d);
//             console.log("Month : "+m);
//             }
//         }
//         else{
//             console.log("No of Days : 28");
//                 if(d>29){
//                     d = d-29;
//                     m = m+1;            
//                     console.log("Date : "+d);
//             console.log("Month : "+m);
//                 }
//         }
//     }

//     return(d, m, yyyy);
// }     



function createStoragePackage(nextDate = "") {
            console.log("Hi : "+nextDate);
            i = $("#storage .packDimSt").length;
            ++i;
            if (i == 0 || i == "") {
                i = 1;
            }
            StDays = StDays-rangeDays;
            if(StDays<=0){
                return false;
                
            }


    


 today = new Date($("#cons").val());
 yyyy = today.getFullYear($("#cons").val());
 m = today.getMonth($("#cons").val()) + 1; // Months start at 0!
 d = today.getDate($("#cons").val()) + nextDate - 2;

//  if((d>30)||(m>12)){
//  checkDays(d, m, yyyy);
//  console.log(" Date : "+d+" Month : "+m+" Year : "+yyyy);
// }

if (d < 10) dd = '0' + d;
else dd = d;
if (m < 10) mm = '0' + m;
else mm = m;

formattedToday = dd + '/' + mm + '/' + yyyy;
console.log(formattedToday);


// document.getElementById('DATE').value = formattedToday;
            
            console.log(i);



            let htmlPackage = '';

            // addLabel();

            htmlPackage += `<div class="row g-3 align-items-center packDimSt" style=" margin-bottom: 12px;" id="packDimSt` + (i) + `">
    
        
    
    <div class="col col-lg-3" style="display: flex">
    <label for="fname" style="margin-right: 12px; margin-top: 6px;" class="form-label">`+i+`)</label> 
    <input type="number" class="form-control get_rangeSt" id="rangeSt`+ i + `" placeholder=" ${StDays} "  min="1"  max="` + StDays + `"  onchange=" ">
    </div>
    <div class="col col-lg-3">

    <input type="text" class="form-control get_fromSt" id="fromSt`+ i + `" placeholder="0" readonly value="`+formattedToday+`">
    </div>


     <div class="col col-lg-3">

     <input type="text" class="form-control get_toSt" id="toSt`+ i + `" placeholder="0" readonly value="">
     </div>
       <div class="col col-lg-2">

      <input type="number" class="form-control get_rateSt" id="rateSt`+ i + `" placeholder="0" min="0" >
     </div>
     <div class="col col-lg-1">

<div style="cursor:pointer" onclick = "caltoSt(${"rangeSt"+i},btnn${i});checkOverstaySt(${"rangeSt"+i}) " id="btnn${i}"> <img src="./assets/img/Icons/32x32.png" /></div>
</div>

     </div>`;


            $("#storage").append(htmlPackage);

        }

        function addLabelSt()
        {
            
            let htmlPackage = '';

            htmlPackage += `<div class="row g-3 align-items-center labelSt"  style="margin-top: 10px;">
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">Chargeable Days:</label><i class="fa fa-info-circle" style="font-size: medium; margin-left: 5px; padding-bottom: 12px;"  data-toggle="tooltip"
    title="The chargeable day (s) start from the day following the last day of free time."></i>
    </div>
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">From:</label>
    </div>


     <div class="col col-lg-3">
     <label for="lname" class="form-label" style="font-size: 12px">To:</label>
     </div>
       <div class="col col-lg-2">
      <label for="lname" class="form-label" style="font-size: 12px">Charges:</label>
     </div>

     </div>`;


            $("#storage").append(htmlPackage);

        }

        // function updateValue(obj, next){
        //     console.log("value Updated" + obj.value);
        //     var x;
        //     var y;
        //     // $("#toSt"+i).val(v);
        //     x = parseInt(obj.value);
        //     console.log(x);
        //     y = parseInt(next);
        //     console.log(y);

  

        // }


        function caltoSt(objid,btnid){
             console.log("CAL TO ST")
             console.log("BTBN ID",btnid)
             console.log(objid.id)
            let obj = 0
              
            
                console.log("NOT NUNN",objid.id)
                
                obj = $(`#${objid.id}`).val()
                 
                 if(obj !== 0 ){
                    $(`#${btnid.id}`).hide()
                                    console.log("CHANGE VALUE", obj)
                
          
         

            console.log("ksh");

let  dd2 = d + parseInt(obj) - 1;

console.log("DATE :" +  d);
console.log("DATE 2 :" +  parseInt(obj));

let mm2 = m;

console.log("d : "+dd2);
console.log("m : "+mm2);

if (dd2 < 10) dd2 = '0' + dd2;
if (mm2 < 10) mm2 = '0' + mm2;

console.log("d : "+dd2);
console.log("m : "+mm2);

const formattedToday2 = dd2 + '/' + mm2 + '/' + yyyy;
console.log(formattedToday2);
        // $("#rangeSt"+i).readOnly = true;
        $(`#${objid.id}`).prop( "disabled", true );
            console.log("input Disabled : " +i);
            // $("#rangeSt"+i).val(formattedToday2);
            $("#toSt"+i).val(formattedToday2);
            console.log(formattedToday2)
                // alert("The text has been changed.");
          



                 }
                
 

            }
         
            
            
            
     


        var r;



        function checkOverstaySt(objs) {
              

            let obj = $(`#${objs.id}`).val()

            let min = objs.min;
            let max = objs.max;


            if (parseInt(obj) > parseInt(max) || parseInt(obj) < parseInt(min)) {
                $(obj).val('');
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
                $(obj).parents(".packDimSt").nextAll(".packDimSt").remove();
                return false;
            }
            else {
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
            }


            var a;
            $(obj).parents(".packDimSt").nextAll(".packDimSt").remove();
            var final = difference - obj;
            console.log(a);
            console.log(final);
            console.log(difference);

            i = $("#storage .packDimSt").length;
            // New Code
            var fromVal = parseInt($('#fromSt'+i).val());
            rangeDays = parseInt(obj);
            console.log("Range Days: "+rangeDays);
            console.log("from: "+fromVal);
            var v;
            v = fromVal + rangeDays - 1;
            a = fromVal + rangeDays;
            console.log("v: "+v);
            console.log("i: "+i);
            console.log("#toSt"+i);

            r = parseInt(obj);

            // $("#fromSt"+j).val(v);



            if (final > 0) {
                createStoragePackage((a));

            }

            console.log("a : "+a);



        }



        function removeStpackage(){
            $(".packDimSt").remove();
            $(".labelSt").remove();
        }


        

        function storageCal() {

            var sum = 0;
            var product = 1; 
            var diff = 0;
            let curr = $('#currency1 :selected').val();

           console.log("start");
            $("#storage .packDimSt").each(function () {
                let range = parseInt($(this).find(".get_rangeSt").val());
                console.log("range : " + range);
                // let to = parseInt($(this).find(".get_toSt").val());
                // let from = parseInt($(this).find(".get_fromSt").val());
                let rate = parseInt($(this).find(".get_rateSt").val());
                console.log("RATE OF ST",rate);
                // diff = to - from + 1;
                product = range*rate;
                sum = sum + product;
                console.log(sum, product, range);


            });

            if(sum=="" || sum ==null)
            {
                document.getElementById("resu1").innerHTML="<h5><b>Storage Charges: 0 </b><h5>";
                
                return false;
            }
            if(curr == "INR"){
                document.getElementById("resu1").innerHTML = "<h5><b>Storage Charges: </b> " + sum + "₹ </h5>";
                document.getElementById("resu1.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu1.3").innerHTML = "<p>" + sum + "</p>";
            }
            else{
                document.getElementById("resu1").innerHTML = "<h5><b>Storage Charges: </b> " + sum + "$</h5>";
                document.getElementById("resu1.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu1.3").innerHTML = "<p>" + sum + "</p>";
            }
        }



        var Dewell;
        var overstay;
        var i = 1;
        var free;
        var from;
        var final;

        function demurrageCal() {

            var sum = 0;
            var product = 1; 
            let curr = $('#currency2 :selected').val();
            

           console.log("start");
            $("#demurrage .packDim").each(function () {
                let range = parseInt($(this).find(".get_range").val());
                let rate = parseInt($(this).find(".get_rate").val());
                console.log(range, rate);
                product = range*rate;
                sum = sum + product;
                console.log(sum, product, range);



            });

            if(sum=="" || sum ==null)
            {
                document.getElementById("resu2").innerHTML="";
                
                return false;
            }
            if(curr == "INR"){
                document.getElementById("resu2").innerHTML = "<h5><b>Demmurage charges:</b> " + sum + "₹ </h5>";
                document.getElementById("resu2.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu2.3").innerHTML = "<p>" + sum + "</p>";
            }
            else{
                document.getElementById("resu2").innerHTML = "<h5><b>Demmurage charges:</b> " + sum + "$</h5>";
                document.getElementById("resu2.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu2.3").innerHTML = "<p>" + sum + "</p>";
            }
        }


        function calDewell() {

            dis = document.getElementById("discharge");
            consi = document.getElementById("cons");

            var date1 = new Date(dis.value);
            var date2 = new Date(consi.value);

            // console.log(date1);


            // console.log("Date New : " + (date1.addDays(7)));
    

            // To calculate the time difference of two dates
            var Time = date2.getTime() - date1.getTime();
            console.log("TIME: " + Time);

            // To calculate the no. of days between two dates
            Dewell = Time / (1000 * 3600 * 24) + 1;
            console.log("DWELL TIME: " + Dewell + " days");



            
        }

        function calOverstay(nextDate, obj="") {

            // free = document.getElementById("free2");
            removepackage();

            document.getElementById("resu2").innerHTML = "<h5>Storage Charges:</h5>";
            document.getElementById("resu2.2").innerHTML = " ";
            document.getElementById("resu2.3").innerHTML = " ";

            calDewell();

            final = Dewell;
            console.log("final:"+final);


            overstay = Dewell - nextDate;
            
            final = final - nextDate;
            console.log("final:"+final);
            
            console.log("OVERSTAY: " + overstay + " days");
            $("#demurrage .packDim").remove();

            if(overstay<=0){
            document.getElementById("tSum2").disabled = true;
            // $("#sub").disabled = true;
            console.log("Disabled");

            let curr = $('#currency2 :selected').val();

            if(curr == "INR"){
                document.getElementById("resu2").innerHTML = "<h5><b>Demurrage Charges: </b> 0₹ </h5>";
                document.getElementById("resu2.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu2.3").innerHTML = "<p>0</p>";
            }
            else{
                document.getElementById("resu2").innerHTML = "<h5><b>Demurrage Charges: </b> 0$</h5>";
                document.getElementById("resu2.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu2.3").innerHTML = "<p>0</p>";
            }



        }
        else if(overstay>0){
            document.getElementById("tSum2").disabled = false;
            console.log("Enabled");

        }




    if(nextDate!="" && nextDate!=undefined)
    {
        rangeDays =0;
        if (obj.value < 0) 
        {
        $(obj).val('');
        return false;
        }

        else if (overstay>0){
            addLabel();
            createPackage((++nextDate));
            console.log("New Package Created!!");
            console.log(obj.value);
        }

    }

        }

    //  if(obj!="" && obj!=undefined)
    // {
    //     rangeDays =0;
    //     if (obj.value < 0)
    //     {
    //     $(obj).val('');
    //     return false;
    //     }
    // }

    //     if(StDays>0){
    //     addLabelSt();
    //     createStoragePackage(++nextDate);
    //     }



    //         if (overstay > 0) {

    //         }
    //     }

        function removepackage(){
            $(".packDim").remove();
            $(".label").remove();
        }



function resetDe(){

removepackage();

document.getElementById("resu2").innerHTML = "<h5>Demurrage Charges:</h5>";
document.getElementById("resu2.2").innerHTML = " ";
document.getElementById("resu2.3").innerHTML = " ";

$('#free2').val(" ")
// document.getElementById("free1").innerHTML = " ";
}





var formattedToday;
var today;
var yyyy;
var mm;
var dd;
var m;
var d;
        


        function createPackage(nextDate = "") {
            console.log("Hi");
            i = $("#demurrage .packDim").length;
            ++i;
            if (i == 0 || i == "") {
                i = 1;
            }
            console.log(i);

            today = new Date($("#discharge").val());
 yyyy = today.getFullYear($("#discharge").val());
 m = today.getMonth($("#discharge").val()) + 1; // Months start at 0!
 d = today.getDate($("#discharge").val()) + nextDate - 2;

if (d < 10) dd = '0' + d;
else dd = d;
if (m < 10) mm = '0' + m;
else mm = m;

formattedToday = dd + '/' + mm + '/' + yyyy;
console.log(formattedToday);




            let htmlPackage = '';

            // $("#avail2").innerHTML = "<p> Hi </p>";

            // document.getElementById("avail2").innerHTML="<h5><b>Available Days : " +final+ " </b><h5>";
        


            htmlPackage += `<div class="row g-3 align-items-center packDim" id="packDim` + (i) + `"  style="margin-bottom: 12px;">

    <div class="col col-lg-3"  style="display: flex">
    <label for="fname" style="margin-right: 12px; margin-top: 6px;" class="form-label">`+i+`)</label> 
    <input type="number" class="form-control get_range" id="range`+ i + `" placeholder="`+final+`"  min="1"  max="` + final + `"  onchange=" ">
    </div>

    <div class="col col-lg-3">

    <input type="text" class="form-control get_from" id="from`+ i + `" placeholder="0" readonly value="` + formattedToday + `">
    </div>

     <div class="col col-lg-3">

     <input type="text" class="form-control get_to" id="to`+i+`" readonly placeholder="0" value="">
     </div>
       <div class="col col-lg-2">

      <input type="number" class="form-control get_rate" id="rate`+ i + `" placeholder="0" min="0" >
     </div>
     <div class="col col-lg-1">
     <div style="cursor:pointer" onclick = "calto(${"range"+i},btnns${i});checkOverstay(${"range"+i}) " id="btnns${i}"> <img src="./assets/img/Icons/32x32.png" /></div>
     </div>
     </div>`;

            $("#demurrage").append(htmlPackage);

            // $("#avail2").innerHTML = "<p> Available Days : " + (Dewell - $("#from"+i).val() + 1) + "</p>";
        }


function calto(objid,btnid){

    console.log("CAL TO ST")
             console.log("BTBN ID",btnid)
             console.log(objid.id)
            let obj = 0
              
            
                console.log("NOT NUNN",objid.id)
                
                obj = $(`#${objid.id}`).val()
                 
                 if(obj !== 0 ){
                    $(`#${btnid.id}`).hide()
                    console.log("CHANGE VALUE", obj)}

console.log("ksh");

let  dd2 = d + parseInt(obj) - 1;
let mm2 = m;

console.log("d : "+dd2);
console.log("m : "+mm2);

if (dd2 < 10) dd2 = '0' + dd2;
if (mm2 < 10) mm2 = '0' + mm2;

console.log("d : "+dd2);
console.log("m : "+mm2);

var formattedToday2 = dd2 + '/' + mm2 + '/' + yyyy;
console.log(formattedToday2);

$("#"+objid.id).prop( "disabled", true );
console.log("input Disabled : " +i);

$("#to"+i).val(formattedToday2);

}

        function addLabel()
        {
            
            let htmlPackage = '';

            htmlPackage += `<div class="row g-3 align-items-center label" style="margin-top: 10px;">
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">Chargeable Days:</label><i class="fa fa-info-circle" style="font-size: medium; margin-left: 5px; padding-bottom: 12px;"  data-toggle="tooltip"
    title="The chargeable day (s) start from the day following the last day of free time."></i>
    </div>
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">From:</label>
    </div>


     <div class="col col-lg-3">
     <label for="lname" class="form-label" style="font-size: 12px">To:</label>
     </div>
       <div class="col col-lg-2">
      <label for="lname" class="form-label" style="font-size: 12px">Charges:</label>
     </div>

     </div>`;


     $("#demurrage").append(htmlPackage);
    
    }



        function checkOverstay(objs) {

            i = $("#demurrage .packDim").length;
            if (i == 0 || i == "") {
                i = 1;
            }

            let f = $("#from"+i).val();
            console.log("from:"+f);


            let obj = $(`#${objs.id}`).val()

            let min = objs.min;
            let max = objs.max;




            var t;
            t = parseInt(f) + parseInt(obj) - 1;

            if (parseInt(obj) > parseInt(max) || parseInt(obj) < parseInt(min)) {
                $(obj).val('');
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
                return false;
            }
            else {
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
            }

            var a = obj;
            $(obj).parents(".packDim").nextAll(".packDim").remove();
            final = final - a;
            console.log("final:"+final);
            
            if (final > 0) {
                createPackage((++t));
            }

            console.log(a);
        }


        var difference;
var DeDays;

function calFree(nextDate, obj="") {

    removeDtpackage();

    document.getElementById("resu3").innerHTML = "<h5>Storage Charges:</h5>";
    document.getElementById("resu3.2").innerHTML = " ";
    document.getElementById("resu3.3").innerHTML = " ";


    consi = document.getElementById("cons");
    retn = document.getElementById("retn");

    var DeFree = new Date(consi.value);
    var date3 = new Date(retn.value);

    DeFree.setDate(DeFree.getDate() + parseInt(nextDate) - 1);

        console.log(DeFree);

    var Time = date3.getTime() - DeFree.getTime();
        console.log("TIME: " + Time);

            // To calculate the no. of days between two dates
        DeDays = Time / (1000 * 3600 * 24);
        console.log("Detention Days: " + DeDays);

        difference = parseInt(nextDate) + DeDays; 

        overstay = difference - parseInt(nextDate);
        console.log("Overstay : " + overstay);

        if(overstay<=0){
            document.getElementById("sub").disabled = true;
            // $("#sub").disabled = true;
            console.log("Disabled");

            let curr = $('#currency3 :selected').val();

            if(curr == "INR"){
                document.getElementById("resu3").innerHTML = "<h5><b>Detention Charges: </b> 0₹ </h5>";
                document.getElementById("resu3.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu3.3").innerHTML = "<p>0</p>";
            }
            else{
                document.getElementById("resu3").innerHTML = "<h5><b>Detention Charges: </b> 0$</h5>";
                document.getElementById("resu3.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu3.3").innerHTML = "<p>0</p>";
            }


        }
        else if(overstay>0){
            document.getElementById("sub").disabled = false;
            console.log("Enabled");

        }
         

    
    if(obj!="" && obj!=undefined)
    {
        rangeDays =0;
        if (obj.value < 0)
        {
        $(obj).val('');
        return false;
        }
        // else if (obj.value>difference){
        //     document.getElementById("resu3").innerHTML="<h5><b>Detention Charges: Detention Charges Doesn’t Apply</b><h5>";
        //     return false;
        // }

    }




        if(DeDays>0){
        addLabelDt();
        createDetentionPackage(++nextDate);
        }
        // else
        // document.getElementById("resu3").innerHTML="<h5><b>Detention Charges: Detention Charges Doesn’t Apply</b><h5>";

}


function removeDtpackage(){
            $(".packDimDt").remove();
            $(".labelDt").remove();
        }


function resetDt(){

removeDtpackage();

document.getElementById("resu3").innerHTML = "<h5>Detention Charges:</h5>";
document.getElementById("resu3.2").innerHTML = " ";
document.getElementById("resu3.3").innerHTML = " ";

$('#free3').val(" ")
// document.getElementById("free1").innerHTML = " ";
}


var formattedToday;
var today;
var yyyy;
var mm;
var dd;
var m;
var d;
var n = 0;

function createDetentionPackage(nextDate = "") {
            console.log("Hi");
            i = $("#detention .packDimDt").length;
            i++
            if (i == 0 || i == "") {
                i = 1;
            }
            console.log("i : "+i);

            
            n = n + nextDate;

            today = new Date($("#cons").val());
 yyyy = today.getFullYear($("#cons").val());
 m = today.getMonth($("#cons").val()) + 1; // Months start at 0!
 d = today.getDate($("#cons").val()) + n - 2;
 console.log( d = today.getDate($("#cons").val()) + n - 2);
 console.log("date : "+d);
 console.log("check : "+n);

if (d < 10) dd = '0' + d;
else dd = d;
if (m < 10) mm = '0' + m;
else mm = m;

formattedToday = dd + '/' + mm + '/' + yyyy;
console.log(formattedToday);



            let htmlPackage = '';

            htmlPackage += `<div class="row g-3 align-items-center packDimDt" id="packDimDt` + (i) + `" style="margin-bottom: 12px;">

    <div class="col col-lg-3" style="display: flex">
    <label for="fname" style="margin-right: 12px; margin-top: 6px;" class="form-label">`+i+`)</label> 
    <input type="number" class="form-control get_rangeDt" id="rangeDt`+ i + `" placeholder="`+DeDays+`"  min="1"  max="` + DeDays + `"  onchange="">
    </div>


    <div class="col col-lg-3">

    <input type="text" class="form-control get_fromDt" id="fromDt`+ i + `" placeholder="0" readonly value="` + formattedToday + `">
    </div>

     <div class="col col-lg-3">

     <input type="text" class="form-control get_toDt" id="toDt`+ i + `" placeholder="0" readonly value="">
     </div>
       <div class="col col-lg-2">

      <input type="number" class="form-control get_rateDt" id="rateDt`+ i + `" placeholder="0" min="0" >
     </div>

     <div class="col col-lg-1">
     <div style="cursor:pointer" onclick = "caltoDt(${"rangeDt"+i},btnDe${i});checkOverstayDt(${"rangeDt"+i}) " id="btnDe${i}"> <img src="./assets/img/Icons/32x32.png" /></div>
     </div>

     </div>`;


            $("#detention").append(htmlPackage);

        }


        
function caltoDt(objid,btnid){

    
    console.log("CAL TO ST")
             console.log("BTBN ID",btnid)
             console.log(objid.id)
            let obj = 0
              
            
                console.log("NOT NUNN",objid.id)
                
                obj = $(`#${objid.id}`).val()
                 
                 if(obj !== 0 ){
                    $(`#${btnid.id}`).hide()
                    console.log("CHANGE VALUE", obj)}
console.log("ksh");

let  dd2 = d + parseInt(obj) - 1;
let mm2 = m;

console.log("d : "+dd2);
console.log("m : "+mm2);

if (dd2 < 10) dd2 = '0' + dd2;
if (mm2 < 10) mm2 = '0' + mm2;

console.log("d : "+dd2);
console.log("m : "+mm2);

var formattedToday2 = dd2 + '/' + mm2 + '/' + yyyy;
console.log(formattedToday2);

$("#"+objid.id).prop( "disabled", true );
console.log("input Disabled : " +i);

$("#toDt"+i).val(formattedToday2);

}



        function addLabelDt()
        {
            
            let htmlPackage = '';

            htmlPackage += `<div class="row g-3 align-items-center labelDt" style="margin-top: 10px;">
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">Chargeable Days:</label><i class="fa fa-info-circle" style="font-size: medium; margin-left: 5px; padding-bottom: 12px;"  data-toggle="tooltip"
    title="The chargeable day (s) start from the day following the last day of free time."></i>
    </div>
    <div class="col col-lg-3">
    <label for="fname" class="form-label" style="font-size: 12px">From:</label>
    </div>


     <div class="col col-lg-3">
     <label for="lname" class="form-label" style="font-size: 12px">To:</label>
     </div>
       <div class="col col-lg-2">
       <label for="lname" class="form-label" style="font-size: 12px">Charges:</label>
     </div>

     </div>`;

     $("#detention").append(htmlPackage);
    
    }



        function checkOverstayDt(objs) {

            let obj = $(`#${objs.id}`).val()

                let min = objs.min;
                let max = objs.max;

            if (parseInt(obj) > parseInt(max) || parseInt(obj) < parseInt(min)) {
                $(obj).val('');
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
                return false;
            }
            else {
                console.log("min:", min);
                console.log("max:", max);
                console.log("obj:", obj);
            }

            console.log("i : "+i);

            DeDays = DeDays - parseInt(obj);

            let f = $("#fromDt"+(i)).val();

            console.log("f : "+f);

            var a = parseInt(obj);

            console.log("a : "+a);

            // $("#toDt"+i).val(a);


            $(obj).parents(".packDimDt").nextAll(".packDimDt").remove();
            var final = difference - a;


            if (DeDays > 0) {
                createDetentionPackage(a);

            }

            console.log(a);


        }

        

        function detentionCal() {

            var sum = 0;
            var product = 1; 
            var diff = 0;
            let curr = $('#currency3 :selected').val();

           console.log("start");
            $("#detention .packDimDt").each(function () {
                let range = parseInt($(this).find(".get_rangeDt").val());
                // let to = parseInt($(this).find(".get_toDt").val());
                // let from = parseInt($(this).find(".get_fromDt").val());
                let rate = parseInt($(this).find(".get_rateDt").val());
                console.log(range, rate);
                product = range*rate;
                sum = sum + product;
                console.log(sum, product, range);
            });

            if(sum=="" || sum ==null)
            {
                document.getElementById("resu3").innerHTML="";
                
                return false;
            }
            if(curr == "INR"){
                document.getElementById("resu3").innerHTML = "<h5><b>Detention Charges:</b> " + sum + "₹ </h5>";
                document.getElementById("resu3.2").innerHTML = "<p> ₹ </p>";
                document.getElementById("resu3.3").innerHTML = "<p>" + sum + "</p>";
            }
            else{
                document.getElementById("resu3").innerHTML = "<h5><b>Detention Charges:</b> " + sum + "$</h5>";
                document.getElementById("resu3.2").innerHTML = "<p> $ </p>";
                document.getElementById("resu3.3").innerHTML = "<p>" + sum + "</p>";
            }
        }


        
