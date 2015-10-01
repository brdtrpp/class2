UI.registerHelper('formatTime', function(date, options) {
  if(date)
    return moment(date).format('MM/DD/YYYY, hh:mm');
});