

var app = angular.module('formApp', []);
 
  app.controller('Main', function ($scope) {
    /* 
      Test Data
    */
    $scope.formData = {
      nombre: 'Ana',
      email: 'ana@test.com',
      contrasena: '12345',
      contrasena2: '12345'
    };

    $scope.subscribed = false;

    $scope.submitForm = function () {
      console.log("Form Data");
      console.log(JSON.stringify($scope.formData));

      if (validar_clave()) {
        console.log('Subscribed')
        $scope.subscribed = true;
      }

    };

    $scope.reset = function() {
      $scope.subscribed = false;
    }


    var validar_clave = function() {
      if ($scope.formData.contrasena === $scope.formData.contrasena2) {
        alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo") 
        return true;
      } else {
        alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo") 
        return false;
      }
    }

  });


/* 
  function validar_clave(){ 
    clave1 = document.login_container.contrasena.value 
    clave2 = document.login_container.rcontrasena.value 

    if (clave1 == clave2) 
        alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo") 
    else 
        alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo") 
}
*/



 