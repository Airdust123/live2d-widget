// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(
website power by airdust
Welcome to my website.
                                         __                    __          
                            __          /\ \                  /\ \__       
   __       ___       __   /\_\   _ __  \_\ \   __  __    ____\ \ ,_\      
 /'__`\   /' _ `\   /'__`\ \/\ \ /\`'__\/'_` \ /\ \/\ \  /',__\\ \ \/      
/\ \L\.\_ /\ \/\ \ /\ \L\.\_\ \ \\ \ \//\ \L\ \\ \ \_\ \/\__, `\\ \ \_  __ 
\ \__/.\_\\ \_\ \_\\ \__/.\_\\ \_\\ \_\\ \___,_\\ \____/\/\____/ \ \__\/\_\
 \/__/\/_/ \/_/\/_/ \/__/\/_/ \/_/ \/_/ \/__,_ / \/___/  \/___/   \/__/\/_/
                                                                           
                                                                           
                             
                             
  ___     ___     ___ ___    
 /'___\  / __`\ /' __` __`\  
/\ \__/ /\ \L\ \/\ \/\ \/\ \ 
\ \____\\ \____/\ \_\ \_\ \_\
 \/____/ \/___/  \/_/\/_/\/_/

`);
