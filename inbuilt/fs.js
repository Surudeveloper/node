var fs = require('fs');

/*fs.appendFile('myCode.doc','This is node \n',function(err){
    if(err) throw err;
    console.log('File Appended');
});
*/
// fs.readFile('myCode.doc', 'utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })
// fs.rename('myCode.doc', 'yourCode.txt',function(err){
//     console.log('File Renamed');
// })
fs.unlink('yourCode.txt',function(err){
    if(err) throw err;
    console.log('File Deleted');
})