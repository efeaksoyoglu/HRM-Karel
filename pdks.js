var hafta
model=this.data.model;
if(this.data!=null){
    if(this.data.selectedRecords[0]!=null){
        hafta= model.getValue(this.data.selectedRecords[0],"HAFTA");
   }
}

apex.item("P120_DETAYLI_SELECTED").setValue(hafta);



var hafta
model=this.data.model;
if(this.data!=null){
    if(this.data.selectedRecords[0]!=null){
        hafta= model.getValue(this.data.selectedRecords[0],"HAFTA");
   }
}

if (hafta > 1 ){
apex.item("P120_SELECTED_H").setValue(hafta);
}



let text=apex.item('120_ISLENME_HATASI').getValue();
let text2=". hafta değerleri işlenmektedir. Fazla-eksik hesaplama değerleri raporunuza yansıtılmamıştır.";
let text3=text.concat(text2);
alert(text3); 



document.getElementById("P120_DETAY_3").checked = false;

document.getElementById("P120_DETAY_2").checked = false;

document.getElementById("P120_DETAY_1").checked = false;

document.getElementById("P120_VN_DETAY_1").checked = false;




var id = $v("P120_SELECTED_H"), 

    ig$ = apex.region("HGH").widget(), // change mygrid to your IG Static ID

    igActions = ig$.interactiveGrid("getActions");

function selectRecord() {

    var gridView, record;

    gridView = ig$.interactiveGrid("getViews").grid;

    record = gridView.model.getRecord( id ); // find the record by id

    //showWait: true

    if ( record ) {

        gridView.view$.grid("setSelectedRecords", [record], true); // select and focus record
    

    } else {
        console.log("Record not found."); // it may not exist or may be on a later page!

    }

}

console.log("Select id: " + id);

console.log("view: ", igActions.get("change-view"));

// Make sure the current view is the grid view. Can skip this if you make sure the IG can never have other views.

// Note the icon view also supports selection so that could work too.

//ig$.interactiveGrid("getViews", ig$.interactiveGrid("getCurrentViewId")).refresh()


if ( igActions.get("change-view") !== "grid" ) {

    igActions.set("change-view", "grid");

    // When changing veiw need to wait until there is some data shown to select

    ig$.on("gridpagechange.sel", function() {

        console.log("Page changed");

        ig$.off("gridpagechange.sel"); // do this just once

        selectRecord();
        

    });

} else {
    selectRecord();
}