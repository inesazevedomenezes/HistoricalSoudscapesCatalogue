$(document).ready(function () {
        'use strict';

        //add the modal to the DOM
        $('#modals').append(`

            <div class="modal fade" id="modal-search-soundscape-catalogue" tabindex="-1" role="dialog" aria-labelledby="label-search-soundscape-catalogue-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="label-search-soundscape-catalogue-modal">Soundscape Catalogue Search</h4>
                    </div>
                    <div class="modal-body">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                        <form id="modal-soundscape-catalogue-features-form" class="form-horizontal">
                            <p><b>Search for Related Elements</b></p>
                            <p>Please end all words with a ;</p>
                            <div style="overflow: hidden; padding: 16px 16px; text-decoration: none;background-color: #e9e9e9; font-size: 16px; text-align: center;">
                            <label for="kword" style="margin-left: -7px;">Enter Keywords:</label>
                            <input style="padding: 6px; margin-top: 0px; font-size: 17px; border: none; width: 375px;" type="text" placeholder="Search example: music; politics;" id="kword" name="kword">
                            <button type="button" id="modal-search-button" onmouseover="this.style.background='#ccc';" onmouseout="this.style.background='#ddd';" style="float: right; padding: 6px 10px; margin-top: 0px; margin-right: 6px; background: #ddd; font-size: 17px; border: none; cursor: pointer;"><i class="fa fa-search"></i></button>
                            </div>
                            <p>
                            <div id="title">
                            </div>
                            </p>
                        </form>
                    </div>
                    <div id="myItemList">
                    </div>
                    <div class="modal-footer">
                        <button id="modal-button-view-results" type="button" class="btn btn-primary">View Results
                        </button>
                        <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        `
        );

//insert a new button in the tool's toolbar
$('#appToolbar').append('<button type="button" id="soundscape-catalogue-search-button" title="Search in the Soundscape Catalogue"> Search </button>');

//define the code to be executed when the toolbar button is clicked
$('#soundscape-catalogue-search-button').click(function () {
    istar.fileManager.loadModel(istar.plugins.soundscapeCatalogue.model);
    
    var remove = document.getElementById('myItemList');
    var clear = document.getElementById('title');

    while(remove.firstChild){
        remove.removeChild(remove.firstChild);
    }

    while(clear.firstChild){
        clear.removeChild(clear.firstChild);
    }
    
    istar.plugins.soundscapeSearch.loadModal();
});

istar.plugins.soundscapeSearch.loadModal = function () {
    $('#modal-search-soundscape-catalogue').modal('show')

    var remove = document.getElementById('myItemList');

    while(remove.firstChild){
        remove.removeChild(remove.firstChild);
    }
};

let checkedValues = [];
let remov = [];


$('#modal-button-view-results').click(function () {
    let checkBoxes = [];

    checkBoxes = document.querySelectorAll('input[id="ischecked"]:checked');

    checkBoxes.forEach(function(checkbox) {
        checkedValues.push(checkbox.value);
    });

    istar.plugins.soundscapeCatalogue.openCheckedModel();
    istar.plugins.soundscapeCatalogue.checkedElements();
    istar.plugins.soundscapeCatalogue.getPath();
    istar.plugins.soundscapeCatalogue.removeUncheckedFeatures(remov[0]);

    $('#modal-search-soundscape-catalogue').modal('hide');

});

istar.plugins.soundscapeCatalogue.openCheckedModel = function () {
    istar.fileManager.loadModel(istar.plugins.soundscapeCatalogue.model);
};

var dchecked = [];
var l = 0;

istar.plugins.soundscapeCatalogue.checkedElements = function () {
    
    remov = _.filter(istar.getElements(), function(node) {
    var hs = "Historical Soundscapes"; 
    return node.prop('name').includes(hs);
    });
    
    var i;
    for(i = 0; i<8; i++){
        checkedValues.forEach(function(each){
            if(dlist[i]){
                if(dlist[i].includes(each)){
                var j = 2;
                    var d = dlist[i];
                    if(d[j]){
                        while(j < d.length){
                        dchecked[l] = d[j];
                        l++;
                        j++;
                        }
                    }
                }
            }
        });
    }
};

var r = null;

istar.plugins.soundscapeCatalogue.getParent = function (element) {
        
        var filt = 0;
    
        var list = _.filter(istar.getElements(), function(node) {
            
            if(!node.isActor()){
                
                var children = joint.dia.Element.prototype.getChildren(node)[0];
            
                filt = _.filter(children, function(c){
                return c.prop('id') == element.prop('id');
                });
            }
            if(filt.length > 0){
                r = node; //o pai
            }
        });
};

var path = [];

istar.plugins.soundscapeCatalogue.getPath = function () {
    //esta funcao da todos os elementos que nao devem ser eliminados mas nao da por ordem
    //a ordem e o elemento depois os pais e depois os  filhos e no fim o de cima de todos
    var list = _.filter(istar.getElements(), function(node) {
        var hs = "Historical Soundscapes"; 
        return node.prop('name').includes(hs);
    });
    var i;
    for(i=0; i < dchecked.length; i++){
            var lchild = dchecked[i];
            path.push(lchild);
            this.getParent(lchild);
            var lparent = r;
            while(lparent != list[0]){
                path.push(lparent);
                this.getParent(lparent);
                lparent = r;
            }
        
    //////fazer a funcao de getChildren tambem recursiva
            istar.plugins.soundscapeCatalogue.recursiveGetChildren(lchild);
            path.push(list[0]);

}
};
    
istar.plugins.soundscapeCatalogue.recursiveGetChildren = function (element) {
    
    var lchilds = joint.dia.Element.prototype.getChildren(element)[0];
            if(lchilds.length > 0){
                
                var i;
                for(i = 0; i<lchilds.length; i++){
                    var l = lchilds[i];
                    path.push(l);   
                    
                    var innerChildren = joint.dia.Element.prototype.getChildren(l)[0];
                    if(innerChildren.length>0){
                        this.recursiveGetChildren(l);
                    }
                }
                
            }
            
};
    
var local;
var delet = [];

istar.plugins.soundscapeCatalogue.removeUncheckedFeatures = function (element) {

        //var element = this;//stores 'this' in a named variable so that it can be read by the anonymous function            
            var childrenNodes = joint.dia.Element.prototype.getChildren(element)[0];

            var childrenLinks = joint.dia.Element.prototype.getChildren(element)[1];

            if (childrenNodes) {

                var i;
                for(i = 0; i < childrenNodes.length; i++){

                    local = childrenNodes[i];

                    var innerChildren = joint.dia.Element.prototype.getChildren(local)[0];
                    
                    var equals = new Boolean(0);
                    for(var j = 0; j<path.length; j++){

                        if(path[j].prop('name') == local.prop('name')){
                            equals = 1;
                            //path.splice(j, 1); //apagar o que ja apareceu
                        }
                    }
                    if(equals == false){
                        delet.push(local);
                        if (childrenLinks) {
                            childrenLinks[i].remove();
                        }
                    }
                    if(innerChildren.length>0){
                        istar.plugins.soundscapeCatalogue.removeUncheckedFeatures(local);
                    }
            }
    }
    while(delet.length >0){
        var d = delet.shift();
        d.remove();
    }
};

let dlist = [];

//define the code to be executed when the 'open catalogue' button is clicked
$('#modal-search-button').click(function () {
    
    var remove = document.getElementById('myItemList');
    var clear = document.getElementById('title');

    while(remove.firstChild){
        remove.removeChild(remove.firstChild);
    }

    while(clear.firstChild){
        clear.removeChild(clear.firstChild);
    }

    //funcao de pesquisa dos elementos com a palavra relacionada
    let kwords = [];
    
    let list = [];
    
    var kword = document.getElementById("kword").value.toLowerCase();
    
    kwords = kword.split(';');
    
    while(kwords.length > 1){
        
        let inner = [];
        
        inner = _.filter(istar.getElements(), function(node) {

        return (node.prop('name').toLowerCase().includes(kwords[0].trim())|| node.prop('customProperties/Description').toLowerCase().includes(kwords[0].trim()));
            
        /////// fazer aqui a funcao que inlcui a descricao na pesquisa
        
        });
        
        kwords.shift();
        
        inner.forEach(function(item) {
            
            list.push(item);

        });
        
    }

    // falta fazer a pesquisa também pela descricao
    

    //funcao de mostrar os elementos no mesmo modal

    let ul = document.createElement('ul');

    const orange = "#FFA500";
    const blue = "#17A3FF";
    const pink = "#F69AE0";
    const purple = "#914BF6";
    const yellow = "#FFF060";
    const red = "#FB351D";
    const green = "#00BEB6";
    const lgreen = "#CEED5C";

    let p = document.createElement('p');

    document.getElementById('title').appendChild(p);

    let li = document.createElement('b');
    
    if(list.length > 0){
                
        p.appendChild(li);

        li.innerHTML += "Your search returned results in the following dimensions:";
        
        let lt = document.createElement('p');
    
        p.appendChild(lt);

        lt.innerHTML += "Please check the ones you want.";

    var one = new Array;
    var two = new Array;
    var three = new Array;
    var four = new Array;
    var five = new Array;
    var six = new Array;
    var seven = new Array;
    var eight = new Array;

    var a = 2;
    var b = 2;
    var c = 2;
    var d = 2;
    var e = 2;
    var f = 2;
    var g = 2;
    var h = 2;

    list.forEach(function(item){

            switch(item.prop('backgroundColor')) {
                case orange:
                // code block
                    one[0] = "Sociocultural Dimension";
                    one[1] = orange;
                    //label.innerHTML += "Sociocultural Dimension";
                    //label.style.color = orange;
                    one[a] = item;
                    a++;
                break;
                case blue:
                // code block
                    two[0] = "Sonorous Dimension";
                    two[1] = blue;
                    two[b] = item;
                    //label.innerHTML += "Sonorous Dimension";
                    //label.style.color = blue;
                    b++;
                break;
                case pink:
                // code block
                    three[0] = "Personal Dimension";
                    three[1] = pink;
                    three[c] = item;
                    c++;
                    //label.innerHTML += "Personal Dimension";
                    //label.style.color = pink;
                break;
                case purple:
                // code block
                    four[0] = "Military Dimension";
                    four[1] = purple;
                    four[d] = item;
                    d++;
                    //check.innerHTML += "Military Dimension";
                    //label.style.color = purple;
                break;
                case yellow:
                // code block
                    five[0] = "Religious Dimension";
                    five[1] = yellow;
                    five[e] = item;
                    e++;
                    //label.innerHTML += "Religious Dimension";
                    //label.style.color = yellow;
                break;
                case red:
                // code block
                    six[0] = "Historical Dimension";
                    six[1] = red;
                    six[f] = item;
                    f++;
                    //label.innerHTML += "Historical Dimension";
                    //label.style.color = red;
                break;
                case green:
                // code block
                    seven[0] = "Spacial Dimension";
                    seven[1] = green;
                    seven[g] = item;
                    g++;
                    //label.innerHTML += "Spacial Dimension";
                    //label.style.color = green;
                break;
                case lgreen:
                // code block
                    eight[0] = "Economic Dimension";
                    eight[1] = lgreen;
                    eight[h] = item;
                    h++;
                    //label.innerHTML += "Economic Dimension";
                    //label.style.color = lgreen;
                break;
           
                default:
                // code block
        }    

    });
    
    document.getElementById('myItemList').appendChild(ul);

        dlist[0] = one;
        dlist[1] = two;
        dlist[2] = three;
        dlist[3] = four;
        dlist[4] = five;
        dlist[5] = six;
        dlist[6] = seven;
        dlist[7] = eight;    

    for(let i = 0; i < dlist.length; i++){
            var save = dlist[i];
            if(save[2]){

                let label = document.createElement('label');
                let pgf = document.createElement('p');
                let check = document.createElement('input');
                check.value += save[0];
                label.innerHTML += save[0];
                label.style.color += save[1];

            check.type = 'checkbox';
            check.id = 'ischecked';
            check.style.marginRight = "5px";
            check.style.top = "1px";
            check.style.position = "relative";

            ul.appendChild(check);
            ul.appendChild(label);
            ul.appendChild(pgf);
            }
    }
    }
    
    else{
        
        p.appendChild(li);

        li.innerHTML += "Your search did not return any results.";
    }

});    

document.getElementById("kword").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("modal-search-button").click();
    }
});

});