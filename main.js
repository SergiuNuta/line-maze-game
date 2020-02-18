window.onload = () => {

    $(function() {
        // $("#draggable").draggable();
        $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false });
        $("#draggable").selectable();
      });

}