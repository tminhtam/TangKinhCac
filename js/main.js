$(document).ready(function(){
	const IMG_HEIGHT = 304
	var slideContainer = $('#slides')
	var slideImages = slideContainer.children().length
	slideContainer.css("width", "565px")
	slideContainer.css("height", "304px")
	console.log(slideImages)

	var index = 0

	function next(){
		if(index < slideImages-1)
			index++
		else
			index = 0

		var temp = -((IMG_HEIGHT*index) + (index*3 + 1));
		console.log(temp)
		slideContainer.css("transform", "translateY("+temp+"px)")
	}

	setInterval(next, 3000)

	function clsAnimation(){
		$('#phan-sildebarrr').removeClass('animate__animated');
		$('#phan-sildebarrr').removeClass('animate__rotateInDownLeft');
		$('#phan-sildebarrr').removeClass('animate__delay-2s');
	}

	//setInterval(clsAnimation, 4000)
})