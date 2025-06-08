angular.module('app', [])
.controller('MensagemController', ['$scope', function($scope) {
    $scope.mensagens = [];
    $scope.envioMensagem = function() {
        if ($scope.textoDigitado && $scope.textoDigitado.trim() !== '') {
            $scope.mensagens.push({
                titulo: 'Você diz:',
                texto: $scope.textoDigitado
            });
            $scope.textoDigitado = '';
            setTimeout(() => {
                var mensagensDiv = document.querySelector('.mensagens');
                mensagensDiv.scrollTop = mensagensDiv.scrollHeight;
            }, 0);
        }
    };
    $scope.keyPress = function(event) {
        if(event.key === 'Enter') {
            event.preventDefault();
            $scope.envioMensagem();
        }
    };
}]);
