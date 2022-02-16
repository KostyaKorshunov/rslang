import { JSD } from "./JSD";
import { View } from "./view";
import { ViewWelcome } from "./view_welcome";
import { ViewSett } from "./view_sett";

export class Main {
	public jsd: JSD;
	public vwDef:View;
	public vwWelcome:ViewWelcome;
	public vwSett:ViewSett;

	public view_com_back:string;

//#############################################################
constructor() {
	this.jsd  = new JSD();
	this.vwDef = new View(this, "");
	this.vwWelcome = new ViewWelcome(this);
	this.vwWelcome = new ViewWelcome(this);
	this.vwSett = new ViewSett(this);

	this.view_com_back = "";
	this.InitMain();

	//	console.log(">>>>	>>>>	Main	<<<<	<<<<");
}
//#############################################################
InitMain() {

	this.vwWelcome.View().then((out)=>{ 	});
	this.vwDef.View_def("header");
	this.vwDef.View_def("footer");

	const th = this;
	setTimeout(function(){ th.EventListener(); }, 800 );
	//	this.EventListener();
	
	//	console.log(">>>>	====	Init");
	const lyr5: Element|null = document.querySelector('.lyr5');
		if( lyr5!=null )
	lyr5.innerHTML = "";
	//+++++++++++++++++++++++++++++++++++++
	//	console.log(" ");
	//	console.log(" Из частично выполненного: ");
}
//#############################################################
EventListener() {
	const el1: Element|null = document.querySelector(".bt_sett");
		if( el1!=null )
	el1.addEventListener("click", event => {
		this.vwSett.View().then(()=>{ 	});
	});
	const el2: Element|null = document.querySelector(".bt_back");
		if( el2!=null )
	el2.addEventListener("click", event => {
		this.RemoveViewAuto();
	});
	//+++++++++++++++++

/*	document.addEventListener("dragover", function(event) {
		// prevent default to allow drop
		event.preventDefault();
	}, false);
	document.addEventListener("dragenter", function(event) {
		// highlight potential drop target when the draggable element enters it
		if (event.target.className == "dropzone") {
		  event.target.style.background = "purple";
		}
	  
	}, false);*/
}
//#############################################################
RemoveViewAuto() {
	for(let i = 5; i > 0; i--) {
		const el = document.querySelector('[data-component=Layer'+i+']');
		if( el !== null && el !== undefined ) {
			if( el.innerHTML.length > 3) {
				this.RemoveView( "Layer"+i );
				break;
			}else{
				el.classList.add("lyr_hide");
			}
		}else{
			console.log( ">>>>	Error remove Layer"+i );
		}
	}
}
//#############################################################
RemoveView(nm = this.view_com_back) {
	const nm1 = nm;
	if( nm === "Layer0" ){
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide");

	}else if( nm === "Layer1" ) {
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide2");

	}else if( nm === "Layer2" ) {
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide2");

	}else if( nm === "Layer3" ) {
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide2");

	}else if( nm === "Layer4" ) {
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide3");

		setTimeout(()=>{
			(document.querySelector('[data-component='+nm1+']') as Element)
				.classList.add("lyr_hide");
		}, 400);

	}else if( nm === "Layer5" ) {
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide4");

		setTimeout(()=>{
			(document.querySelector('[data-component='+nm1+']') as Element)
				.classList.add("lyr_hide");
		}, 400);
		
	}else{
		(document.querySelector('[data-component='+nm+']') as Element)
				.classList.add("lyr_hide");
	}
	
	setTimeout(()=>{
		(document.querySelector('[data-component='+nm1+']') as Element)
				.innerHTML = "";
	}, 600);

	//	console.log(">>>>	"+this.constructor.name+"	Back from "+nm);
}
//#############################################################

//#############################################################

//#############################################################

//#############################################################
/*
GetData(id = 0){
	const out = new Array();
	const dt = this.jsd.data["arr"];
	if( id > 0 && id <= 120 ) {
		out.push( dt[id - 1] );
	}else{
		for(let i = 0; i < dt.length; i++){
			out.push( dt[i] );
		}
	}
	//	console.log(">>>>	"+this.constructor.name+"	Get Data = "+out["name"] );
	return out;
}*/
//#############################################################
/*
SaveData( dt ) {
	//save data!!!
	this.jsd.local_data["G1"][dt.round] = dt.arr;
	this.jsd.fn_writeDataLS();
}	*/
//#############################################################
GetLocalData( gm: string, cat: string ){
	const dt_arr = this.jsd.local_data;
	const dt = dt_arr[gm];
/*	if( Object.keys(dt_arr).indexOf( cat ) >= 0 ){
		return dt_arr[ cat ];
	}else{
		return [];
	}*/
}
//#############################################################
ToggleHeader1( gm = "" ) {
	if( gm == "" ){
		const el = document.querySelector('[data-component=header1]');
			if( el!=null )
		el.classList.add("lyr_hide");

		setTimeout(()=>{
			const el1 = document.querySelector('[data-component=header1]');
				if( el1!=null )
			el1.innerHTML = "";
		}, 200);
	}else{
		this.vwDef.View_def("header1");
	}
	
}
//#############################################################
//#############################################################
}

new Main();
