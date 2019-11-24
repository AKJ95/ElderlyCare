'use strict';



    document.getElementById('signUpForm').addEventListener('submit', async function(event){
      event.preventDefault();
      
      try{
        let firstname_ = document.getElementById('signUpFirstName').value;
        let lastname_ = document.getElementById('signUpLastName').value;
        let username_ = document.getElementById('signUpUsername').value;
        let password_ = document.getElementById('signUpPassword').value;
        let birthday_ = document.getElementById('signUpBirthday').value;
        let address_ = document.getElementById('signUpAddress').value;
        let postCode_ = document.getElementById('signUpPostCode').value;
        let contactNumber_ = document.getElementById('signUpContactNumber').value;
        let medicalHistory_ = document.getElementById('signUpMedicalHistory').value;
      
        let response = await fetch('https://elderly-care.herokuapp.com/signup',
          {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"},
            body:`firstname=${firstname_}&lastname=${lastname_}&username=${username_}&password=${password_}&birthday=${birthday_}&address=${address_}&postCode=${postCode_}&contactNumber=${contactNumber_}&medicalHistory=${medicalHistory_}`
            
          });
        if(!response.ok){
          throw new Error("problem: " + response.code);
        }
        let body = await response.text();
        let list1 = JSON.parse(body);
        document.getElementById('alertSection').innerHTML += '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>You have signed up!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        document.getElementById('signUpFirstName').value = '';
        document.getElementById('signUpLastName').value = '';
        document.getElementById('signUpUsername').value = '';
        document.getElementById('signUpPassword').value = '';
        document.getElementById('signUpBirthday').value = '';
        document.getElementById('signUpAddress').value = '';
        document.getElementById('signUpPostCode').value = '';
        document.getElementById('signUpContactNumber').value = '';
        document.getElementById('signUpMedicalHistory').value = '';

        $('html,body').scrollTop(0);
        } 
      catch (error){
        document.getElementById('alertSection').innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Sorry, sign up was unsuccessful.</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        $('html,body').scrollTop(0);
      }});


