(function() {
    function HomeCtrl(Room, $uibModal) {
        var home = this;
        
        home.rooms = Room.all;
        home.currentRoom = null;
        
        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
        home.setCurrentRoom = function(room) {
            home.currentRoom = room;
        }
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();