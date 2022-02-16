import { Main } from "./Main";
import { View } from "./view";

export class ViewPopup extends View {
//###############################################################################
constructor(mm:Main, nm = "settings") {
		super(mm, nm);
		this.mMain = mm;
		this.view_comp = "Layer5";
		this.view_com = "Layer5";
	
		this.Init();

	//	const mm = super.mMain;
	//	console.log(""+mm.jsd.local_data["lang"]);
}
//###############################################################################
async View() {
		if(this.mMain!=null)
	this.mMain.view_com_back = this.view_comp;
	await super.View().then((out)=>{
		return out;
	});
}
//###############################################################################
}