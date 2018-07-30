const vfilter = {
    
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
    imgfilter(val) {
        if ( val == null) {
            return 'this.src="' + require('../../imgs/mine/avatar.png') + '"'
        } 
    },

}
export default vfilter;