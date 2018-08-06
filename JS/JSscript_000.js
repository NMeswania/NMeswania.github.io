// for competancy page: hides/shows the information div about the selected icon
function myFunction(compInfoNum) {
	
	// variables
	var tabs = document.getElementsByClassName("info");				// all .info classes
	var buts = document.getElementsByClassName("compImageButton");	// all competancy image buttons
	var x = document.getElementById("compInfo" + compInfoNum);		// desired div to toggle
	var showing = false;
	var heightData = [
		{
			_height: [19, 20, 18, 16, 15, 15, 13, 13],
			_step: 1,
			_unit: "vw"
		},
		{
			_height: [550, 450, 450, 350, 350, 325, 275, 300],
			_step: 25,
			_unit: "px"
		}
	];
	
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
		increaseHeight(compInfoNum, heightData);
	}
}

// increase panel height animation function
function increaseHeight(_number, _heightData) {
	var _x = document.getElementById("compInfo" + _number);
	var _screen;
	if (window.innerWidth >= 601) {
		_screen = 0;
	} else {
		_screen = 1;
	}
	
	var _height = _heightData[_screen]._height[_number];
	var _currentHeight = 0;
	var _id = setInterval(frame, 25);
	function frame() {
		if (_currentHeight > _height) {
			clearInterval(_id);
		} else {
			_currentHeight = _currentHeight + _heightData[_screen]._step;
			_x.style.height = _currentHeight + _heightData[_screen]._unit;
		}
	}
}