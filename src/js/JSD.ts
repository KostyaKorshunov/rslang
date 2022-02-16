type TData = { [key:string]: TData|Array<string>|string };

export class JSD {
//###############################################################################
/**	============		JS DATA			============ */
	local_data:TData = {
		"sett": {},
		"pars": []
	}
	data:Object = {}
//=====================================================
constructor() {
	const request = new XMLHttpRequest();
	request.open('GET', "./src/assets/json/data.json", false);

	request.send();
	this.data = JSON.parse( request.response );

	this.fn_readDataLS();
}
//###############################################################################
fn_readDataLS() {
	//	read data from LS

		const chk = localStorage.getItem("christmas");
		let c_obj = null;
		try {
			const tmp:string|null = localStorage.getItem("christmas");
				if( tmp!=null )
			c_obj = JSON.parse( tmp );
		} catch (e) {	
			console.log( "	"+e );
		}
		if (typeof c_obj === "object" && c_obj !== null) {
			this.local_data = c_obj;
		}
	//+++++++++++++++++++++++++++++++++++++++++++++
	//	console.log(">>>>	"+this.constructor.name+"	JSD "+it+" / "+dt.length);
}
//###############################################################################
fn_writeDataLS() {
	localStorage.setItem("christmas", JSON.stringify(this.local_data))
}
//###############################################################################
}