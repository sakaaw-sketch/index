$.ajaxSetup({cache:false});
site_title="My Radio";
timer_mode=0;
timer_ms=0;
timer_length="0:00";
timer_length_seconds=-1;
song_list_mode="all";
page=0;
start=0;
disablelist=3;
list_view_mode=0;
query_artist="";
query_search="";
hisss=0;
artist_data=new Array();
album_data=new Array();
playlist_data=new Array();
artist_name_list=new Array();
album_name_list=new Array();
playlist_name_list=new Array();
playing_song=new Array();
al_re=new RegExp("");
al_re.compile("http://www.nicovideo.jp");
info_call();
if($.cookie("TimerMode")){timer_mode=1;}
 
function info_call()
{
	$.getJSON("data/info.json",
		function(b)
		{
			max_song_view=b.max_song_view;
			max_song_view=max_song_view*1;
			max_request_num=b.max_request_num;
			if(b.max_request_num>0)
			{
				info_html="<font class=status>點播系統:<font color=#00FF00 class=status>開放中</font></font><br>";
			}
			else
			{
				info_html="<font class=status>點播系統:<font color=#FF0000 class=status>關閉中</font></font><br>";
			}
			;
			$("#infomation").html(info_html);
		}
	)
}







now_playing_size=1;
$(document).ready(
	function()
	{
		f();
		
		if($.cookie("list_scr_r")){i_r(0)}
		else{i_r(1)}
		
		if($.cookie("list_scr")){i(0)}
		else{i(1)}
		
		var e=$("h2").length;
		for(c=0;c<=e;c++)
		{
			if($.cookie("h2open"+c))
			{
				$("h2").eq(c).next(".contents").slideToggle(80)
			}
		}
		
		$("#menu_ko_1").click(
			function()
			{
				h_r();
				return false;
			}
		);
				
		$("#menu_ko_2").click(
			function()
			{
				h();
				return false;
			}
		);
		
		
		function h_r()
		{
			if(list_scr_r==0){i_r(0)}
			else{i_r(1)}
		}
		
		function h()
		{
			if(list_scr==0){i(0)}
			else{i(1)}
		}
		
		function i_r(j)
		{
			if(j==1)
			{
				list_scr_r=0;
				$.cookie("list_scr_r","",{expires:-1});
				$("#request_list").css("max-height","");
				$("#request_list").css("overflow-y","auto");
				$("#menu_ko_1").css("font-weight","bold")
			}
			else
			{
				list_scr_r=1;
				$.cookie("list_scr_r","1",{expires:7});
				$("#request_list").css("max-height","none");
				$("#request_list").css("overflow-y","visible");
				$("#menu_ko_1").css("font-weight","normal");
			}
		}

		function i(j)
		{
			if(j==1)
			{
				list_scr=0;
				$.cookie("list_scr","",{expires:-1});
				$("#song_list").css("max-height","35em");
				$("#song_list").css("overflow-y","auto");
				$("#menu_ko_2").css("font-weight","bold")
			}
			else
			{
				list_scr=1;
				$.cookie("list_scr","1",{expires:7});
				$("#song_list").css("max-height","");
				$("#song_list").css("overflow-y","");
				$("#menu_ko_2").css("font-weight","normal");
			}
		}
		
	
		$("h2").attr("title","點擊開關面板");
		$("h2").click(
			function()
			{
				var j=$("h2").index(this);
				
				
				if($.cookie("h2open"+j))
				{
					$.cookie("h2open"+j,"",{expires:-1})
				}
				else
				{
					$.cookie("h2open"+j,"h2"+$(this).attr("id"),{expires:7})
				}
				
				$(this).next(".contents").slideToggle(60)
				$(this).next(".contents2").slideToggle(60)
			}
		);
		
		
		
		
		
		
				
		

		
		function f()
		{
			$("#menu_ko_2").css("font-weight","normal")
		}
		
		$("#menu_ko_2").click(
			function()
			{
				b();
				
				return false
			}
		);
		
		
		
		
		
	
		
		
		
	}
);
//========================================================================================================================================


	
