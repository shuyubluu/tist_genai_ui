var fm = document.all;

$(document).ready(function() {

    	paper = new tist.diagram.Paper({
	        el: document.getElementById('paper'),
	       /* width: 1320,
	        height: 500,*/
	        width: 1250,
	        height: 770,
	        background: {
	            color: 'white'
	        }
    	});
});


function check_data(){
	var json = JSON.stringify(paper.toJson()).trim();
        if(json =="{\"cells\":[]}"){
        	fm.family_json.value = "";
        }else{
        	saveImg();
        }
}


function blobToFile(theBlob, fileName){
	theBlob.name = fileName;
	return theBlob;
}

function clearPaper (){
	if(confirm("確定要清空家系圖嗎？")){
		paper.clear();
		paper.getOriginalPaper().options.width = 1250;
		paper.getOriginalPaper().options.height = 770;
		var temppaper = document.getElementById('paper');
		temppaper.style.width = 1250;
		temppaper.style.height = 770;
	}
}

function savePaper(){
	var json = JSON.stringify(paper.toJson()).trim();
        if(json =="{\"cells\":[]}"){
        	fm.family_json.value = "";
        }else{
        	fm.family_json.value = json;
        }
}

function addPaperDown(){
	paper.clear();
	temppaper = document.getElementById('paper');
	var teheight=temppaper.style.height;
	teheight = Number(teheight.replace("px",""))+100;
	temppaper.style.height = teheight;
	paper.fromJson(JSON.parse(fm.family_json.value));
	paper.getOriginalPaper().options.height = teheight;
}

function addPaperRight(){
	paper.clear();
	temppaper = document.getElementById('paper');
	var tewidth=temppaper.style.width;
	tewidth = Number(tewidth.replace("px",""))+100;
	temppaper.style.width = tewidth;
	paper.fromJson(JSON.parse(fm.family_json.value));
	paper.getOriginalPaper().options.width = tewidth;
}

async function saveImg(){
	//2021.12.22
    var json = JSON.stringify(paper.toJson()).trim();
   	fm.family_json.value = json;
   	paper.clear();
   	temppaper = document.getElementById('paper');
   	var teheight=temppaper.style.height.replace("px","");
   	paper.getOriginalPaper().options.height=teheight;
   	//alert(paper.getOriginalPaper().options.height);
   	//debugger;
   	paper.fromJson(JSON.parse(fm.family_json.value));

    var pngData;
   	const svg = paper.getOriginalPaper().svg;
    const xml = new XMLSerializer().serializeToString(svg);
    const data = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)));
    //const width = $('#paper')[0].clientWidth;
    const width = paper._paper.options.width;
    const height = paper._paper.options.height;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    const image = new Image();
    await new Promise((resolve, reject) => {
    	image.onload = () => {
    		context.fillStyle = paper._paper.options.background.color;
    	    context.fillRect(0, 0, canvas.width, canvas.height);
    	    context.drawImage(image, 0, 0);
    	    pngData = canvas.toDataURL('image/png');
    	    //pngData = pngData.substring(pngData.indexOf(",")+1);
    	    //fm.png_base64.value = pngData;
    	    resolve(pngData);
    	};
    	image.onerror = reject;
    	image.src = data;
	});
    var blob = paper._b64toBlob(pngData,'png');
	var file = blobToFile(blob,fm.id_no.value);
	var formData = new FormData($("#uploadForm")[0]);//構造FormData物件
	//以下順序不可錯誤file一定要放在最後
	formData.append("frequency",fm.frequency.value);
	formData.append("reasse_seqno",fm.reasse_seqno.value);
	formData.append("zap_city",fm.zap_city.value);
	formData.append(fm.id_no.value, file);
	$.ajax({
		url : 'sb15010_file_upload.jsp',//接受請求的Servlet地址
		type : 'POST',
		data : formData,
		async : false,//同步請求
		cache : false,//不快取頁面
		contentType : false,//當form以multipart/form-data方式上傳檔案時，需要設定為false
		processData : false,//如果要傳送Dom樹資訊或其他不需要轉換的資訊，請設定為false
		success : function(ret) {
	        ret = $.trim(ret);
	        if(ret == "true"){
				//$("#running_wrapper").height(document.body.scrollHeight);
		        $("#running_wrapper").css("display","");
				$("#running_show").css("display","");
		        document.main.action = "sb15010_action.jsp";
		        document.main.submit();
		        flag =true;
		        return flag;
			}else{
				alert("家系圖上傳失敗,請洽系統客服人員！");
				flag =false;
				return flag;
			}
		},
		error : function(returndata) {
			alert("家系圖上傳失敗,請洽系統客服人員！");
			flag =false;
			return flag;
		}
	});
}
