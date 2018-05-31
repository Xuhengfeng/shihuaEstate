export function debounce(func,delay){//节流函数, func是要节流量函数 , 用计时器延迟调用,减少请求次数!
	let timer
	return function(...args){
		if(timer){
			clearTimeout(timer)
		}
		timer=setTimeout(()=>{//延迟func要节流的函数
			func.apply(this,args)
		},delay)
	}
}

