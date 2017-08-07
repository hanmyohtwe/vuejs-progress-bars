var dataURL = 'http://pb-api.herokuapp.com/bars';
var vm = new Vue({
    el: "#app",
    data: {
        maxColor: "#F22613",
        bars: [],
        buttons: [],
        limit: 0,
        selectedBar: 0,
        buttonVal: 0
    },
    methods: {
        fetchData: function(params) {
            this.$http.get(dataURL, function(data) {
                this.$set('bars', data.bars);
                this.$set('buttons', data.buttons);
                this.$set('limit', data.limit);
                console.log(params);
            });
        },
        set: function(index) {
            this.selectedBar = index;
        },
        makeProgress: function(button) {
            var self = this;
            self.buttonVal += button;
            self.bars[0] += button;
            this.reachMax();
            vm.$watch('bars', function(bars, button) {
                // this callback will be called when `vm.a` changes
            })
            this.$set(this.bars, selectedBar, newValue)
            self.bars[self.barVal] += self.buttonVal;
            //      alert (self.bars[self.barVal] += self.buttonVal);
            //      for (i = 0; i < self.bars.length; i++) {
            //        if (self.bars[i] === this.barVal) {
            //          self.bars[i] = self.buttonVal;
            //        }

            //      }
        },
        reachMax() {
            if (this.buttonVal >= this.limit) {
                // alert('Reached Limit' + this.limit)
            }
        }
    },
    created: function() {
        this.fetchData();
    }
});



//////////////////////////////////////////////
// var weakColor = [252, 91, 63]; // Red
// var strongColor = [111, 213, 127]; // Green
// var defaultColor = [204, 204, 204];

// var passwordGrades = {
//     0: 'Very weak',
//     1: 'Weak',
//     2: 'Average',
//     3: 'Strong',
//     4: 'Very strong'
// };

// // Interpolate value between two colors.
// // Value is number from 0-1. 0 Means color A, 0.5 middle etc.
// function interpolateColor(rgbA, rgbB, value) {
//     var rDiff = rgbA[0] - rgbB[0];
//     var gDiff = rgbA[1] - rgbB[1];
//     var bDiff = rgbA[2] - rgbB[2];
//     value = 1 - value;
//     return [
//         rgbB[0] + rDiff * value,
//         rgbB[1] + gDiff * value,
//         rgbB[2] + bDiff * value
//     ];
// }

// function rgbArrayToString(rgb) {
//     return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
// }

// function barColor(progress) {
//     return interpolateColor(weakColor, strongColor, progress);
// }

// function onLoad() {
//     var body = document.querySelector('body');
//     var barContainer = document.querySelector('#strength-bar');
//     var strengthBar = new ProgressBar.Circle(barContainer, {
//         color: '#ddd',
//         trailColor: '#f7f7f7',
//         duration: 1000,
//         easing: 'easeOut',
//         strokeWidth: 5
//     });
//     barContainer.style.visibility = 'hidden';

//     var input = document.querySelector('#password');
//     var inputLabel = document.querySelector('#password-label');

//     input.onfocus = function(event) {
//         var result = zxcvbn(input.value);
//         inputLabel.dataset.info = passwordGrades[result.score];
//         barContainer.style.visibility = 'visible';
//     };

//     input.onblur = function(event) {
//         inputLabel.dataset.info = 'New password';
//         barContainer.style.visibility = 'hidden';
//     };

//     input.addEventListener('input', function passwordChange() {
//         var result = zxcvbn(input.value);
//         var progress = result.score / 4;
//         inputLabel.dataset.info = passwordGrades[result.score];

//         if (progress === 0 && input.value && input.value.length > 0) {
//             progress = 0.1;
//         }

//         var startColor = +strengthBar.value().toFixed(3) === 0 ?
//             rgbArrayToString(defaultColor) :
//             rgbArrayToString(barColor(strengthBar.value()));

//         var endColor = progress === 0 ?
//             rgbArrayToString(defaultColor) :
//             rgbArrayToString(barColor(progress));

//         strengthBar.animate(progress, {
//             from: { color: startColor },
//             to: { color: endColor },
//             step: function(state, bar) {
//                 input.style.color = state.color;
//                 bar.path.setAttribute('stroke', state.color);
//             }
//         });
//     });
// }

// window.onload = onLoad;