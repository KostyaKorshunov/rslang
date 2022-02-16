import { Main } from "./Main";
import { View } from "./view";

export class ViewWelcome extends View {
//###############################################################################
	mMain:Main|null = null
//=====================================================
constructor(mm:Main) {
		super(mm, "welcome");
		this.mMain = mm;
		this.view_comp = "Layer0";
		this.view_com = "Layer0";
}
//###############################################################################
EventListener() {
	
	document.querySelectorAll(".welcome_category").forEach( item => {
		item.addEventListener("click", (event) => {
			const cat:string = (event.target as Element).id;
		//	this.mMain.vwCat.SetCategories( cat );
		});
	});
	(document.querySelector(".logo_img") as Element).addEventListener("click", event => {
		if( this.mMain!=null ){
		this.mMain.RemoveView("Layer5");
		this.mMain.RemoveView("Layer4");
		this.mMain.RemoveView("Layer3");
		this.mMain.RemoveView("Layer2");
		this.mMain.RemoveView("Layer1");
		}
	});
	
}
//###############################################################################
View() {
		if( this.mMain!=null )
	this.mMain.view_com_back = this.view_comp;
	return super.View();
}
//###############################################################################
}