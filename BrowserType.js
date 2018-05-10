function BrowserType() {
  var userAgent = navigator.userAgent;
  var isIE = window.ActiveXObject || "ActiveXObject" in window;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (userAgent.indexOf('MSIE 6.0') != -1) {
      return "6";
    } else if (fIEVersion == 7) {
      return "7";
    } else if (fIEVersion == 8) {
      return "8";
    } else if (fIEVersion == 9) {
      return "9";
    } else {
      return "0"
    } //大于等于10
  } //isIE end
}
