"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.white);
console.log(DesignColors.black);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 2] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 0] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);
