/*
$(document).ready(function(){
	$(document).bind('keydown',function(e){
		if ( e.keyCode == 123 ) {
			e.preventDefault(); e.returnValue = false; } 
		}); 
	}); // 우측 클릭 방지
	*/


function rightClickEventDisable(){
	document.onmousedown=disableclick;
function disableclick(event){ 
	if (event.button==2) { 
		return false;
		} 
	}
}

var lang_kor = {
            "decimal" : "",
            "emptyTable" : "데이터가 없습니다.",
            "info" : "_START_ - _END_ (총 _TOTAL_ 명)",
            "infoEmpty" : "0명",
            "infoFiltered" : "(전체 _MAX_ 명 중 검색결과)",
            "infoPostFix" : "",
            "thousands" : ",",
            "lengthMenu" : "_MENU_ 개씩 보기",
            "loadingRecords" : "로딩중...",
            "processing" : "처리중...",
            "search" : "  검색 : ",
            "zeroRecords" : "검색된 데이터가 없습니다.",
            "paginate" : {
                "first" : "첫 페이지",
                "last" : "마지막 페이지",
                "next" : "다음",
                "previous" : "이전"
            },
            "aria" : {
                "sortAscending" : " :  오름차순 정렬",
                "sortDescending" : " :  내림차순 정렬"
            }
        };
Date.prototype.plusDay = function(day){
	var dump = this;
	dump.setDate(dump.getDate() + day);
	return dump;
}

Date.prototype.plusMonth = function(month){
	var dump = this;
	dump.setMonth(dump.getMonth() + month);
	return dump;
}
 function between(target,a, b) {
	  var min = Math.min.apply(Math, [a, b]),
	    max = Math.max.apply(Math, [a, b]);
	  return target > min  && target < max;
}
 function gettextLimit(value,len){
	 return (value.length > len ? value.substr(0,len)+"..." : value);
 }
 function generateKey(){
	    return CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
}
function calculateTimeDifference(createDateStr) {
	 										    var createDate = new Date(createDateStr);
	 										    var now = new Date();
	
	 										    var differenceInMilliseconds = now - createDate;
	 										    var differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
	
	 										    return Math.round(Math.abs(differenceInHours)); // 절대값을 반환하여 시간 차이를 양수로 표시
	 										}
 function checkId(id){
	 if(!/^[0-9a-z]+$/.test(id)){
		 alert("아이디는 숫자와 영문자로만 사용 가능합니다.");
		 return false;
	 }
	 if(id.length >= 5){
		 if(id.length >= 32){
			 alert("아이디는 5자리이상 32자리 이하만 가능합니다.");
			 return false;
		 }
	 }else{
		 alert("아이디는 5자리이상 32자리 이하만 가능합니다.");
		 return false;
	 }
	 return true;
 }
 function ValidateIPaddress(inputText) {
	    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	    if (ipformat.test(inputText)) {
	        return true;
	    } else {
	        alert("입력하신 값은 IP형식이 아닙니다.");
	        //focus 처리가 필요하면 이곳에! $("#ip").focus();
	        return false;
	    }
	}
 function checkPassword(id,password){
	 if(!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$/.test(password)){
	
		 alert('비밀번호는 숫자와 특수문자 ,대문자 조합으로 9자리 이상을 사용해야 합니다.');
		 return false;
	
		 }
		 if(password.search(id) > -1){
	
		 alert("비밀번호에 아이디가 포함되었습니다.");
	
		 return false;
	
		 }
	
		 return true;

	 }
 function loadingdata(bool,func){
	 if(bool){
		 $("#loading").css("visibility","visible");
		 //$("#r_body").css("display","none");
		 $("#r_body").css("visibility","visible");
	}else{
		$("#loading").css("visibility","hidden");
		$("#r_body").css("visibility","hidden");
	}
	if(func != null){
		func();
	}
 }
 function loadingvisible(bool){
		if(bool){
			 $("#loading")
			    .css("z-index","10001")
			    .css("top",$(this).height()/2-$("#loading").height())
			    .css("display","block");
			 //$("#r_body").css("display","none");
			 $("#r_body").css("visibility","hidden");
		}else{
			$("#loading").css("display","none");
			$("#r_body").css("visibility","visible");
		}
	}
var non_app_color = "#FF996E !important";
var app_color = "#1ab394 !important";
var app_color1 = "#1AFF94  !important";
var app_color2 = "#1AFF94  !important";
var app_color3 = "#1AFF94  !important";
var calendar_text_color = "#FFFFFF !important";
var calendar_text_color_Feb = "#000000 !important";
function findid(id,func){
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			userId: id
		},
		async : false,
		url : '/user/findId',
		success : function(res) {
			if(res.success){
				func(res.rows);
			}else
			{
				//func(res.rows);
			}
		},
		error:function(request,status,error){}
	});
}
function setTabClass(classname){
	$(classname).click(function(){
		$(classname+"C").hide();
		$("#"+$(this).attr("for")+"_content").show();
	});
}
function setCookie(cookieName, value, exdays){
	   var exdate = new Date();
	   exdate.setDate(exdate.getDate() + exdays);
	   var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
	   document.cookie = cookieName + "=" + cookieValue;
	}

	function deleteCookie(cookieName){
	   var expireDate = new Date();
	   expireDate.setDate(expireDate.getDate() - 1);
	   document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
	}

	function getCookie(cookieName) {
	   cookieName = cookieName + '=';
	   var cookieData = document.cookie;
	   var start = cookieData.indexOf(cookieName);
	   var cookieValue = '';
	   if(start != -1){
	      start += cookieName.length;
	      var end = cookieData.indexOf(';', start);
	      if(end == -1)end = cookieData.length;
	      cookieValue = cookieData.substring(start, end);
	   }
	   return unescape(cookieValue);
	}

function checknull(value,returndata){
	   if(value == undefined || value == ""){
		   if(returndata != null) return returndata;
		   return "";
	   }else{
		   return value;
	   }
}

function setPhoneNumber(id){
	 var number = $("#"+id).val().replace(/[^0-9]/g,'');
	 var tmp = "";
	 if(number.length < 4){
		 return $("#"+id).val(number);
	 }else if(number.length < 7){
		 tmp += number.substr(0,3);
		 tmp += '-';
		 tmp += number.substr(3);
		 return $("#"+id).val(tmp);
	 }else if(number.length < 11){
		 tmp += number.substr(0,3);
		 tmp += '-';
		 tmp += number.substr(3,3);
		 tmp += '-';
		 tmp += number.substr(6);
		 return $("#"+id).val(tmp);
	 }else{
		 tmp += number.substr(0,3);
		 tmp += '-';
		 tmp += number.substr(3,4);
		 tmp += '-';
		 tmp += number.substr(7);
		 return $("#"+id).val(tmp);
	 }
	 return $("#"+id).val(number);
		 
}

function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}
function numberWithCommas(x,type) {
	if(x == undefined || x == null){
		return "0";
	}
	if(type == undefined || type == null){
		type = true;
	}
	if(parseInt(x) > 9999 && type){
		x = (Math.round((parseInt(x) / 10000)*10)/10).toString();
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +" 만";
	}
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommastext(obj) {
	 obj.value =  comma(uncomma(obj.value)); 
}


function comma(str) { 
    str = String(str); 
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); 
} 

function uncomma(str) { 
    str = String(str); 
    return str.replace(/[^\d]+/g, ''); 
}


Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};


 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

function getBase64(file,func) {
	   var reader = new FileReader();
	   reader.readAsDataURL(file);
	   reader.onload = function () {
		   if(func == null) return;
		   func(reader.result);
	     console.log(reader.result);
	   };
	   reader.onerror = function (error) {
	     console.log('Error: ', error);
	   };
	}
 
function getCodeSelectList(value,selectid,all,func,allname){
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			type: value
		},
		async : false,
		url : '/getCodeList',
		success : function(res) {
			if(res.success){
				var dumpstr = '<option value="00">'+(checknull(allname) == "" ? "전체" : allname)+'</option>';
				if(!all){
					dumpstr = "";
				}
				
				for(var i = 0 ; i < res.rows.length; i++){
						dumpstr += '<option value="'+res.rows[i]["code"]+'">'+res.rows[i]["code_name"]+'</option>';
				}
				
				$("#"+selectid).append(dumpstr);
				if(func != null){
					func(selectid);
				}
			}
		},
		error:function(request,status,error){}
	});
}

function getCodeSelectValue(value,target,dataarray,fn){
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			type: value
		},
		async : false,
		url : '/getCodeList',
		success : function(res) {
			if(res.success){
				var dumpstr = "";
				for(var i = 0 ; i < dataarray.length ; i++){
					for(var j = 0 ; j < res.rows.length; j++){
						if(dataarray[i] == res.rows[j]["code"]){
							if(dumpstr == ""){
								dumpstr = res.rows[j]["code_name"];
							}else{
								dumpstr += ","+res.rows[j]["code_name"];
							}
							break;
						}
					}
					
				}
				
				
				$("#"+target).text(dumpstr);
				if(fn != null){
					fn();
				}
				
			}
		},
		error:function(request,status,error){}
	});
}

function setCodeData(value,setid,data){
	if(checknull(data) == ""){
		return "";
	}
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			type: value
		},
		async : false,
		url : '/getCodeList',
		success : function(res) {
			if(res.success){
				var dumpstr = "";
				var dump = data.split(",");
				for(var p = 0 ; p < dump.length; p++){
					for(var i = 0 ; i < res.rows.length; i++){
						if(dump[p] == res.rows[i]["code"]){
							dumpstr += (dumpstr == "" ? "" : ",")+res.rows[i]["code_name"];
						}
					}
				}
			
				$("#"+setid).text(dumpstr);
				$("#"+setid).val(dumpstr);
			}
		},
		error:function(request,status,error){}
	});
	return "";
}

function getCodeCheckBox(value,comboid,read,func){
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			type: value
		},
		async : false,
		url : '/getCodeList',
		success : function(res) {
			if(res.success){
				var	dumpstr = "";
				
				for(var i = 0 ; i < res.rows.length; i++){
					if(read == null || read == false){
						dumpstr += '<label class="i-checks"> <input type="checkbox" name="'+comboid+'_name" value="'+res.rows[i]["code"]+'" id="'+comboid+'_check_'+i+'"> '+res.rows[i]["code_name"]+' </label>';
					}else{
						dumpstr += '<label class="i-checks"> <input type="checkbox" name="'+comboid+'_name" value="'+res.rows[i]["code"]+'" id="'+comboid+'_check_'+i+'" disabled> '+res.rows[i]["code_name"]+' </label>';
					}
					
				}
				
				$("#"+comboid).append(dumpstr);
				if(func != null){
					func(comboid);
				}
			}
		},
		error:function(request,status,error){}
	});
}
function setCodeOutLineButton(nameid,dataarray){
	for(var p2 = 0 ; p2 < dataarray.length; p2++){
		for(var i = 0 ; i < $("button[name="+nameid+"_name]").length; i++){
			if($("#"+$("button[name="+nameid+"_name]")[i].id).attr("data-code") == dataarray[p2]){
				CodeOutLineButtonChange($("button[name="+nameid+"_name]")[i],true);
				break;
			}
		}
	}
}

function selectedCodeOutLineRadioButton(id,type){
	for(var i = 0 ; i < $("button[name="+id+"_name]").length; i++){
		if($("#"+$("button[name="+id+"_name]")[i].id).attr("data-value") == "1"){
			if(type == null){
				return $("#"+$("button[name="+id+"_name]")[i].id).attr("data-code");
			}else{
				return $("#"+$("button[name="+id+"_name]")[i].id).text();
			}
			
		}
	}
	return "";
}
function getCodeOutLineRadioButton(value,buttonid,func,width,height,data,code){
	
	var dumpstyle ='style="';
	dumpstyle += 'margin-left:5px;word-wrap: break-word;white-space:normal !important;';
	if(width != null){
		dumpstyle += 'width:'+width+'px;';
	}
	if(height != null){
		dumpstyle += 'height:'+height+'px;';
	}
	dumpstyle += '"';
	
	if(data == null){
		$.ajax({
			type : 'POST',
			dataType : "json",
			data : {
				type: value
			},
			async : false,
			url : '/getCodeList',
			success : function(res) {
				if(res.success){
					var	dumpstr = "";
					var clickevent = "";
					for(var i = 0 ; i < res.rows.length; i++){
					
							dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-default" onclick="CodeOutLineRadioButtonClickEventHandler(this)" name="'+buttonid+'_name" data-tname="'+buttonid+'" data-value="0" data-code="'+res.rows[i]["code"]+'" id="'+buttonid+'_button_'+i+'">'+res.rows[i]["code_name"]+'</button>';
						//	dumpstr += '<label class="i-checks"> <input type="checkbox" name="'+comboid+'_name" value="'+res.rows[i]["code"]+'" id="'+comboid+'_check_'+i+'"> '+res.rows[i]["code_name"]+' </label>';
					}
					
					$("#"+buttonid).html(dumpstr).trigger("create");
					if(func != null){
						func();
					}
				}
			},
			error:function(request,status,error){}
		});
	}else{
		var	dumpstr = "";
		for(var i = 0; i < data.length; i++){
			if(i == 0){
				dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-warning" onclick="CodeOutLineRadioButtonClickEventHandler(this)" name="'+buttonid+'_name" data-value="1" data-tname="'+buttonid+'" data-code="'+code[i]+'" id="'+buttonid+'_button_'+i+'">'+data[i]+'</button>';
			}else{
				dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-default" onclick="CodeOutLineRadioButtonClickEventHandler(this)" name="'+buttonid+'_name" data-value="0" data-tname="'+buttonid+'" data-code="'+code[i]+'" id="'+buttonid+'_button_'+i+'">'+data[i]+'</button>';	
			}
			
		}
		$("#"+buttonid).html(dumpstr).trigger("create");
		if(func != null){
			func();
		}
	
	}
	
	
	
}


function CodeOutLineRadioButtonClickEventHandler(target){
	var name =  $("#"+target.id).attr("data-tname")+"_name";
	for(var i = 0 ; i < $("button[name="+name+"]").length; i++){
		if($("#"+$("button[name="+name+"]")[i].id).attr("data-code") == $("#"+target.id).attr("data-code")){
			$("#"+$("button[name="+name+"]")[i].id).attr("data-value","1");
			$("#"+$("button[name="+name+"]")[i].id).removeClass("btn-default");
			$("#"+$("button[name="+name+"]")[i].id).addClass("btn-warning");
		}else{
			$("#"+$("button[name="+name+"]")[i].id).attr("data-value","0");
			$("#"+$("button[name="+name+"]")[i].id).removeClass("btn-warning");
			$("#"+$("button[name="+name+"]")[i].id).addClass("btn-default");
		}
	}
}




function getCodeOutLineButton(value,buttonid,func,width,height,data,code,disable){
	
	var dumpstyle ='style="';
	dumpstyle += 'margin-left:5px;word-wrap: break-word;white-space:normal !important;';
	if(width != null){
		dumpstyle += 'width:'+width+';';
	}
	if(height != null){
		dumpstyle += 'height:'+height+';';
	}
	dumpstyle += 'font-size:12px;'
	dumpstyle += '"';
	
	if(data == null){
		$.ajax({
			type : 'POST',
			dataType : "json",
			data : {
				type: value
			},
			async : false,
			url : '/getCodeList',
			success : function(res) {
				if(res.success){
					var	dumpstr = "";
					var clickevent = "";
					for(var i = 0 ; i < res.rows.length; i++){
					
						if(disable){
							dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-default" name="'+buttonid+'_name" data-value="0" data-code="'+res.rows[i]["code"]+'" id="'+buttonid+'_button_'+i+'">'+res.rows[i]["code_name"]+'</button>';
						}else{
							dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-default" onclick="CodeOutLineButtonClickEventHandler(this)" name="'+buttonid+'_name" data-value="0" data-code="'+res.rows[i]["code"]+'" id="'+buttonid+'_button_'+i+'">'+res.rows[i]["code_name"]+'</button>';
						}
							
						//	dumpstr += '<label class="i-checks"> <input type="checkbox" name="'+comboid+'_name" value="'+res.rows[i]["code"]+'" id="'+comboid+'_check_'+i+'"> '+res.rows[i]["code_name"]+' </label>';
					}
					$("#"+buttonid).css("margin-left","-4px");
					$("#"+buttonid).html(dumpstr).trigger("create");
					if(func != null){
						func();
					}
				}
			},
			error:function(request,status,error){}
		});
	}else{
		var	dumpstr = "";
		for(var i = 0; i < data.length; i++){
			dumpstr += '<button type="button" '+dumpstyle+' class="btn btn-outline btn-default" onclick="CodeOutLineButtonClickEventHandler(this)" name="'+buttonid+'_name" data-value="0" data-code="'+code[i]+'" id="'+buttonid+'_button_'+i+'">'+data[i]+'</button>';
		}
		
		$("#"+buttonid).css("margin-left","-4px");
		$("#"+buttonid).html(dumpstr).trigger("create");
		if(func != null){
			func();
		}
	}
	
	
	
}

function CodeOutLineButtonClickEventHandler(target){
	
	if($("#"+target.id).attr("data-value") == "0"){
		$("#"+target.id).attr("data-value","1");
		$("#"+target.id).removeClass("btn-default");
		$("#"+target.id).addClass("btn-warning");
	}else{
		$("#"+target.id).attr("data-value","0");
		$("#"+target.id).removeClass("btn-warning");
		$("#"+target.id).addClass("btn-default");
	}
	
}

function CodeOutLineButtonChange(target , value){
	if(value){
		$("#"+target.id).attr("data-value","1");
		$("#"+target.id).removeClass("btn-default");
		$("#"+target.id).addClass("btn-warning");
	}else{
		$("#"+target.id).attr("data-value","0");
		$("#"+target.id).removeClass("btn-warning");
		$("#"+target.id).addClass("btn-default");
	}
}

function getTimeBox(targetid,type,gap){
	if(type == "hh"){
		var dumpstr = "";
		for(var i = 0 ; i < 24 ; i++){
			dumpstr += '<option value="'+(i < 10 ? "0"+i : i )+'">'+(i < 10 ? "0"+i : i )+'</option>';
		}
		
		$("#"+targetid).append(dumpstr);
	}else if(type == "mi"){
		var dumpstr = "";
		var gp = (60/gap);
		for(var i = 0 ; i < gp ; i++ ){
			dumpstr += '<option value="'+((i*gap) < 10 ? "0"+(i*gap) : (i*gap) )+'">'+((i*gap) < 10 ? "0"+(i*gap) : (i*gap) )+'</option>';
		}
		$("#"+targetid).append(dumpstr);
	}
}

function selectSearchIndex(val , id){
	//var obj = $('#'+id+' option');
	
	$('#'+id+' option').each(function()
	{
		if( $(this).val() == val){
			    $(this).prop('selected', true);
		}
	});
	
}	

// 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
function initLayerPosition(value){
    var width = 600; //우편번호서비스가 들어갈 element의 width
    var height = 500; //우편번호서비스가 들어갈 element의 height
    var borderWidth = 5; //샘플에서 사용하는 border의 두께
    value.style.display = 'block';
    // 위에서 선언한 값들을 실제 element에 넣는다.
    value.style.width = width + 'px';
    value.style.height = height + 'px';
    value.style.border = borderWidth + 'px solid';
    // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
    value.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
    value.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
}


function getCodeList(value,refun){
	$.ajax({
		type : 'POST',
		dataType : "json",
		data : {
			type: value
		},
		async : false,
		url : '/getCodeList',
		success : function(res) {
			if(res.success){
				refun(res.rows);
			}
		},
		error:function(request,status,error){}
	});
}
var ajaxcm = false;
var ajaxloading = false;
function Kajax(url , data  , resultFn , faltFn , loading){
	if(ajaxcm){
		return;
	}
	ajaxloading = checknull(data.ajaxloading , true);
	if(loading)$('body').loading("start");
	$.ajax({
		type : 'POST',
		dataType : "json",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8", 
		data : data,
		async : false,
		url : url,
		success : function(res) {
			ajaxloading = false;
			if(loading)$('body').loading("stop");
			if(checknull(res.message) != ""){
				ajaxcm = true;
				alert(res.message);
				location.href = "/";
				return;
			}
			if(resultFn != null)resultFn(res);
		},
		error:function(request,status,error){
			ajaxloading = false;
			if(loading)$('body').loading("stop");
			if(faltFn != null)faltFn(request,status,error);
		}
	});
}
  function requiredcheckall(keyname , sufn , failfn){
		var emptyRequiredFieldFound = false;
		$(keyname).each(function(index , item){
				if (!emptyRequiredFieldFound && $(this).val() === "") {
	                emptyRequiredFieldFound = true;
	                alert($(this).attr("error"));
	                $(this).focus();  // 비어 있는 필수 필드로 커서 이동
	            }
				if($(keyname).length-1 == index){
					if (!emptyRequiredFieldFound) {
						sufn();
					}else{
						failfn();
					}
				}
			})
	}
function isNumberKey(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))

        return false;



    // Textbox value       

    var _value = event.srcElement.value;       

    _value = _value.replace(/,/g, '');

    // 소수점(.)이 두번 이상 나오지 못하게

    var _pattern0 = /^\d*[.]\d*$/; // 현재 value값에 소수점(.) 이 있으면 . 입력불가

    if (_pattern0.test(_value)) {

        if (charCode == 46) {

            return false;

        }

    }



    // 1000 이하의 숫자만 입력가능

    var _pattern1 = /^\d{30}$/; // 현재 value값이 3자리 숫자이면 . 만 입력가능

    if (_pattern1.test(_value)) {

        if (charCode != 46) {

            alert("1000 이하의 숫자만 입력가능합니다");

            return false;

        }

    }



    // 소수점 둘째자리까지만 입력가능


    return true;

}

function createtasknumber(){
	return new Date().format("yyyyMMddHHmm");
}



function numkeyCheck(e) { 
	var keyValue = event.keyCode; 
	if( ((keyValue >= 48) && (keyValue <= 57)) ) 
		return true; 
	else return false; 
}

function booltoint(value){
	if(value){
		return "1";
	}else
	{
		return "0";
	}
}

//두개의 날짜를 비교하여 차이를 알려준다.
function dateDiff(_date1, _date2,recom,time) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
 
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    if(recom)
    {
    	if(time){
    		return Math.ceil(Math.abs(_date1.getTime() - _date2.getTime()) / (1000));
    	}else{
    		return diff;	
    	}
    	
    }
    if(diff > 7){
    	return (diffDate_1.getFullYear()+"-"+(diffDate_1.getMonth()+1)+"-"+(diffDate_1.getDate()));
    }else
    {
    	if(diff == 0){
    		return "오늘";
    	}else
    	{
    		return diff+"일전";
    	}
    }
    return diff;
}

function inttobool(value){
	if(value == 1){
		return true;
	}else
	{
		return false;
	}
}

function Kconfirm(text , title , func, nofunc ,closebl ){
	swal({
        title: text ,
        text: title ,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "네",
        cancelButtonText: "아니오",
        closeOnConfirm: false,
        closeOnCancel: false },
    function (isConfirm) {
        if (isConfirm) {
        	if(closebl)confirmclose();
        	
        	if(func != null)func();
        	
        } else {
        	confirmclose();
        	if(nofunc != null)nofunc();
        	
        }
    });
}

function confirmclose(){
	swal.close();
}

function Kalert(title,text,func,option){
	var type;
	if(option != null){
		type = option.type;	
	}
	
	swal({
		html:true,
        title: title,
        text: text,
        type: (type == null ? "success":type)
    },func
    );
}

function Ktoast(option){
	var value = option.text;
	var title = option.title;
	var type = option.type;
	if(type == undefined || type == null){
		type = 0;
	}
          toastr.options = {
              closeButton: true,
              progressBar: true,
              showMethod: 'slideDown',
              timeOut: 4000
          };
          switch(type){
          	  case 0 :
          		toastr.success(value, title);
        	  break;
          	  case 1 :
            		toastr.info(value, title);
          	  break;
	          case 2 :
	        		toastr.warning(value, title);
	      	  break;
	          case 3 :
	        		toastr.error(value, title);
	      	  break;
          }
}

function kdisabledall(id,value){
	$('#'+id).find("input").prop('readonly', value);
	$('#'+id).find("div").prop('contentEditable', (value == true ? false : true ));
	$('#'+id).find("select").prop('disabled', value);
	$('#'+id).find(".lv_form_box").css('background-color', (value == true ? "#eee" : "white" ));
	$('#'+id).find("input:checkbox").prop('disabled', value);
	$('#'+id).find("input:radio").prop('disabled', value);
	
}

function ifnull(value,revalue){
	if(value == undefined){
		return revalue;
	}else if(value == null){
		return revalue;
	}else{
		return value;
	}
	return value;
}

function checkcustom(array , value){
	   for(var i = 0 ; i < array.length ; i++){
		   if(array[i]["custom_seq"] == value)
		   {
				return false;   
		   }
			   
	   }
	   
	   return true;
}
function setcomboboxdx(id){
	 $(id).children('span.selected').html($(id).children('div.selectOptions').children('span.selectOption:first').html());
	    $(id).attr('value',$(id).children('div.selectOptions').children('span.selectOption:first').attr('value'));
	    
	    $(id).children('span.selected,span.selectArrow').click(function(){
	      if($(id).children('div.selectOptions').css('display') == 'none'){
	        $(id).children('div.selectOptions').css('display','block');
	     
	      }
	      else
	      {
	        $(id).children('div.selectOptions').css('display','none');
	      }
	    });
	    
	    $(id).find('span.selectOption').click(function(){
	      $(id).children('div.selectOptions').css('display','none');
	      $(id).closest('div.select_type_linecon').attr('value',$(this).attr('value'));
	      $(id).children('div.selectOptions').siblings('span.selected').html($(this).html());
	    });
}

function uploadimgs(target , imgstag ,returnfn){
		var formData = new FormData();
    	formData.append("uploadfile0", target.files[0]);
    	 $.ajax({
             url: '/fileupload',
             processData: false,
                 contentType: false,
             data: formData,
             dataType : "json",
             type: 'POST',
             success: function(result){
            	
            	 $(imgstag).attr("src","/upload/"+result.rows[0]["fileurl"])
            	if(returnfn != null) returnfn();
             }
         });
	}

/**
*
*  Secure Hash Algorithm (SHA256)
*  http://www.webtoolkit.info/
*
*  Original code by Angel Marin, Paul Johnston.
*
**/
  
function SHA256(s){
  
    var chrsz   = 8;
    var hexcase = 0;
  
    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
  
    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
  
    function core_sha256 (m, l) {
         
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1,
            0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
            0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786,
            0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
            0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147,
            0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
            0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B,
            0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
            0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A,
            0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
            0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);

        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 
                   0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);

        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
  
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
  
        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
  
            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
  
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
  
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
  
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }
  
    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }
  
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
  
        for (var n = 0; n < string.length; n++) {
  
            var c = string.charCodeAt(n);
  
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
  
        }
  
        return utftext;
    }
    
  
    
  
    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }
  
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
  
}


