function(config) {
    let $ = apex.jQuery,
        toolbarData = $.apex.interactiveGrid.copyDefaultToolbar(), // copy the whole toolbar
        toolbarGroup = toolbarData.toolbarFind("actions3"); // this is the group with the action=add row
        addrowAction = toolbarData.toolbarFind("selection-add-row"), //add row button
        saveAction = toolbarData.toolbarFind("save"); // Save button
 
    // add a new "delete" button
    toolbarGroup.controls.push({type: "BUTTON",
                                action: "selection-delete",
                                icon: "icon-ig-delete", // alternative FontAwesome icon: "fa fa-trash",
                                iconBeforeLabel: true,
                                hot: false,
                                label: "Sil" // update the label for the delete button
                               });
 
    // manipulate the buttons
    addrowAction.icon = "icon-ig-add-row"; // alternative font awesome icon: "fa fa-plus";
    addrowAction.iconBeforeLabel = true;
    addrowAction.hot = true;
    addrowAction.label = "Yeni Satır"; // update the label for the add row button
 
    saveAction.iconBeforeLabel = true;
    saveAction.icon ="icon-ig-save-as"; // list of alternative grid icons (Font Apex):icon-ig-save,icon-irr-saved-report
    //saveAction.icon ="fa fa-save"; // list of alternative font awesome icons: fa-save,fa-check
    saveAction.hot = true;
 
    // store the config
    config.toolbarData = toolbarData;
    return config;
}
