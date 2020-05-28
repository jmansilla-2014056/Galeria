//Add More Tab Functionality
var manageTabId = 1;
$(document).on('click', '[href="#addMoreTabs"]', function(e) {
    e.preventDefault();
    manageTabId+=1; //increament functionality to make unique id for tab and content
    $(this).parent().before('<li><a href="#round'+manageTabId+'" class="more-tab" role="tab" data-toggle="tab">Round '+manageTabId+'</a><span class="glyphicon glyphicon-remove" data-tabremove="#round'+manageTabId+'" data-toggle="tooltip" data-placement="top" title="Delete"></span></li>');
    $('#addTabContent').append('<div role="tabpanel" class="tab-pane fade" id="round'+manageTabId+'"><h4>Round '+manageTabId+'</h4><p>Lorem ipsum dolore...</p></div>');

    // Initialize tooltip after click
    $('[data-toggle="tooltip"]').tooltip({trigger : 'hover', delay: { "show": 100}});
});


// Remove Tab Functionality
$(document).on('click', '[data-tabremove]', function() {
    var getTargetId = $(this).data('tabremove');

    // check if this tab is active then previous tab will be active after delete this tab
    var CheckActive = $(this).parent().hasClass('active');
    if (CheckActive==true) {
        $(this).parent().prev().addClass('active');

        // Now add (in & active) class related to add active tab - for show content
        var getTabContentId = $(this).parent().prev().find('a').attr('href');
        $(getTabContentId).addClass('in active');
    }

    // Remove tab and related content
    $(this).parent().remove();
    $(getTargetId).remove();
});


// Initialize on page load
$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger : 'hover', delay: { "show": 100}})
});