(function(){
    function ModalCtrl(Room, $uibModalInstance){
        var modal = this;
        
        modal.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        modal.submit = function() {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();