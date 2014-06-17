// $('ul#images a').imgPreview({
//     containerID: 'imgPreviewWithStyles',
//     imgCSS: {
//         // Limit preview size:
//         height: 200
//     },
//     // When container is shown:
//     onShow: function(link){
//         // Animate link:
//         $(link).stop().animate({opacity:0.4});
//         // Reset image:
//         $('img', this).stop().css({opacity:0});
//     },
//     // When image has loaded:
//     onLoad: function(){
//         // Animate image
//         $(this).animate({opacity:1}, 300);
//     },
//     // When container hides:
//     onHide: function(link){
//         // Animate link:
//         $(link).stop().animate({opacity:1});
//     }
// });

/*
 * Image preview script
 * powered by jQuery (http://www.jquery.com)
 *
 * written by Alen Grakalic (http://cssglobe.com)
 *
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.imagePreview = function(){
	/* CONFIG */

		xOffset = 10;
		yOffset = 30;

		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result

	/* END CONFIG */
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");
    },
	function(){
		this.title = this.t;
		$("#preview").remove();
    });
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});
