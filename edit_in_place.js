/*
* 就地编辑组件
* created by Theresa
* 2016-8-23
*每个人都有保持代码优雅的责任
*/

/*
* 就地编辑组件
* created by Theresa
* 2016-8-23
*每个人都有保持代码优雅的责任
*/

function EditInPlaceField(id,parent,value) {
  this.id = id;
  this.value = value||'default value';
  this.parentElement = parent;
  this.createElement(this.id);
  // 绑定事件
  this.attachEvents();
}

EditInPlaceField.prototype ={
  createElement:function(id){
    this.containerElement = document.createElement('div');
    this.parentElement.appendChild(this.containerElement);

    this.staticElement = document.createElement('span');
    this.containerElement.appendChild(this.staticElement);
    this.staticElement.innerHTML = this.value;
    this.containerElement.setAttribute("id",id);

    // 创建input
    this.fieldElement = document.createElement("input");
    // 类型为文本框
    this.fieldElement.type = "text";
    // 值为无名氏
    this.fieldElement.value = this.value;
    // 添加到containerElement上去
    this.containerElement.appendChild(this.fieldElement);

    // 创建保存按钮
    this.saveButton = document.createElement('input');
    this.saveButton.type = 'button';
    this.saveButton.value = '保存';
    this.containerElement.appendChild(this.saveButton);

    // 创建取消按钮
    this.cancleButton = document.createElement('input');
    this.cancleButton.type = "button";
    this.cancleButton.value = "取消";
    this.containerElement.appendChild(this.cancleButton);

    this.convertToText();
  },
  // 将编辑框，及按钮隐藏起来，只显示文本状态
  convertToText:function(){
    // 将文本隐藏
    this.staticElement.style.display = "block";
    this.fieldElement.style.display = "none";
    this.saveButton.style.display = "none";
    this.cancleButton.style.display = "none"
    this.setValue(this.value);
  },

  attachEvents:function () {
    var that = this;
    this.staticElement.addEventListener('click',function () {
      that.convertToEditable();
    },false)

    // 绑定取消按钮的事件
    this.cancleButton.addEventListener('click',function () {
      that.cancle();
    },false)

    this.saveButton.addEventListener('click',function () {
      that.save();
    },false)
  },
  convertToEditable:function () {
    this.staticElement.style.display = "none";
    this.fieldElement.style.display = "inline-block"
    this.saveButton.style.display = "inline-block";
    this.cancleButton.style.display = "inline-block"
    //设置input的value
    this.setValue(this.value);
  },
  cancle:function(){
    this.convertToText();
  },

  save:function(){
    this.value = this.getValue();
    this.convertToText();
  },

  getValue:function(){
    return this.fieldElement.value;
  },
  setValue:function(value) {
    this.fieldElement.value = value;
    this.staticElement.innerHTML = value;
  }

};


    this.staticElement.innerHTML = this.fieldElement.value;
  }

};
