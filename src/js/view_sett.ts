import { Main } from "./Main";
import { View } from "./view";

export class ViewSett extends View {
//###############################################################################
//=====================================================
constructor(mm:Main) {
		super(mm, "settings");
		this.mMain = mm;
		this.view_comp = "Layer4";
		this.view_com = "Layer4";
	
		this.Init();

}
//###############################################################################
View() {
		if( this.mMain!=null )
	this.mMain.view_com_back = this.view_comp;
	return super.View();
}
//###############################################################################
}