"use strict"
class EditInPlaceField {
  constructor(id,parent,value) {
    this.id = id;
    this.value = value||'default value';
    this.parentElement = parent;
    this.createElement(this.id);
    // 绑定事件
    this.attachEvents();
  }
  createElement(id){
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
  }
  convertToText(){
    this.staticElement.style.display = "block";
    this.fieldElement.style.display = "none";
    this.saveButton.style.display = "none";
    this.cancleButton.style.display = "none"
    this.setValue(this.value);
  }
  attachEvents() {
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
  }
  convertToEditable() {
    this.staticElement.style.display = "none";
    this.fieldElement.style.display = "inline-block"
    this.saveButton.style.display = "inline-block";
    this.cancleButton.style.display = "inline-block"
    //设置input的value
    this.setValue(this.value);
  }
  cancle(){
    this.convertToText();
  }

  save(){
    this.value = this.getValue();
    this.convertToText();
  }

  getValue(){
    return this.fieldElement.value;
  }
  setValue(value) {
    this.fieldElement.value = value;

    this.staticElement.innerHTML = value;
  }
}
