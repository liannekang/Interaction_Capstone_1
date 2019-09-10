$(document).ready(function(){

//--1--//

  $("#b1").mouseenter(function(){
    // alert("You entered box1!");
    $("#b1").css("background-color", "yellow");
  });

  $("#b1").mouseleave(function(){
    // alert("You entered box1!");
    $("#b1").css("background-color", "#FF5733");
  });


//--2--//

$("#b2").mouseenter(function(){
    // alert("You entered box1!");
    $("#b2").css("background-color", "white");
    $(".2").css("color", "white")
  });
  	

//--3--//

  // $("#click").click(function(){
  // 	var count = 0;
  // 	count += 1;
  // 	$("#click").html("Click: " + count);
  // });

  // $(document).on("click", "#click", function() {
  // 	var count = 0;
  // 	count += 1;
  // 	$("#click").html("Click: " + count);
  // });
  var button = document.getElementById("click"),
  count = 0;
	button.onclick = function() {
  count += 1;
  button.innerHTML =  + count;
	};


//--4--//

$("#b4").mouseup(function(){
  	$(this).animate({
			opacity: '1',
			}, 100);
  	});
 
 $("#b4").mousedown(function(){
  	$(this).animate({
			opacity: '0.3'
			}, 100);
  	});



//--5--//

$("#b5").click(function(){
  	$("#b5,#b6,#b7").animate({
			"border-radius": "100px"
			},400);
  	});

//--6--//

$("#b6").click(function(){
  	$("#b6").effect("shake", {direction: "down", times:2, distance: 10},200);
  	});

//--7--//

$("#b7").click(function(){
  	$("#b5,#b6,#b7").animate({
			"border-radius": "0px"
			},400);
  	});

//--8--//

$('#b8').click(function(){
     window.print();
});


//--9--//

 $(document).ready(function() {  
            $("#Add").on("click", function() {  
                $("#textboxDiv").append("<div><br><input type='text'/><br></div>");  
            });  
            $("#Remove").on("click", function() {  
                $("#textboxDiv").children().last().remove();  
            });  
        });  


//--10--//

 $("#b10").click(function(){
    alert("Hello!");
    });

//--11--//

 $("#b11").click(function(){
  	$("#b11").animate({
			left: '105px',
			opacity: '0.5',
			}, 1000);

  	$("#b12").animate({
			right: '105px',
			opacity: '0.5',
			}, 1000);
  	});

//--12--//

$("#b12").click(function(){

	$("#b12").animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

});

//--13--//

 $("#b13").click(function(){
  	$(".container").css("background-color", "#F0E68C");

  });

//--14--//

$("#b14").click(function () {
    $(this).toggleClass("changeBackground");
});


//--15--//
$("#b15").click(function(){
    $("#b7").animate({
			top: '420px',
			opacity: '0.3',
			}, 1000);
      $("#b15").animate({
			opacity: '0.3',
			}, 500);
  });


//--16--//
$("#b16").click(function(){
    $("#b7,#b15").animate({
			left: '210px',
			}, 1000);
   $("#b16").animate({
			opacity: '0.3',
			}, 500);
});

//--17--//
$("#b17").click(function(){
	$("#b17").animate({
			"border-radius": "40px"
			},0);

	$("#b17").animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
});


//--18--//


$("#b18").mouseenter(function(){
    $("#b18").animate({
			left: '210px',
			}, 300);
});


//--19--//
$("#b19").mouseenter(function(){
    $("#b19").animate({
			left: '210px',
			}, 300);
});


//--20--//
$("#b20").mouseenter(function(){
    $("#b20").animate({
			left: '210px',
			top: '100px'
			}, 300);
});


//--21--//
$("#b21").click(function(){
    $(".text").css({
    	"margin-left": "45px",
    	"fontSize": "100px",
    	"margin-top": "70px",
    	// "margin-top", "0",
    	// "margin-left", "0",
    });
});


//--22--//
$("#b22").click(function(){
    $(".22").css({
    	"transform" : "rotate(140deg)"
    });
});


//--23--//
$("#b23").click(function(){
    $(this).css({
    	"transform" : "skewY(-40deg)",
    	"opacity" : "0.5"
    });
});


//--24--//
$("#b24").click(function(){
    $("#b24").css({
    	"transform" : "skewY(40deg)",
    	"opacity" : "0.5"
    });
 }); 


//--25--//
$("#b25").click(function(){
    $("#b25").css({
    	"height" : "100px"
    });
 }); 


//--26--//
$("#b26").click(function(){
    $("#b26").css({
    	"height" : "50px"
    });
 }); 


//--27--//
$("#b27").click(function(){
    $("#b27").css({
    	"transform" : "skewY(50deg)",
    	"opacity" : "0.5"
    });
 }); 


//--28--//
$("#b28").click(function(){
    $("#b28").css({
    	"transform" : "skewY(130deg)",
    	"opacity" : "0.5"
    });
 }); 

			
//--29--//
$("#b29").click(function(){
	$(this) .slideUp("slow");
	});


//--30--//
$("#b30").click(function(){
	$(this).slideUp('slow').slideDown('slow');
	});


//--31--//
$("#b31").click(function(){
	$(this).fadeOut()
  });


//--32--//
$("#b32").click(function() {
  $(this).toggle("scale");
});

//--33--//
$("#b33").click(function() {
  $("#b32").toggle("scale");
});

//--34--//
$("#b34").click(function(){
	$("#b31").fadeIn()
  });

//--35--//
$("#b35").click(function(){
	$("#b35").css({
    	"transform" : "scale(1.5)",
    	"background-color" : "green",
    	"opacity" : "0.5"
    });
 }); 

//--35--//
$("#b35").click(function(){
	$("#b35").css({
    	"transform" : "scale(1.5)",
    	"background-color" : "green",
    	"opacity" : "0.5"
    });
 }); 

//--36--//
$("#b36").click(function(){
	$(this).css({
    	"transform" : "scale(2)",
    	"background-color" : "blue",
    	"opacity" : "0.5"
    });
 }); 

//--37--//
$("#b37").click(function(){
	$(this).css({
    	"transform" : "scale(3)",
    	"background-color" : "red",
    	"opacity" : "0.5"
    });
 }); 

//--38--//
$("#b38").click(function(){
	$("#b38").animate({
			bottom: '210px',
			}, 300);
});

$("#b38").click(function(){
	$("#b38").animate({
			"border-radius": "40px",
			left: '510px',
			"opacity" : "0.5"
			}, 300);
});

//--39--//
$("#b39").click(function(){
	

	$("#b35,#b36,#b37,#b38").css({
			"transform" : "scale(1)",
    		"background-color" : "#F0E68C",
    		"opacity" : "1"
    });

    $("#b38").animate({
			"border-radius": "0px",
			left: '0px',
			top: '0px'
			}, 300);
});

//--40--//
$("#b40").mouseup(function(){
  	$(this).animate({
			"border-radius": "0px",
			}, 50);
  	});
 
 $("#b40").mousedown(function(){
  	$(this).animate({
			"border-radius": "100px"
			}, 50);
  	});

//--41--//
$("#b41").mouseenter(function(){
  	$(this).animate({
			"border-radius": "100px",
			}, 50);
  	});
 
 $("#b41").mouseleave(function(){
  	$(this).animate({
			"border-radius": "0px"
			}, 50);
  	});

//--42--//
 $("#button_1").click(function(){
    $(".append").append(" <b>Hello</b>.");
  });


//--43--//
 $("#button_2").click(function(){
    $(".remove").remove();
  });


//--44--//
$("#button_3").click(function(){
    $(".prepend").prepend(" <b> :)</b>");
  });


//--45--//
$("#b45").click(function(){
$(this).animate({
			height: '100px',
			width: '500px',
			opacity: '0'
			}, 1000);

});

$("#b45").click(function(){
$(".p45").fadeOut();
});


//--46--//
$("#b46").click(function(){
$(this).animate({
			right: '90px'
			}, 1000);
$("#b47").animate({
			right: '88px'
			}, 1000);

  	});

//--47--//
$("#b47").mouseup(function(){
	$(this).css({
    	"transform" : "scale(1)",
    	"background-color" : "#F0E68C",
    	"opacity" : "1"
    });
 }); 

$("#b47").mousedown(function(){
	$(this).css({
    	"transform" : "scaleY(5)",
    	"background-color" : "#ff5050",
    	"opacity" : "1"
    });
 }); 


//--48--//
$("#b48").click(function(){
$(this).animate({
			bottom: '210px'
			}, 1500);
$("#b47").animate({
			bottom: '210px'
			}, 1500);
 });

//--49--//
$("#b49").click(function(){
$(this).animate({
			right: '210px'
			}, 1500);
 });


//--50--//
$("#b50").click(function(){
    alert("Congratulations!");
    });
$("#b50").click(function(){
$(".container").animate({
			opacity: '0',
			}, 2000);
  	});





//end of document//
 });


 