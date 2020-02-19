window.onload = () => {

    let $firstSquare = $("#sq0");
    let $lastSquare = $("#sq19");

    $firstSquare.css('background-image', "url('https://i.imgur.com/VAOJm51.png')");
    $firstSquare.css('background-size', "cover");
    $lastSquare.css('background-image', "url('https://i.imgur.com/2UFPiQG.png')"); 
    // && 'display', "none"
    $lastSquare.css('background-size', "cover");


    let movesMade = 0;

   
    
    $(function() {
        $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false, axis: "y,x", revert: true});
        $("#draggable").selectable();
      });

      

    $(".square").droppable({
            accept: '#draggable',
            over: (function() {
               $(this).addClass('highlighter');
               $(this).css('display', "auto");
               movesMade++;
            })   
        });


        const checkRightPath = () => {
            if (movesMade > 7) {
                let moves = Array.prototype.slice.call($(".square"));
                let results = moves.map(function (square) {
                    return square.innerHTML;
                });
    
                const kamehaPath = [
                    "0, 1, 2, 3, 4, 9, 14, 19",
                    "0, 5, 10, 15, 16, 17, 18, 19",
                    "0, 1, 6, 11, 16, 17, 18, 19",
                    "0, 5, 6, 11, 16, 17, 18, 19",
                    "0, 5, 10, 11, 16, 17, 18, 19",
                    "0, 1, 2, 7, 12, 17, 18, 19",
                    "0, 1, 6, 7, 12, 17, 18, 19",
                    "0, 1, 6, 11, 12, 17 18, 19",
                    "0, 1, 2, 3, 8, 13, 18, 19",
                    "0, 1, 2, 7, 8, 13, 18, 19",
                    "0, 1, 2, 7, 12, 13, 18, 19",
                    "0, 1, 2, 3, 4, 9, 14, 19",
                    "0, 1, 2, 3, 8, 9, 14, 19",
                    "0, 1, 2, 3, 8, 13, 14, 19"
                ];
    
                return kamehaPath.find((combo) => {
                    if (results[combo[0]] !== "" && results[combo[0]] === results[combo[1]] 
                    && results[combo[1]] === results[combo[2]] 
                    && results[combo[2]] === results[combo[3]] 
                    && results[combo[3]] === results[combo[4]]
                    && results[combo[4]] === results[combo[5]] 
                    && results[combo[5]] === results[combo[6]]
                    && results[combo[6]] === results[combo[7]]) {
                        return true;
                        console.log(results);
                    } else {
                        return false;
                    }
                });
            }
        }










    //      lastSquare.addEventListener("mouseenter", function( event ) { 
    //     event.target.style.display = auto;
    // }



        // $.fn.draggableXY = function(options) { 
        //     var defaultOptions = { 
        //       distance: 5, 
        //       dynamic: false 
        //     }; 
        //     options = $.extend(defaultOptions, options); 
          
        //     this.draggable({ 
        //       distance: options.distance, 
        //       start: function (event, ui) { 
        //         ui.helper.data('draggableXY.originalPosition', ui.position || {top: 0, left: 0}); 
        //         ui.helper.data('draggableXY.newDrag', true); 
        //       }, 
        //       drag: function (event, ui) { 
        //         var originalPosition = ui.helper.data('draggableXY.originalPosition'); 
        //         var deltaX = Math.abs(originalPosition.left - ui.position.left); 
        //         var deltaY = Math.abs(originalPosition.top - ui.position.top); 
          
        //         var newDrag = options.dynamic || ui.helper.data('draggableXY.newDrag'); 
        //         ui.helper.data('draggableXY.newDrag', false); 
          
        //         var xMax = newDrag ? Math.max(deltaX, deltaY) === deltaX : ui.helper.data('draggableXY.xMax'); 
        //         ui.helper.data('draggableXY.xMax', xMax); 
          
        //         var newPosition = ui.position; 
        //         if(xMax) { 
        //           newPosition.top = originalPosition.top; 
        //         } 
        //         if(!xMax){ 
        //           newPosition.left = originalPosition.left; 
        //         } 
          
        //         return newPosition; 
        //       } 
        //     }); 
        //   }; 
    
      


}

$(onload);