var minDate = new Date();
minDate.setDate(minDate.getDate() + 1);

$("#startDate").datepicker({
    prevHtml: '<div class="nav-arrow">arrow_back</div>',
    nextHtml: '<div class="nav-arrow">arrow_forward</div>',
    minDate: minDate,
    onShow: function(d) {
        if(d.$datepicker.find('button').html() === undefined ) {
            d.$datepicker.append('<button type="button" class="datepicker--ready"> Применить </button>');
            d.$datepicker.find('button').click(function(event) {
                d.hide(); //Should be save data in databank + hide
            });
        }
    },
    onSelect: function(fd, d, picker) {
        $("#startDate").val(fd.split("-")[0]);
        $("#endDate").val(fd.split("-")[1]);
    },
    navTitles: {
        days: 'MM yyyy'
    },
    clearButton: true,
})

$("#endDate").datepicker({
    prevHtml: '<div class="nav-arrow">arrow_back</div>',
    nextHtml: '<div class="nav-arrow">arrow_forward</div>',
    position: 'bottom right',
    minDate: minDate,
    onShow: function(d) {
        if(d.$datepicker.find('button').html() === undefined ) {
            d.$datepicker.append('<button type="button" class="datepicker--ready"> Применить </button>');
            d.$datepicker.find('button').click(function(event) {
                d.hide(); //Should be save data in databank + hide
            });
        }
    },
    onSelect: function(fd, d, picker) {
        $("#startDate").val(fd.split("-")[0]);
        $("#endDate").val(fd.split("-")[1]);
    },
    navTitles: {
        days: 'MM yyyy'
    },
    clearButton: true,
});

$("#filterDatePicker").datepicker({
    prevHtml: '<div class="nav-arrow">arrow_back</div>',
    nextHtml: '<div class="nav-arrow">arrow_forward</div>',
    position: 'bottom right',
    minDate: minDate,
    dateFormat: "dd M",
    startDate: new Date(),
    onShow: function(d) {
        if(d.$datepicker.find('button').html() === undefined ) {
            d.$datepicker.append('<button type="button" class="datepicker--ready"> Применить </button>');
            d.$datepicker.find('button').click(function(event) {
                d.hide();
            });
        }
    },
    clearButton: true,
});
