if (self.CavalryLogger) { CavalryLogger.start_js(["ZSYjA"]); }

__d("PhotoDownloadTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PhotoDownloadLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PhotoDownloadLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PhotoDownloadLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDownloadMethod=function(a){this.$1.download_method=a;return this};c.setPhotoFbid=function(a){this.$1.photo_fbid=a;return this};return a}();c={download_method:!0,photo_fbid:!0};e.exports=a}),null);
__d("PhotoSnowliftViewableWithContextMenuLogging",["Event","PhotoDownloadTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("Event").listen(a,"contextmenu",function(a){new(b("PhotoDownloadTypedLogger"))().setDownloadMethod("context_menu").setPhotoFbid(c).log()})}e.exports={setupContextMenuLogging:a}}),null);