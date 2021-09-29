"use strict";
var toFrequencyCounter = function (data) {
    var frequencyCounter = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var val = data_1[_i];
        frequencyCounter[val] =
            (frequencyCounter[val] || 0) + 1;
    }
    return frequencyCounter;
};
console.log(toFrequencyCounter([10, 20, 30, 20]));
console.log(toFrequencyCounter('Lassi Viitakoski'));
console.log(toFrequencyCounter(['10', 'll', 10, 'dsff', 'll']));
