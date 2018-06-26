// for competancy page: hides/shows the information div about the selected icon
function myFunction(compInfoNum) {
	
	// variables
	var tabs = document.getElementsByClassName("info");				// all .info classes
	var buts = document.getElementsByClassName("compImageButton");	// all competancy image buttons
	var x = document.getElementById("compInfo" + compInfoNum);		// desired div to toggle
	var showing = false;
	
	// reduce all panel heights, check if the selected panel is already showing
	var i;
	for (i = 0; i < 8; i++) {
		if (tabs[i].style.display == "block" && i == compInfoNum) {
			showing = true;
		}
		tabs[i].style.height = "0vw";
		tabs[i].style.display = "none";
	}
	
	// open selected panel
	if (!showing) {
		x.style.display = "block";
		increaseHeight(compInfoNum);
	}
}

// increase panel height animation function
function increaseHeight(_number) {
	var _x = document.getElementById("compInfo" + _number);
	var _height = 18;
	var _currentHeight = 0;
	var _id = setInterval(frame, 25);
	function frame() {
		if (_currentHeight > _height) {
			clearInterval(_id);
		} else {
			_currentHeight = _currentHeight + 1;
			_x.style.height = _currentHeight + "vw";
		}
	}
}