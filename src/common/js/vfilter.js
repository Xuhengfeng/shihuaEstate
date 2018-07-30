const vfilter = {
    imgfilter(val) {
        if (val == "" || val == undefined || val == null) {
            return require("../../imgs/buyhouse/ba.png");
        } else {
            return val;
        }
    },
    imgfilterone(val) {
        if (val == "" || val == undefined || val == null) {
            return require("../../imgs/buyhouse/bigba.png");
        } else {
            return val;
        }
    },
    imgonroorr(val) {
        if(val==null){
           return 'this.src="' + require('../../imgs/buyhouse/ba.png') + '"'
        }
    },
    imgonroorrOne(val) {
        if(val==null){
           return 'this.src="' + require('../../imgs/buyhouse/bigba.png') + '"'
        }
    },
    onerrorImg(val) {
        if(val==null){
            return 'this.src="' + require('../../imgs/mine/avatar.png') + '"'
        }
    }
}
export default vfilter;