
//Contact Us Modal

var contactModal = document.getElementById('contactModal')
contactModal.addEventListener('contactModal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('InputEmail1')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  
  var modalBodyInput = contactModal.querySelector('.modal-body input')

  
  modalBodyInput.value = recipient
})
