$(document).ready(function () {
        'use strict';

        //add the modal to the DOM
        $('#modals').append(` 
            <div class="modal fade" id="modal-customize-soundscape-catalogue" tabindex="-1" role="dialog" aria-labelledby="label-customize-soundscape-catalogue-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="label-customize-soundscape-catalogue-modal">Open Soundscape Catalogue</h4>
                    </div>
                    <div class="modal-body">
                        <form id="modal-soundscape-catalogue-features-form" class="form-horizontal">
                            <input type="checkbox" id="selectAll" name="selectAll" value="selectAll">
                            <label for="selectAll"> Select All</label><br>
                            <p><b>Sociocultural Dimension</b></p>
                            <select id="sociocultural" multiple="multiple">
                                <option value="Expressivity">Expressivity</option>
                                <option value="Identity">Identity</option>
                                <option value="Education">Education</option>
                                <option value="Technology">Technology</option>
                            </select>
                            <p><b>Historical Dimension</b></p>
                            <select id="historical" multiple="multiple">
                                <option value="Inheritability">Inheritability</option>
                                <option value="Survivability">Survivability</option>
                                <option value="Availability">Availability</option>
                                <option value="Preservability">Preservability</option>
                                <option value="Locatability">Locatability</option>
                            </select>
                            <p><b>Spatial Dimension</b></p>
                            <select id="spacial" multiple="multiple">
                                <option value="Presentability">Presentability</option>
                                <option value="Accessibility">Accessibility</option>
                                <option value="Audibility">Audibility</option>
                                <option value="Sustainability">Sustainability</option>
                            </select>
                            <p><b>Economic Dimension</b></p>
                            <select id="economic" multiple="multiple">
                                <option value="Sustainability">Sustainability</option>
                                <option value="Safety">Safety</option>
                                <option value="Enterpreneurship">Enterpreneurship</option>
                                <option value="Produtivity">Produtivity</option>
                                <option value="Life Quality">Life Quality</option>
                            </select>
                            <p><b>Personal Dimension</b></p>
                            <select id="personal" multiple="multiple">
                                <option value="Subjectivity">Subjectivity</option>
                            </select>
                            <p><b>Sonorous Dimension</b></p>
                            <select id="sonorous" multiple="multiple">
                                <option value="Geophony">Geophony</option>
                                <option value="Antropophony">Antropophony</option>
                                <option value="Biophony">Biophony</option>
                            </select>
                            <p><b>Military Dimension</b></p>
                            <select id="military" multiple="multiple">
                                <option value="Select">Select</option>
                            </select>
                            <p><b>Religious Dimension</b></p>
                            <select id="religious" multiple="multiple">
                                <option value="Select">Select</option>
                            </select>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="modal-button-open-catalogue" type="button" class="btn btn-primary"
                                data-save-text="Loading..." data-preparing-text="Loading catalogue... (please wait)">Confirm
                        </button>
                        <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        `
        );

var expanded = false;    
    
$(document).ready(function() {
$('#sociocultural').multiselect();
});

$(document).ready(function() {
$('#historical').multiselect();
});
    
$(document).ready(function() {
$('#spacial').multiselect();
});
    
$(document).ready(function() {
$('#economic').multiselect();
});

$(document).ready(function() {
$('#personal').multiselect();
});

$(document).ready(function() {
$('#sonorous').multiselect();
});

$(document).ready(function() {
$('#military').multiselect();
});

$(document).ready(function() {
$('#religious').multiselect();
});    

//insert a new button in the tool's toolbar
$('#appToolbar').append('<button type="button" id="soundscape-catalogue-configuration-button" title="Customize the Soundscape Catalogue"> Soundscape Catalogue </button>');

//define the code to be executed when the toolbar button is clicked
$('#soundscape-catalogue-configuration-button').click(function () {
    istar.plugins.soundscapeCatalogue.loadModal();
});

//define the code to be executed when the 'open catalogue' button is clicked
$('#modal-button-open-catalogue').click(function () {
    
    var checkBox = document.getElementById("selectAll");
    
    if (checkBox.checked == true){
        istar.plugins.soundscapeCatalogue.openSoundscapeModel();
    }
    else{
        istar.plugins.soundscapeCatalogue.openSoundscapeModel();
        istar.plugins.soundscapeCatalogue.removeUnwantedFeatures();
    }

    //closes the modal
    $('#modal-customize-soundscape-catalogue').modal('hide');
});


istar.plugins.soundscapeCatalogue.loadModal = function () {
    $('#modal-customize-soundscape-catalogue').modal('show')
};

istar.plugins.soundscapeCatalogue.openSoundscapeModel = function () {

    $('#loader').addClass("show-loader");
   // window.location.href = "soundscapeCatalog/loader.html";
    istar.fileManager.loadModel(istar.plugins.soundscapeCatalogue.model);
    $('#loader').addClass("hide-loader");
};

istar.plugins.soundscapeCatalogue.removeUnwantedFeatures = function () {

    //a variable for each checkbox to check whether it's checked or not
    var socioculturalExpressivityCheck = document.getElementById("sociocultural").item(0);
    var socioculturalIdentityCheck = document.getElementById("sociocultural").item(1);
    var socioculturalEducationCheck = document.getElementById("sociocultural").item(2);
    var socioculturalTechnologyCheck = document.getElementById("sociocultural").item(3);

    var historicalInheritabilityCheck = document.getElementById("historical").item(0);
    var historicalSurvivabilityCheck = document.getElementById("historical").item(1);
    var historicalAvailabilityCheck = document.getElementById("historical").item(2);
    var historicalPreservabilityCheck = document.getElementById("historical").item(3);
    var historicalLocatabilityCheck = document.getElementById("historical").item(4);
    
    var spacialPresentabilityCheck = document.getElementById("spacial").item(0);
    var spacialAccessibilityCheck = document.getElementById("spacial").item(1);
    var spacialAudibilityCheck = document.getElementById("spacial").item(2);
    var spacialSustainabilityCheck = document.getElementById("spacial").item(3);
    
    var economicSustainabilityCheck = document.getElementById("economic").item(0);
    var economicSafetyCheck = document.getElementById("economic").item(1);
    var economicEnterpreneurshipCheck = document.getElementById("economic").item(2);
    var economicProdutivityCheck = document.getElementById("economic").item(3);
    var economicLifeQualityCheck = document.getElementById("economic").item(4);
    
    var personalSubjectivityCheck = document.getElementById("personal").item(0);

    var sonorousGeophonoyCheck = document.getElementById("sonorous").item(0);
    var sonorousAntopophonyCheck = document.getElementById("sonorous").item(1);
    var sonorousBiophonyCheck = document.getElementById("sonorous").item(2);

    var militaryCheck = document.getElementById("military").item(0);

    var religiousCheck = document.getElementById("religious").item(0);

    //for each checkbox not checked, or group ofs, we need to remove the respective elements
    let list = [];
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Sociocultural Dimension";
        return node.prop('name').includes(kword);
    }); 
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if (socioculturalExpressivityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
        element[0][0].remove();
    }

    if (socioculturalIdentityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][1]);
        element[0][1].remove();
    }
    
    if (socioculturalEducationCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][2]);
        element[0][2].remove();
    }
    
    if (socioculturalTechnologyCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][3]);
        element[0][3].remove();
    }
    
    if(socioculturalIdentityCheck.selected == false && socioculturalEducationCheck.selected == false && socioculturalTechnologyCheck.selected == false && socioculturalExpressivityCheck.selected == false){
        list[0].remove();
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Historical Dimension";  
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(historicalInheritabilityCheck.selected == false) { 
        joint.dia.Element.prototype.collapseRemove(element[0][2]);
        element[0][2].remove();
    }

    if(historicalSurvivabilityCheck.selected == false) {  
        joint.dia.Element.prototype.collapseRemove(element[0][3]);
        element[0][3].remove();
    }

    if(historicalAvailabilityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][4]);
        element[0][4].remove();
    }

    if(historicalPreservabilityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][5]);
        element[0][5].remove();
    }
    
     if(historicalLocatabilityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][6]);
        element[0][6].remove();
    }
    
    if(historicalInheritabilityCheck.selected == false && historicalSurvivabilityCheck.selected == false && historicalAvailabilityCheck.selected == false && historicalPreservabilityCheck.selected == false && historicalLocatabilityCheck.selected == false) {
        list[0].remove();    
    }
     
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Spatial Dimension"; 
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(spacialPresentabilityCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][2]);
        element[0][2].remove();
    }
    
    if(spacialAccessibilityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][1]);
        element[0][1].remove();
    }
   
    if(spacialAudibilityCheck.selected == false) { 
        joint.dia.Element.prototype.collapseRemove(element[0][3]);
        element[0][3].remove();
    }

    if(spacialSustainabilityCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
    }
    
    if(spacialPresentabilityCheck.selected == false && spacialAccessibilityCheck.selected == false && spacialAudibilityCheck.selected == false && spacialSustainabilityCheck.selected == false){
        list[0].remove();    
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Economic Dimension";
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(economicSustainabilityCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
    }
    
    if(economicSafetyCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][1]);
        element[0][1].remove();
    }
    
    if(economicEnterpreneurshipCheck.selected == false) {  
        joint.dia.Element.prototype.collapseRemove(element[0][2]);
        element[0][2].remove();
    }
    
    if(economicProdutivityCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][3]);
        element[0][3].remove();
    }
    
     if(economicLifeQualityCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][4]);
        element[0][4].remove();
    }
    
    if(economicSustainabilityCheck.selected == false && economicSafetyCheck.selected == false && economicEnterpreneurshipCheck.selected == false && economicProdutivityCheck.selected == false && economicLifeQualityCheck.selected == false) {
        list[0].remove();    
    }
    
    if (spacialSustainabilityCheck.selected == false && economicSustainabilityCheck.selected == false) {
        element[0][0].remove();
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Personal Dimension";
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(personalSubjectivityCheck.selected == false) {   
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
        element[0][0].remove();
        list[0].remove();
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Sonorous Dimension";
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(sonorousGeophonoyCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
        element[0][0].remove();
    }
    
    if(sonorousAntopophonyCheck.selected == false) {    
        joint.dia.Element.prototype.collapseRemove(element[0][1]);
        element[0][1].remove();
    }
    
    if(sonorousBiophonyCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][2]);
        element[0][2].remove();
    }
    
    if(sonorousGeophonoyCheck.selected == false && sonorousAntopophonyCheck.selected == false && sonorousBiophonyCheck.selected == false){
        list[0].remove();
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Military Dimension";
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(militaryCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
        element[0][0].remove();
        list[0].remove();
    }
    
    list = _.filter(istar.getElements(), function(node) {
        var kword = "Religious Dimension";
        return node.prop('name').includes(kword);
    });
    
    var element = joint.dia.Element.prototype.getChildren(list[0]);
    
    if(religiousCheck.selected == false) {
        joint.dia.Element.prototype.collapseRemove(element[0][0]);
        element[0][0].remove();
        list[0].remove();
    }
    
};

console.log('Soundscape Catalogue plugin loaded');
});