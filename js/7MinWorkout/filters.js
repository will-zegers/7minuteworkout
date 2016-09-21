angular
  .module('7minWorkout')
  .filter('secondsToTime', function() {
    return function(input) {
      let sec = parseInt(input, 10);
      if (isNaN(sec)) {
        return '00:00:00';
      }

      let hours = Math.floor(sec / 3600),
          minutes = Math.floor((sec - (hours * 3600)) / 60),
          seconds = sec - (hours * 3600) - (minutes * 60);

      return ('0' + hours).substr(-2) + ':'
        + ('0' + minutes).substr(-2) + ':'
        + ('0' + seconds).substr(-2);
    }
  });