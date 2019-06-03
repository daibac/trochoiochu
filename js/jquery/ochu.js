



// giời gian thực

	function startTime() {
	  var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var s = today.getSeconds();
	  // add a zero in front of numbers<10
	  m = checkTime(m);
	  s = checkTime(s);
	  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
	  var t = setTimeout(function(){ startTime() }, 500);
	}

	function checkTime(i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
	};

	function abc(){
		var so = 10;
		so--;
		if(so != 0){
			document.getElementById("question-2").innerHTML = so;
			setTimeout("abc()",1000);
		} else {
			document.getElementById("question-2").innerHTML = " Hết thời gian!"
		}
	}

/////////////////////////////////////////////////////////////////


        var x = 15;
        var timeout= '';
        function rePlay(){
			if(x !=0 ){
				document.getElementById("question-2").innerHTML = x--;
			    timeout = setTimeout(rePlay, 1000);
		        } 
		        else{
				document.getElementById("question-2").innerHTML= 'Gợi ý là:<br> Tin người :)';
				clearTimeout(timeout);
				 x= 15;
				}
				
			}



//////////////////////////////////////////////////////////////////
$(document).ready(function(){


	$('#img1').one('click',function(){
		$(this).attr('src','images/ochu1.jpg');
		$('.question-1').html( 'Câu hỏi 1 : <br> Biểu tượng công ty nào ở việt nam?' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');
	});



	$('#img2').one('click',function(){
		$(this).attr('src','images/ochu2.jpg');
		$('.question-1').html( 'Câu hỏi 2 : <br> Con gì đây?' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');
	
	});



	$('#img3').one('click',function(){
		$(this).attr('src','images/ochu3.jpg');
		$('.question-1').html( 'Câu hỏi 3 : <br> Công nghệ gì??' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');
	});



	$('#img4').one('click',function(){
		$(this).attr('src','images/ochu4.jpg');
		$('.question-1').html( 'Câu hỏi 4 : <br> Cái gì đây?' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');
	});


	$('#img5').one('click',function(){
		$(this).attr('src','images/ochu5.jpg');
		$('.question-1').html( 'Câu hỏi 5 : <br> Bạn đoán đi?' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');

	});

	$('#img6').one('click',function(){
		$(this).attr('src','images/ochu6.jpg');
		$('.question-1').html( 'Câu hỏi 6 : <br> Cho 1 vé!' +
		 '<br><div  id="question-2"><button type="button" onclick="rePlay()"> Bắt đầu </button><p>Gợi ý sau 15s : </p> </div>');
	});




});