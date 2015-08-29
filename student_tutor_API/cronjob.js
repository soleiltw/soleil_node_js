var StudentModel = require('./models/student');
var CronJob = require('cron').CronJob;

function job(){
var job = new CronJob('00 55 18 * * 0-6', function() {
  /*
   * Runs everyday
   * at 18:55:00 AM. 
   */
    
    StudentModel.find({quota: 0 },function (error, student) {
    
            if (!error) {
                for (var i = student.length - 1; i >= 0; i--) {
                  student[i].quota += 1;
                  student[i].save(function(err) {
                  if (err) { return next(err); }
                  });
                }; 
            } else {
              //TODO: return page with errors
              return console.log(error);
            }  
    });  

  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'Asia/Taipei' /* Time zone of this job. */
);
}

exports.job = job;