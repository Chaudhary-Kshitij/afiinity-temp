$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  var bannedDomains = [
    "gmail.com",
    "mail.com",
    "Gmail.com",
    "yahoo.com",
    "Yahoo.com",
    "hotmail.com",
    "Hotmail.com",
    "aol.com",
    "Aol.com",
    "outlook.com",
    "Outlook.com",
    "hotmail.co.uk",
    "Hotmail.co.uk",
    "hotmail.fr",
    "Hotmail.fr",
    "msn.com",
    "Msn.com",
    "yahoo.fr",
    "wanadoo.fr",
    "Wanadoo.fr",
    "orange.fr",
    "Orange.fr",
    "comcast.net",
    "Comcast.net",
    "yahoo.co.uk",
    "Yahoo.co.uk",
    "yahoo.com.br",
    "Yahoo.com.br",
    "yahoo.co.in",
    "Yahoo.co.in",
    "live.com",
    "Live.com",
    "rediffmail.com",
    "Rediffmail.com",
    "free.fr",
    "Free.fr",
    "gmx.de",
    "Gmx.de",
    "web.de",
    "Web.de",
    "yandex.ru",
    "Yandex.ru",
    "ymail.com",
    "Ymail.com",
    "libero.it",
    "Libero.it",
    "outlook.com",
    "Outlook.com",
    "uol.com.br",
    "Uol.com.br",
    "bol.com.br",
    "Bol.com.br",
    "mail.ru",
    "Mail.ru",
    "cox.net",
    "Cox.net",
    "hotmail.it",
    "Hotmail.it",
    "sbcglobal.net",
    "Sbcglobal.net",
    "sfr.fr",
    "Sfr.fr",
    "live.fr",
    "Live.fr",
    "verizon.net",
    "Verizon.net",
    "live.co.uk",
    "Live.co.uk",
    "googlemail.com",
    "Googlemail.com",
    "yahoo.es",
    "Yahoo.es",
    "ig.com.br",
    "Ig.com.br",
    "live.nl",
    "Live.nl",
    "bigpond.com",
    "Bigpond.com",
    "terra.com.br",
    "Terra.com.br",
    "yahoo.it",
    "Yahoo.it",
    "neuf.fr",
    "Neuf.fr",
    "yahoo.de",
    "Yahoo.de",
    "alice.it",
    "Alice.it",
    "rocketmail.com",
    "Rocketmail.com",
    "att.net",
    "Att.net",
    "laposte.net",
    "Laposte.net",
    "facebook.com",
    "Facebook.com",
    "bellsouth.net",
    "Bellsouth.net",
    "yahoo.in",
    "Yahoo.in",
    "hotmail.es",
    "Hotmail.es",
    "charter.net",
    "Charter.net",
    "yahoo.ca",
    "Yahoo.ca",
    "yahoo.com.au",
    "Yahoo.com.au",
    "rambler.ru",
    "Rambler.ru",
    "hotmail.de",
    "Hotmail.de",
    "tiscali.it",
    "Tiscali.it",
    "shaw.ca",
    "Shaw.ca",
    "yahoo.co.jp",
    "Yahoo.co.jp",
    "sky.com",
    "Sky.com",
    "earthlink.net",
    "Earthlink.net",
    "optonline.net",
    "freenet.de",
    "Freenet.de",
    "t-online.de",
    "T-online.de",
    "aliceadsl.fr",
    "Aliceadsl.fr",
    "virgilio.it",
    "Virgilio.it",
    "home.nl",
    "Home.nl",
    "qq.com",
    "Qq.com",
    "telenet.be",
    "Telenet.be",
    "me.com",
    "Me.com",
    "yahoo.com.ar",
    "Yahoo.com.ar",
    "tiscali.co.uk",
    "Tiscali.co.uk",
    "yahoo.com.mx",
    "Yahoo.com.mx",
    "voila.fr",
    "Voila.fr",
    "gmx.net",
    "Gmx.net",
    "mail.com",
    "Mail.com",
    "planet.nl",
    "Planet.nl",
    "tin.it",
    "Tin.it",
    "live.it",
    "Live.it",
    "ntlworld.com",
    "Ntlworld.com",
    "arcor.de",
    "Arcor.de",
    "yahoo.co.id",
    "Yahoo.co.id",
    "frontiernet.net",
    "Frontiernet.net",
    "hetnet.nl",
    "Hetnet.nl",
    "live.com.au",
    "Live.com.au",
    "yahoo.com.sg",
    "Yahoo.com.sg",
    "zonnet.nl",
    "Zonnet.nl",
    "club-internet.fr",
    "Club-internet.fr",
    "juno.com",
    "Juno.com",
    "optusnet.com.au",
    "Optusnet.com.au",
    "blueyonder.co.uk",
    "Blueyonder.co.uk",
    "bluewin.ch",
    "Bluewin.ch",
    "skynet.be",
    "Skynet.be",
    "sympatico.ca",
    "Sympatico.ca",
    "windstream.net",
    "Windstream.net",
    "mac.com",
    "Mac.com",
    "centurytel.net",
    "Centurytel.net",
    "chello.nl",
    "Chello.nl",
    "live.ca",
    "Live.ca",
    "aim.com",
    "Aim.com",
    "bigpond.net.au",
    "Bigpond.net.au",
  ];

  $.validator.addMethod(
    "domainNotBanned",
    function (value, _elem, _param) {
      var domain = value.split("@")[1];
      return bannedDomains.indexOf(domain) < 0;
    },
    "<p style='color:red; margin-top: -5px;'>You have to use company email (Ex.official@company.com).</p>"
  );

  // // Banning specific addresses
  // var bannedEmails = ["skygoal@gmail.com", "abc@gmail.com"];

  // $.validator.addMethod('emailNotBanned', function(value, elem, param) {
  // return bannedEmails.indexOf(value) < 0;
  // }, 'This email address is banned.');

  // Contact-us-validation //

  $(".btn").click(function () {
    console.log("Contact us form is working");
    var form = $("#affinity");

    form.validate({
      errorElement: "span",
      errorClass: "help-block",
      highlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").addClass("has-error");
      },
      unhighlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").removeClass("has-error");
      },
      
      rules: {
        email: {
          email: true,
          required: true,        
          domainNotBanned: true,
        },
        First_Name: {
            required: true,        
        
        },
        Last_Name: {
            required: true,       
        
        },
        phone: {
            required: true,
        
        },
        enquiry: {
            required: true,
        
        },
        message: {
            required: true,
        
        },
        country: {
          required: true,
        },
        state: {
          required: true,
        },
        city: {
          required: false,
        },
        zipCode: {
          required: true,
        },
        company_name: {
          required: true,
        },
        website_url: {
          required: true,
        },
        _Area:{
          required:true,
        },
        _Street:{
          required:true,
        },
        _Zipcode:{
          required:true,
        },
      },
      messages: {
        email: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        Last_Name: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        First_Name: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        phone: {
            required: "<p style='color:red;'>* Required</h1>",
        },
        enquiry: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        message: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        country: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        state: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        city: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        zipCode: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        company_name: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        website_url: {
          required: "<p style='color:red; '>* Required</h1>",
        },_Area:{
          required:"<p style='color:red; '>* Required</h1>",
        },_Street:{
          required:"<p style='color:red; '>* Required</h1>",
        },
        _Zipcode:{
          required:"<p style='color:red; '>* Required</h1>",
        },
      }
    });


    if(form.valid() === true){

      const scriptURL = 'https://sheetdb.io/api/v1/nccwzmaajsgg4'
    const form = document.forms['affinity']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => location.reload())
            .catch(error => console.error('Error!', error.message))
    })


    }
  });




  $(".btn").click(function () {
    console.log("Contact us form is working");
    var form = $("#affinity");

    form.validate({
      errorElement: "span",
      errorClass: "help-block",
      highlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").addClass("has-error");
      },
      unhighlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").removeClass("has-error");
      },
      
      rules: {
        email: {
          email: true,
          required: true,        
          domainNotBanned: true,
        },
        First_Name: {
            required: true,        
        
        },
        Last_Name: {
            required: true,       
        
        },
        phone: {
            required: true,
        
        },
        enquiry: {
            required: true,
        
        },
        message: {
            required: true,
        
        },
        country: {
          required: true,
        },
        state: {
          required: true,
        },
        city: {
          required: false,
        },
        zipCode: {
          required: true,
        },
        company_name: {
          required: true,
        },
        website_url: {
          required: true,
        },
        _Area:{
          required:true,
        },
        _Street:{
          required:true,
        },
        _Zipcode:{
          required:true,
        },
      },
      messages: {
        email: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        Last_Name: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        First_Name: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        phone: {
            required: "<p style='color:red;'>* Required</h1>",
        },
        enquiry: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        message: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        country: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        state: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        city: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        zipCode: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        company_name: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        website_url: {
          required: "<p style='color:red; '>* Required</h1>",
        },_Area:{
          required:"<p style='color:red; '>* Required</h1>",
        },_Street:{
          required:"<p style='color:red; '>* Required</h1>",
        },
        _Zipcode:{
          required:"<p style='color:red; '>* Required</h1>",
        },
      }
    });


    if(form.valid() === true){

      const scriptURL = 'https://script.google.com/macros/s/AKfycbxBOtVFr-NZ1umoFl3ce3RyqlrnCy69Gh1P41MGe41Dvy2zmeMO07zhwbm3yEOIUe-I0w/exec'
    const form = document.forms['affinity']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => location.reload())
            .catch(error => console.error('Error!', error.message))
    })


    }
  });



  $(".next").click(function () {
    console.log("test");

    var form2 = $("#msform");

    form2.validate({
      errorElement: "span",
      errorClass: "help-block",
      highlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").addClass("has-error");
      },
      unhighlight: function (element, _errorClass, _validClass) {
        $(element).closest(".form-group").removeClass("has-error");
      },
      rules: {
        firstname: {
          required: true,
        },
        middlename: {
          required: false,
        },
        lastName: {
          required: true,
        },
        emailid: {
          required: true,
          email: true,
          domainNotBanned: true,
        },
        companyname: {
          required: true,
        },
        name: {
          required: true,
          // emailRegex: true,
        },
        email: {
          email: true,
          domainNotBanned: true,
        },
        address: {
          required: true,
        },
        Whatsapp: {
          required: true,
        },
        customertype: {
          required: true,
        },
        Country: {
          required: true,
        },
        inputState: {
          required: true,
        },
        City: {
          required: false,
        },
        Zipcode: {
          required: true,
        },
        CommodityNature: {
          required: true,
        },
        commodity: {
          required: true,
        },
        hsncode: {
          required: true,
        },
        unnumber: {
          required: true,
        },
        Estimated_Total_Weight: {
          required: true,
        },
        Estimated_Volumes: {
          required: true,
        },
        Estimated_Date_Of_Ship: {
          required: true,
        },
        remarks: {
          required: true,
        },
        shippingmode: {
          required: true,
        },
        shippingtype: {
          required: true,
        },
        container_type: {
          required: true,
        },
        container_size: {
          required: true,
        },
        quantities_2: {
          required: true,
        },
        country_of_origin: {
          required: true,
        },
        place_of_receipt: {
          required: true,
        },
        port_of_loading: {
          required: true,
        },
        country_of_destination: {
          required: true,
        },
        port_of_discharge: {
          required: true,
        },
        place_of_delivery: {
          required: true,
        },
        freignt: {
          required: true,
        },
      },
      messages: {
        firstname: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        middlename: {
          required: "<p style='color:green; margin-top: -20px;'>Optional</h1>",
        },
        lastName: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        emailid: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        companyname: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        name: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        email: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        address: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Whatsapp: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        customertype: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Country: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        inputState: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        City: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Zipcode: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        CommodityNature: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        commodity: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        hsncode: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        unnumber: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Estimated_Total_Weight: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Estimated_Volumes: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        Estimated_Date_Of_Ship: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        remarks: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        shippingmode: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        shippingtype: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        container_type: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        container_size: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        quantities_2: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        country_of_origin: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        place_of_receipt: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        port_of_loading: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        country_of_destination: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        port_of_discharge: {
          required: "<p style='color:red; margin-top: -20px;'>* Required</h1>",
        },
        place_of_delivery: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        freignt: {
          required: "<p style='color:red;'>* Required</h1>",
        },
      },
    });

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    if (form2.valid() === true) {
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 500,
        }
      );

      setProgressBar(++current);
    }


    // $(".submit").click(function(){
    //   return false;
    // })

  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  


});
