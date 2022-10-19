
$(document).ready(function () {




$(".btn").click(function () {
    console.log("careers form is working");
    var form = $("#carrer");

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
        salution:{
            required: true,
        },
        email: {
          email: true,
          required: true,        
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
        skill: {
            required: true,
        
        },
        experience_of_year: {
            required: true,
        
        },
        country: {
          required: true,
        },
        interest_level: {
          required: true,
        },
        resumes_url: {
          required: true,
        },
      },
      messages: {

        salution:{
            required: "<p style='color:red;'>* Required</h1>",
        },
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
        skill: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        experience_of_year: {
          required: "<p style='color:red;'>* Required</h1>",
        },
        country: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        interest_level: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        city: {
          required: "<p style='color:red; '>* Required</h1>",
        },
        resumes_url: {
          required: "<p style='color:red; '>* Required</h1>",
        },
      }
    });


    if(form.valid() === true){


    //   $.ajax({
    //     url:'https://api.apispreadsheets.com/data/D4NraNaBX8ADoQJ7/',
    //     type:'post',
    //     data:$("#carriers").serializeArray(),
    //     success: function(){
    //       alert("Form Data Submitted :)")
    //     },
    //     error: function(){
    //       alert("There was an error :(")
    //     }
    // });


      const scriptURL = 'https://sheetdb.io/api/v1/s4737a6dz8og2'
    const form = document.forms['carriers']

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

});