import { Main } from "./Main";

export class View {
//###############################################################################
	mMain:Main|null = null
	view_comp:string = "";
	view_path:string = "./src/views/"
	view_src:string = "";
	view_com:string = "";
//=====================================================
constructor(mm:Main, nm:string) {
	this.mMain = mm;
	this.view_src = this.view_path+nm+".html";
	this.view_comp = nm;
	this.view_com = nm;

	this.Init();
}
//###############################################################################
Init() {

	const th = this;
	setTimeout(function(){ th.EventListener(); }, 500 );

}
//###############################################################################
EventListener() {
	
}
//###############################################################################
View_def( nm:string ) {
	this.view_src = this.view_path+nm+".html";
	this.view_comp = nm;
	this.view_com = nm;
	this.View();

	return this.view_com;
}
//###############################################################################
View_main( nm:string ) {
	this.view_src = this.view_path+nm+".html";
	this.view_comp = "Layer0";
	this.view_com = nm;
	this.View();

	return this.view_com;
}
//###############################################################################
async View() {
	const html_text = await this.Read_HTML().then( ()=>{
	this.UnsetHide();
		return this.view_com;	
	});
}
//###############################################################################
Read_HTML() {
	return new Promise( (resolve) => {
	const vc = this.view_comp;
	fetch(this.view_src).then(function (response) {
		// The API call was successful!
		const r_html = response.text();
		return r_html;
	}).then(function (html) {
		// Convert the HTML string into a document object
			var parser = new DOMParser();
			var doc = parser.parseFromString(html, 'text/html').body.innerHTML;

		//	document.querySelector('[data-component='+vc+']').insertAdjacentHTML('afterbegin', doc );
			(document.querySelector('[data-component='+vc+']') as Element).innerHTML = doc;
			
		resolve( doc );
		return doc;
	}).catch(function (err) {
		// There was an error
		console.warn("Error! ", err);
	});
	});
}
//###############################################################################
RemoveView() {
		if( this.mMain != null )
		this.mMain.RemoveView(this.view_comp);
}
//###############################################################################
UnsetHide() {

	(document.querySelector('[data-component='+this.view_comp+']') as Element)
		.classList.remove("lyr_hide");

 	(document.querySelector('[data-component='+this.view_comp+']') as Element)
		.classList.remove("lyr_hide1");
		
	(document.querySelector('[data-component='+this.view_comp+']') as Element)
		.classList.remove("lyr_hide2");

	(document.querySelector('[data-component='+this.view_comp+']') as Element)
		.classList.remove("lyr_hide3");

	(document.querySelector('[data-component='+this.view_comp+']') as Element)
		.classList.remove("lyr_hide4");

}
//###############################################################################
}