 function isDom(obj) {
    try {
      return obj instanceof HTMLElement;
    } catch (e) {
      return (
        typeof obj === "object" &&
        obj.nodeType === 1 &&
        typeof obj.style === "object" &&
        typeof obj.ownerDocument === "object"
      );
    }
  }

   function addClassName(dom,className){
    if(!isDom(dom)){
        throw("不是dom元素")
    }else{
        dom.classList.add(className)
    }
  }

   function removeClassName(dom,className){
    if(!isDom(dom)){
        throw("不是dom元素")
    }else{
        try{
            dom.classList.remove(className)
        }catch{
            console.log("err")
        }
        
    }
  }
