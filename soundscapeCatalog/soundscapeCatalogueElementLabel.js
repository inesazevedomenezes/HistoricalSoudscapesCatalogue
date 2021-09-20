$(document).ready(function () {
    'use strict';

    //add the modal to the DOM
    $('#modals').append(`
        <div class="modal fade" id="modal-element-label-soundscape-catalogue" tabindex="-1" role="dialog" aria-labelledby="label-customize-soundscape-catalogue-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="element-label">Element Label</h4>
                </div>
                <div class="modal-body">
                    <form id="element-label-form" class="form-horizontal">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <div >
                                    <label>
                                        <pre><img src="language/images/Quality.svg" /> Quality </pre>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <pre><img src="language/images/Goal.svg" /> Goal </pre>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <pre><img src="language/images/ContributionLink-make.svg" /> Make Contribution Link </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><img src="language/images/ContributionLink-help.svg" /> Help Contribution Link </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><img src="language/images/ContributionLink-hurt.svg" /> Hurt Contribution Link </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><img src="language/images/ContributionLink-break.svg" /> Break Contribution Link </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><img src="language/images/AndRefinementLink.svg" /> AND Refinement Link </pre>
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <pre><img src="language/images/OrRefinementLink.svg" /> OR Refinement Link </pre>
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
        '<button type="button" id="soundscape-catalogue-element-label-button" title="Element Label of the Soundscape Catalogue"> Element Label </button>'
    );
    
    //define the code to be executed when the toolbar button is clicked
    $('#soundscape-catalogue-element-label-button').click(function () {
        istar.plugins.soundscapeCatalogue.loadModal2();
    });
    
    istar.plugins.soundscapeCatalogue.loadModal2 = function () {
        $('#modal-element-label-soundscape-catalogue').modal('show')
    };
    
});