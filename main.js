window.onload = () => {

    let $firstSquare = $("#sq0");
    let $lastSquare = $("#sq19");
    let $squares = $(".square");

    $firstSquare.append($('<img>', { class: 'goku', src: 'https://i.imgur.com/VAOJm51.png' }));
    $lastSquare.append($('<img>', { class: 'badGuy', src: 'https://i.imgur.com/2UFPiQG.png' }));

    let movesMade = 0;

    $(function () {
        $("#draggable").draggable({ containment: "#containment-wrapper", scroll: false, axis: "y,x", revert: true });
        $("#draggable").selectable();
    });

    const startGame = () => {
        $(".square").droppable({
            accept: '#draggable',
            over: (function (event, ui) {
                console.log($(event.target).index());
                $(this).addClass('highlighter');
                if (movesMade == 7) {
                    checkRightPath();
                    $(".badGuy").toggle("bounce", { times: 3 }, "slow");
                }
                movesMade++;
                console.log(movesMade);
            })
        });
    }
    startGame();

    const checkRightPath = () => {
        let moves = [...$(".highlighter")];
        let results = moves.map(function (square) {
            return $squares.index(square);
        });
        console.log(results);

        const kamehaPath = [
            [0, 1, 2, 3, 4, 9, 14, 19],
            [0, 5, 10, 15, 16, 17, 18, 19]

        ];
        for(let i = 0; i < kamehaPath.length; i++) {

        if ((results[0] === kamehaPath[i][0]) &&
            (results[1] === kamehaPath[i][1]) &&
            (results[2] === kamehaPath[i][2]) &&
            (results[3] === kamehaPath[i][3]) &&
            (results[4] === kamehaPath[i][4]) &&
            (results[5] === kamehaPath[i][5]) &&
            (results[6] === kamehaPath[i][6]) &&
            (results[7] === kamehaPath[i][7])) {
            console.log("combo works");
            return true;
        } else {
            console.log("combo is not working");
            return false;

        }
    }
}






//     const kamehaPath = [ 
//         [0, 1, 2, 3, 4, 9, 14, 19],
//         [0, 5, 10, 15, 16, 17, 18, 19]
//     ];
//     return kamehaPath.find((combo) => {
//     if (
//      (results[combo[0]] === results[combo[1]]) &&
//      (results[combo[1]] === results[combo[2]]) &&
//      (results[combo[2]] === results[combo[3]]) &&
//      (results[combo[3]] === results[combo[4]]) &&
//      (results[combo[4]] === results[combo[5]]) &&
//      (results[combo[5]] === results[combo[6]]) &&
//      (results[combo[6]] === results[combo[7]]) 
//        ) {
//         console.log("combo works");
//             return true;
//     } else {
//         console.log("combo is not working");
//         return false;

//     }
// });
//     }















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