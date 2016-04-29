
var getSize = require('get-folder-size');
var fs = require('fs-extra');
var contentEmpty = true;

function cpFolder(){
    fs.copy('./public/content', './temp/content', function (err) {
        if (err) return console.error(err);
        console.log("Content copy Success ! ! !")
    });
}

module.exports = function() {
    fs.stat('./temp/content', function(err, stat) {
        contentEmpty = typeof stat === 'undefined';
        if(contentEmpty){
            console.log('Temp Content file not found, copying...');
            cpFolder();
        } else {
            getSize('./temp/content', function(err1, size1) {
                if (err1) { throw err1; }
                getSize('./public/content', function(err2, size2) {
                    if (err2) { throw err2; }
                    var isSame = (size1 - size2) === 0;
                    if(!isSame){
                        console.log('Temp Content out of date, recopy again...');
                        fs.removeSync('./temp/content');
                        debugger;
                        cpFolder();
                    }
                });
            });
        }
    });
};