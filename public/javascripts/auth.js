$(function() {
    // clear
    function removeErrors() {
      $("p.error").remove();
      $("input").removeClass("error");
      $("textarea").removeClass("error");
    }
  
    $("input").on("focus", function() {
      removeErrors();
    });
  
    // registration
    $(".register-button").on("click", function(e) {
      e.preventDefault();
  
      removeErrors();
  
      var data = {
        login: $("#register-login").val(),
        password: $("#register-password").val(),
        passwordConfirm: $("#register-password-confirm").val()
      };
  
      $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        url: "/auth/registration"
      }).done(function(data) {
        if (!data.ok) {
          removeErrors();
  
          $(".register h1").after('<p class="error">' + data.error + "</p>");
          if (data.fields) {
            data.fields.forEach(function(item) {
              $("input[name=" + item + "]").addClass("error");
            });
          }
        } else {
          location.href = "/admin";
        }
      });
    });
  
    // login
    $(".login-button").on("click", function(e) {
      e.preventDefault();
  
      removeErrors();
  
      let data = {
        login: $("#login-login").val(),
        password: $("#login-password").val()
      };

      $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        url: "/auth"
      }).done(function(data) {        
        if (!data.ok) {
          removeErrors();
  
          $(".form-holder h1").after('<p class="error">' + data.error + "</p>");
          if (data.fields) {
            data.fields.forEach(function(item) {
              $("input[name=" + item + "]").addClass("error");
            });
          }
        } else {
          location.href = '/admin';
          
        }
      });
    });
});
  