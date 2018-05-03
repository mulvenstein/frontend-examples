app.service("hexConvert", function() {
    this.convert = function(val) {
        return val.toString(16);
    }
});
