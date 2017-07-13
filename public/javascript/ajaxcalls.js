
//----------------------------
//POST REQUEST FOR LOGGING IN
//----------------------------

//Onclick for whatever submit button we use
$("#submit").on("click", function(){

	//Validating form, so blank fields aren't accepted
	function validate(){

		var isValid = true;

	  	$('.inputData').each(function() {
	    	if ( $(this).val() === '' )
	        isValid = false;
		});

	  	return isValid;
	};

	//Object data to send to server
	if (validate() == true)
	{
    	var userData =
    	{
    		email: $("#email").val(),
    		password: $("#password").val()
    	};

		var currentURL = window.location.origin;

		$.post(currentURL + "/api/login", userData, function(response){
			window.location.replace(response);
		});
	} else {
		alert("Please complete all fields.");
	}
	return false;
};



//-----------------------------
//GET REQUEST FOR SEARCHING DB
//-----------------------------

//Onclick for whatever submit button we use
$("#submit").on("click", function(){

	//Object data to request a search with
	var searchData =
	{
		location: $("#location").val()
	};

	var currentURL = window.location.origin;

	$.get(currentURL + "/search", searchData, function(response){
		window.location.replace(response);
	});
};


//-----------------------------
//POSTING REVIEWS
//-----------------------------
$("#submit").on("click", function(){

	//Validating form, so blank fields aren't accepted
	function validate(){

		var isValid = true;

	  	$('.inputData').each(function() {
	    	if ( $(this).val() === '' )
	        isValid = false;
		});

	  	return isValid;
	};

	//Object data to send to server
	if (validate() == true)
	{
    	var reviewData =
    	{
    		review: $("#review").val()
    	};

		var currentURL = window.location.origin;

		$.post(currentURL + "/api/reviews", reviewData, function(response){
			window.location.replace(response);
		});
	} else {
		alert("Please write something for your review.");
	}
	return false;
};
