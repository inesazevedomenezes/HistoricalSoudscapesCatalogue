$(document).ready(function () {
    'use strict';

    //add the modal to the DOM
    $('#modals').append(`
        <div class="modal fade" id="modal-color-label-soundscape-catalogue" tabindex="-1" role="dialog" aria-labelledby="label-customize-soundscape-catalogue-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="color-label">Color Label</h4>
                </div>
                <div class="modal-body">
                    <form id="color-label-form" class="form-horizontal">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <div >
                                    <label>
                                        <pre><span style="background-color:#FFA500"> </span> Sociocultural Dimenscion </pre>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <pre><span style="background-color:#CEED5C"> </span> Economic Dimension </pre>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <pre><span style="background-color:#FB351D"> </span> Historical Dimension </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><span style="background-color:#00BEB6"> </span> Spacial Dimension </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><span style="background-color:#F69AE0"> </span> Personal Dimension </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><span style="background-color:#914BF6"> </span> Military Dimension </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><span style="background-color:#FFF060"> </span> Religious Dimension </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><span style="background-color:#17A3FF"> </span> Sonorous Dimension </pre>
                                    </label>
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
    );

    //insert a new button in the tool's toolbar
    $('#appToolbar').append(
        '<button type="button" id="soundscape-catalogue-color-label-button" title="Color Label of the Soundscape Catalogue"> Color Label </button>'
    );
    
    //define the code to be executed when the toolbar button is clicked
    $('#soundscape-catalogue-color-label-button').click(function () {
        istar.plugins.soundscapeCatalogue.loadModal1();
    });
    
    istar.plugins.soundscapeCatalogue.loadModal1 = function () {
        $('#modal-color-label-soundscape-catalogue').modal('show')
    };
    
});