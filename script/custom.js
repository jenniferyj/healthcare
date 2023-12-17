$(function() {
    /* Admin Login */
    $('.toggle-pw').click(function(){
        // Toggle Icon Shape
        $(this).toggleClass('bi-eye');
        // Toggle Input Type
        var inputType = $(this).parent().children('input').attr('type');
        if(inputType == 'password') {
            $(this).parent().children('input').attr('type', 'text');
        }
        else {
            $(this).parent().children('input').attr('type', 'password');
        }
    });

	/* Include Files */
	$('.admin-info-include').load('/include/admin_info.html');
	$('.sidebar-include').load('/include/sidebar.html', function(){
		accordionNav = $(function(){
			$('.menu-toggle').click(function(e) {
				e.preventDefault();
				var toggleButton = $(this);
				if (toggleButton.next().hasClass('active')) {
					toggleButton.next().removeClass('active');
					toggleButton.next().slideUp(400);
					toggleButton.removeClass('rotate');
				} else {
					toggleButton.parent().parent().find('li .sub-menu').removeClass('active');
					toggleButton.parent().parent().find('li .sub-menu').slideUp(400);
					toggleButton.parent().parent().find('.menu-toggle').removeClass('rotate');
					toggleButton.next().toggleClass('active');
					toggleButton.next().slideToggle(400);
					toggleButton.toggleClass('rotate');
				}
			});
		});
	});

	/* Tab Menu */
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	/* Data Table */
	$('#dataTable_ex').DataTable();

	/* Search Dropdown Menu */
	$('.dropbtn').click(function(){
		$('.dropdown-content').addClass('active');
	});
});