$('[data-toggle=tab]').click(function(){
  if ($(this).parent().hasClass('active')){
	$($(this).attr("href")).toggleClass('active');
  }
});

$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});  

var tabCount=4;
var chatUserName="Test";
$(".addbutton").click(function(){
  $(".nav-tabs").append('<li><a href="#tab' + tabCount + '"' + 'data-toggle="tab">' + chatUserName + '</a></li>');
  $(".tab-content").append('<div class="tab-pane" id="tab' + tabCount + '"' + '><p>Im in Section 4.</p></div>');
  tabCount++;
  
})

/*$(".addbutton").click(function(){
  $(".nav-tabs").append('<li><a href="#tab4" data-toggle="tab">Section 4</a></li>');
  $(".tab-content").append('<div class="tab-pane" id="tab4"><p>Im in Section 4.</p></div>')
  
})
*/