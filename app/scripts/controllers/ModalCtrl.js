(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.submit = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.setUsername = function () {
            $cookies.put('blocChatCurrentUser', modal.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();