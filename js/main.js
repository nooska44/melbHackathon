
$(".Addmore").click(function(again) {
    again.preventDefault();
    $("#objectives").append('<hr width="300px">');
    $("#objectives").append('<button class="objective styled" type="button"><i class="fa-solid fa-plus"></i></button>');
    $("#objectives").append('<input type="text" id="objectives-description" name="bjectives-description" placeholder="Objective Description">');
    // $("#objectives").append('<select name="difficulty-rating" id="difficulty">
	// 						// <option value="default">--Difficulty Rating--</option>
	// 						// <option value="easy">Easy</option>
	// 						// <option value="good">Good</option>
	// 						// <option value="hard">Hard</option>
	// 					</select>');

});

