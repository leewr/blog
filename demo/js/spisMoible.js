(function(){
/*function _tab(btn,nr,i){
  var oldBtn=btn[i],
      oldNr=nr[i],
    stopChange=false;
  oldNr.style.display='block';
  
  for(var i=0;i<btn.length;i++){
      var thisBtn=btn[i];
    thisBtn.index=i;
    thisBtn.onmouseover=function(){
      var newBtn=this;
      stopChange=false;
        window.setTimeout(function(){if(!stopChange){changeTab(newBtn)}},200)
    }
    thisBtn.onmouseout=function(){stopChange=true;}
    thisBtn.onclick   =function(){return false;}
  }
  function changeTab(newBtn){
        if(newBtn.className=='in'){return true;}
      var newNr=nr[newBtn.index];
      //alert(newBtn.index)
      oldNr.style.display='none';
      newBtn.className='';
      newNr.style.display='block';
      oldNr=newNr
      
      oldBtn.className='';
      newBtn.className='active';
      oldBtn=newBtn;
      
      return false;
  }
}*/
	var searchTap=function(){
		var $searchTab=$("#search-tab-btn a");
		var $searchBox=$("#search-tab-box dd");
		$searchTab.bind("touchend",function(){
			var index=$(this).index();
			console.log($(this))
			$(this).addClass("active").siblings().removeClass("active");
			$searchBox.eq(index).show().siblings().hide();
		})
	}();


	var search_condi=function(){
		var $radio = $('#radio_js_in');
		$radio.bind("touchend",function(){
			var	sval=$radio.val();
			if(sval==0){
				$radio.val(1);
			    $radio.addClass("in")
			}else if(sval==1){
				$(this).val(0);
				$radio.val(0).removeClass("in");
			}
		})
	}();

 var userselect=function(){
  var $userselect=$(".userSelect");
  var $lay_bj_div=$(".lay_bj_div");
  $userselect.bind("touchend",function(){
    $lay_bj_div.show();
    $(this).find(".userSelectbox").show();
    $(document).bind("touchmove",function(event){
      event.preventDefault();
    })
  })
  $lay_bj_div.bind("touchend",function(event){
      $userselect.find(".userSelectbox").hide();
      $lay_bj_div.hide();
      $(document).unbind();
  })
 }() 

})(window);