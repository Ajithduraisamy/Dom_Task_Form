/* var container=document.createElement("div")
container.className="container"

var row=document.createElement("div")
row.className="row"

var col=document.createElement("div")
col.className="col"
col.innerHTML="This is column"

row.append(col);
container.append(row)
document.body.append(container) */


/* var label_first1=document.createElement("label")
label_first1.setAttribute("for","firstname")
label_first1.innerHTML="Firstname"

var break_1=document.createElement("br")

var first1=document.createElement("input")
first1.setAttribute("id","firstname")
first1.setAttribute("type","text")

var break_2=document.createElement("br")

var label_middle=document.createElement("label")
label_middle.setAttribute("for","middlename")
label_middle.innerHTML="Middlename"

var break_3=document.createElement("br")

var middle=document.createElement("input")
middle.setAttribute("id","middlename")
middle.setAttribute("type","text")

var break_4=document.createElement("br")

var label_last=document.createElement("label")
label_last.setAttribute("for","lastname")
label_last.innerHTML="Lastname"

var break_5=document.createElement("br")

var last=document.createElement("input")
last.setAttribute("id","lastname")
last.setAttribute("type","text")

var break_6=document.createElement("br")

var label_email=document.createElement("label")
label_email.setAttribute("for","email")
label_email.innerHTML="Email"

var break_7=document.createElement("br")

var email=document.createElement("input")
email.setAttribute("id","email")
email.setAttribute("type","email")

var break_8=document.createElement("br")

var submit=document.createElement("button")
submit.setAttribute("type","button")
submit.setAttribute("onclick","foo()")
submit.innerHTML="Submit"

var break_9=document.createElement("br")

document.body.append(label_first1,break_1,first1,break_2,label_middle,break_3,middle,break_4,label_last,break_5,last,break_6,label_email,break_7,email,break_8,submit)

function foo(){
var first=document.getElementById("firstname").value;
console.log(`Firstname:${first}`)
var second=document.getElementById("middlename").value;
console.log(`Middlename:${second}`)
var third=document.getElementById("lastname").value;
console.log(`Lastname:${third}`)
var forth=document.getElementById("email").value;
console.log(`Email:${forth}`)
}
 */

function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function break_create(){
    var ele = document.createElement("br");
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value,){
    var ele = document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
}

var first=label_create("label","for","firstname","Firstname");
var first_brake=break_create();
var first_input=input_create("input","type","text","id","firstname")

var middle=label_create("label","for","middlename","Middlename");
var middle_brake=break_create();
var middle_input=input_create("input","type","text","id","middlename")

var last=label_create("label","for","lastname","Lastname");
var last_brake=break_create();
var last_input=input_create("input","type","text","id","lastname")

var email=label_create("label","for","email","Email");
var email_brake=break_create();
var email_input=input_create("input","id","email","type","email")

var password=label_create("label","for","password","Password");
var password_brake=break_create();
var password_input=input_create("input","id","password","type","password")

document.body.append(first,first_brake,first_input,first_brake,middle,middle_brake,middle_input,middle_brake,last,last_brake,last_input,last_brake,email,email_brake,email_input,email_brake,password,password_brake,password_input,password_brake)