function refresh_bg() {
	var imgs=[['https://live.staticflickr.com/4224/34859073682_6521c98097_k_d.jpg','https://flic.kr/p/V7nS8L'],
	          ['https://live.staticflickr.com/2928/33836158865_9967ed0b7b_k_d.jpg','https://flic.kr/p/TxZacp'],
		        ['https://live.staticflickr.com/3912/32173807193_25b9282887_k_d.jpg','https://flic.kr/p/R26aXF'],
		        ['https://live.staticflickr.com/663/31721556606_a2c93cc524_k_d.jpg','https://flic.kr/p/Qk8gBL'],
		        ['https://live.staticflickr.com/1902/31574795338_9f8c92a409_k_d.jpg','https://flic.kr/p/Q7a5B5'],
		        ['https://live.staticflickr.com/1943/43504155550_00bd6d44df_k_d.jpg','https://flic.kr/p/29hjaMq'],
		        ['https://live.staticflickr.com/3800/12135293575_ed73159f8d_k_d.jpg','https://flic.kr/p/jumxZz'],
		        ['https://live.staticflickr.com/5669/21946242500_258ab7f529_k_d.jpg','https://flic.kr/p/zrjeio'],
		        ['https://live.staticflickr.com/320/19809339908_85b852fc18_k_d.jpg','https://flic.kr/p/wbu3Bf'],
		        ['https://live.staticflickr.com/757/20682474309_2b8c89a8ee_k_d.jpg','https://flic.kr/p/xvD63D'],
		        ['https://live.staticflickr.com/1447/24701230340_077c448336_k_d.jpg','https://flic.kr/p/DCLgcJ']];
	var img_idx=Math.floor(Math.random() * imgs.length); 
	document.body.style.backgroundImage = "url('"+imgs[img_idx][0]+"')";
	//document.getElementById('image_link').href=imgs[img_idx][1];
	//document.getElementById('image_link').title=imgs[img_idx][1];
	return false;
}
