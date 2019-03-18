// jQuery Selectors

// All tr inside tables inside section
$("section table tr")


|$("tr"


// jQuery Selectors


|Selector|Description|
|---|---|
|$("#Lastname")|
|$(".intro")|
|$(".intro, #Lastname")|
|$("h1")|
|$("h1, p")|
|$("p:first")|
|$("p:last")|
|$("tr:even")|
|$("tr:odd")|
|$("p:first-child")|
|$("p:first-of-type")|
|$("p:last-child")|
|$("p:last-of-type")|
|$("li:nth-child(1)|")|
|$("li:nth-last-child(1)|")|
|$("li:nth-of-type(2)|")|
|$("li:nth-last-of-type(2)|")|
|$("b:only-child")|
|$("h3:only-of-type")|
|$("div > p")|
|$("div p")|
|$("ul + p")|
|$("ul ~ table")|
|$("ul li:eq(0)|")|
|$("ul li:gt(0)|")|
|$("ul li:lt(2)|")|
|$(":header")|
|$(":header:not(h1)|")|
|$(":animated")|
|$(":focus")|
|$(":contains(Duck)|")|
|$("div:has(p)|")|
|$(":empty")|
|$(":parent")|
|$("p:hidden")|
|$("table:visible")|
|$(":root")|
|$("p:lang(it)|")|
|$("[id]")|
|$("[id=my-Address]")|
|$("p[id!=my-Address]")|
|$("[id$=ess]")|
|$("[id|=my]")|
|$("[id^=L]")|
|$("[title~=beautiful]")|
|$("[id*=s]")|
|$(":input")|
|$(":text")|
|$(":password")|
|$(":radio")|
|$(":checkbox")|
|$(":submit")|
|$(":reset")|
|$(":button")|
|$(":image")|
|$(":file")|
|$(":enabled")|
|$(":disabled")|
|$(":selected")|
|$(":checked")|
|$("*")|




























var w3Sels = [];
w3Sels.push("#Lastname");
w3Sels.push(".intro");
w3Sels.push(".intro, #Lastname");
w3Sels.push("h1");
w3Sels.push("h1, p");
w3Sels.push("p:first");
w3Sels.push("p:last");
w3Sels.push("tr:even");
w3Sels.push("tr:odd");
w3Sels.push("p:first-child");
w3Sels.push("p:first-of-type");
w3Sels.push("p:last-child");
w3Sels.push("p:last-of-type");
w3Sels.push("li:nth-child(1)");
w3Sels.push("li:nth-last-child(1)");
w3Sels.push("li:nth-of-type(2)");
w3Sels.push("li:nth-last-of-type(2)");
w3Sels.push("b:only-child");
w3Sels.push("h3:only-of-type");
w3Sels.push("div > p");
w3Sels.push("div p");
w3Sels.push("ul + p");
w3Sels.push("ul ~ table");
w3Sels.push("ul li:eq(0)");
w3Sels.push("ul li:gt(0)");
w3Sels.push("ul li:lt(2)");
w3Sels.push(":header");
w3Sels.push(":header:not(h1)");
w3Sels.push(":animated");
w3Sels.push(":focus");
w3Sels.push(":contains(Duck)");
w3Sels.push("div:has(p)");
w3Sels.push(":empty");
w3Sels.push(":parent");
w3Sels.push("p:hidden");
w3Sels.push("table:visible");
w3Sels.push(":root");
w3Sels.push("p:lang(it)");
w3Sels.push("[id]");
w3Sels.push("[id=my-Address]");
w3Sels.push("p[id!=my-Address]");
w3Sels.push("[id$=ess]");
w3Sels.push("[id|=my]");
w3Sels.push("[id^=L]");
w3Sels.push("[title~=beautiful]");
w3Sels.push("[id*=s]");
w3Sels.push(":input");
w3Sels.push(":text");
w3Sels.push(":password");
w3Sels.push(":radio");
w3Sels.push(":checkbox");
w3Sels.push(":submit");
w3Sels.push(":reset");
w3Sels.push(":button");
w3Sels.push(":image");
w3Sels.push(":file");
w3Sels.push(":enabled");
w3Sels.push(":disabled");
w3Sels.push(":selected");
w3Sels.push(":checked");
w3Sels.push("*");






































var w3SelDescriptions = [];
w3SelDescriptions.push('The element with id="Lastname"');
w3SelDescriptions.push('All elements with class="intro"');
w3SelDescriptions.push('All elements with class="intro", and the element with id="Lastname"');
w3SelDescriptions.push('All &lt;h1&gt; elements.');
w3SelDescriptions.push('All &lt;h1&gt; elements and all &lt;p&gt; elements.');
w3SelDescriptions.push('The first &lt;p&gt; element.');
w3SelDescriptions.push('The last &lt;p&gt; element.');
w3SelDescriptions.push('All even &lt;tr&gt; elements.');
w3SelDescriptions.push('All odd &lt;tr&gt; elements.');
w3SelDescriptions.push('All &lt;p&gt; elements that are the first child of their parent.');
w3SelDescriptions.push('All &lt;p&gt; elements that are the first &lt;p&gt; element of their parent.');
w3SelDescriptions.push('All &lt;p&gt; elements that are the last child of their parent.');
w3SelDescriptions.push('All &lt;p&gt; elements that are the last &lt;p&gt; element of their parent.');
w3SelDescriptions.push('All &lt;li&gt; elements that are the first child of their parent.');
w3SelDescriptions.push('All &lt;li&gt; elements that are the first child of their parent, counting from the last child element of the parent.');
w3SelDescriptions.push('All &lt;li&gt; elements that are the second &lt;li&gt; element of their parent.');
w3SelDescriptions.push('All &lt;li&gt; elements that are the second &lt;li&gt; element of their parent, counting from the &lt;li&gt; element.');
w3SelDescriptions.push('All &lt;b&gt; elements that are the only child of their parent.');
w3SelDescriptions.push('All &lt;h3&gt; elements that are the only child of its type, of their parent.');
w3SelDescriptions.push('All &lt;p&gt; elements that are a direct child of a &lt;div&gt; element.');
w3SelDescriptions.push('All &lt;p&gt; elements that are descendants of a &lt;div&gt; element.');
w3SelDescriptions.push('The &lt;p&gt; element that are next to each &lt;ul&gt; elements.');
w3SelDescriptions.push('All &lt;table&gt; elements that are siblings of a &lt;ul&gt; element.');
w3SelDescriptions.push('The first &lt;li&gt; element of &lt;ul&gt; elements (index starts at 0).');
w3SelDescriptions.push('All &lt;li&gt; elements of &lt;ul&gt; elements with an index greater than 0.');
w3SelDescriptions.push('All &lt;li&gt; elements of &lt;ul&gt; elements with an index less than 2.');
w3SelDescriptions.push('All header elements &lt;h1>, &lt;h2> ...');
w3SelDescriptions.push('All header elements that are not &lt;h1&gt; elements.');
w3SelDescriptions.push('All animated elements<br /><br />Sorry, no animated elements in this demo.');
w3SelDescriptions.push('The element that currently has focus.');
w3SelDescriptions.push('All elements which contains the text "Duck"');
w3SelDescriptions.push('All &lt;div&gt; elements that have a &lt;p&gt; element.');
w3SelDescriptions.push('All empty elements<br>(like &lt;input /&gt;)');
w3SelDescriptions.push('All elements that are a parent of another element (including text).');
w3SelDescriptions.push('All hidden &lt;p&gt; elements<br /><br /> (which are not visible in the Result).');
w3SelDescriptions.push('All visible tables.');
w3SelDescriptions.push('The document’s root element.');
w3SelDescriptions.push('All &lt;p&gt; elements with a lang attribute value starting with "it"');
w3SelDescriptions.push('All elements with an id attribute.');
w3SelDescriptions.push('All elements with an id attribute value equal to "my-Address"');
w3SelDescriptions.push('All &lt;p&gt; elements without an id attribute value equal to "my-Address".<br /><br /><strong>Note</strong>: Also &lt;p&gt; elements with no id attribute at all.');
w3SelDescriptions.push('All elements with an id attribute value ending with "ess"');
w3SelDescriptions.push('All elements with an id attribute value equal to "my" or starting with "my" followed by a hyphen (-)');
w3SelDescriptions.push('All elements with an id attribute value starting with the letter "L"');
w3SelDescriptions.push('All elements with a title attribute value containing the word "beautiful"');
w3SelDescriptions.push('All elements with an id attribute value containing the string "s"');
w3SelDescriptions.push("All form elements.");
w3SelDescriptions.push('All form elements with type="text"');
w3SelDescriptions.push('All form elements with type="password"');
w3SelDescriptions.push('All form elements with type="radio"');
w3SelDescriptions.push('All form elements with type="checkbox"');
w3SelDescriptions.push('All form elements with type="submit"');
w3SelDescriptions.push('All form elements with type="reset"');
w3SelDescriptions.push('All form elements with type="button", and all &lt;button&gt; elements.');
w3SelDescriptions.push('All form elements with type="image"');
w3SelDescriptions.push('All form elements with type="file"');
w3SelDescriptions.push("All enabled form elements.");
w3SelDescriptions.push("All disabled form elements.");
w3SelDescriptions.push("All selected options in a drop-down list.");
w3SelDescriptions.push("All checked form elements.");
w3SelDescriptions.push("All elements.");



for (i in w3Sels, i < w3Sels.length,)


function w3jQuerySelectorLoad() {
 var l = w3Sels.length, x = "";
 for (i = 0; i < l; i++) {
  x = x + "<div id='seldiv_" + w3Sels[i] + "' onclick='clickSelOpt(\"" + w3Sels[i] + "\");'>$(\"" + w3Sels[i] + "\")</div>";
 }
 document.getElementById("selectorOptions").innerHTML = x;
}

function clickSelOpt(sel) {
 var l = w3Sels.length, x, y, z, patt, arrPos, i;
 z = document.getElementById("selectorOptions").getElementsByTagName("DIV");
 for (i = 0; i < z.length; i++) {
  z[i].style.fontWeight = "normal";
 }
 document.getElementById("seldiv_" + sel).style.fontWeight = "bold";
 for (i = 0; i < l; i++) {
  $("#iframeResult " + w3Sels[i] + " :not(.noSel)").css("background-color","");
  $("#iframeResult " + w3Sels[i] + " :not(.noSel)").css("borderColor","");
  if (w3Sels[i] === sel) {arrPos=i; }
 }
 $("option").css("color","black"); 
 $("#iframeResult .newsletter").css("border-color","#0099FF");    
 $("#iframeResult .newsletter").css("background-color","#99D6FF");  
 
 document.getElementById("selectorDescription").style.display="block";
 document.getElementById("selectorDescription").innerHTML = "<p style='line-height:20px;'><b>Selector:</b><br>$(\"" + w3Sels[arrPos] + "\")</p><p>" + w3SelDescriptions[arrPos] + "</p>";
 $("#iframeResult :radio").css("outlineColor","transparent");  
 $("#iframeResult :checkbox").css("outlineColor","transparent");  
 $("#iframeResult :submit").css("outlineColor","transparent");  
 $("#iframeResult :reset").css("outlineColor","transparent");      
 $("#iframeResult :button").css("outlineColor","transparent");         
    $("select").css("color","#000000");      paintElements(sel,1);
 if (sel === ":focus") {
  document.getElementsByTagName("INPUT")[0].focus();
 }
 if (sel === ":root") {
  markSelector("#iframeResult");
 } else {
  document.getElementById("iframeResult").style.backgroundColor="";
  document.getElementById("iframeResult").style.borderColor="";  
 }
 patt = /,/g;
 x = "#iframeResult " + sel;
 if (sel === "*" || sel === ":parent") {
  x = "#iframeResult :header,#helpIntro,#iframeResult p,#Lastname,#iframeResult .helpUl,#iframeResult li,#iframeResult .helpTable,#iframeResult tr,#iframeResult td,#iframeResult th,#iframeResult .helpHref,#iframeResult .newsletter,#iframeResult select,#iframeResult"
  if (sel === "*") {x=x+",#iframeResult :text,#iframeResult :password"; }
  markSelector(x,sel);
  if (sel === "*") {  
   x = "#iframeResult :radio,#iframeResult :checkbox,#iframeResult :submit,#iframeResult :reset,#iframeResult :button";
   markRadioSelector(x);
  }
  return;
 } 
 if (sel === ":empty") {
  x = "#iframeResult :text,#iframeResult :password";
  markSelector(x,sel);
  x = "#iframeResult :radio,#iframeResult :checkbox,#iframeResult :submit,#iframeResult :reset,#iframeResult :button";
  markRadioSelector(x);
  return;
 } 
 if (sel === "[id]") {
  x = "#Lastname, #my-Address, .helpUl";
  markSelector(x,sel);
  return;
 } 
 if (sel === ".intro") {x = "#iframeResult #helpIntro"; }
 if (sel === ".intro, #Lastname") {x = "#iframeResult #helpIntro, #Lastname"; } 
 if (sel === "div > p") {x = "#iframeResult div.intro > p"; }
 if (sel === "div p") {x = "#iframeResult div.intro p"; } 
 if (sel === "div:has(p)") {x = "#iframeResult #helpIntro:has(p)"; }  
 if (sel === ":parent") {x = "#iframeResult :parent:not(span), #Lastname"; }   
 if (sel === "[id^=L]") {x = "#iframeResult #Lastname, .helpUl"; }
 if (sel === "table:visible") {x = "#iframeResult .helpTable"; }
 if (sel === ":contains(Duck)") {x = "#iframeResult, :contains(Duck)"; } 
 x = x.replace(patt,",#iframeResult ");
 if (sel === ":radio" || sel === ":checkbox" || sel === ":submit" || sel === ":reset" || sel === ":button" || sel === ":checked") {
  markRadioSelector(x);
 } else {
  y=x + ":not(.noSel)";
  markSelector(y,sel);
  if (sel === ":input" || sel === ":enabled" || sel === ":disabled" || sel === "*") { markRadioSelector(x); }
 }
 if (sel === "p:hidden") {
  paintElements(sel,2)
 }
}

function paintElements(sel,n) {
 if (n === 2 && sel !== "tr:even" && sel !== "tr:odd" || (n === 1 && sel !== "table:visible")) {
  $("#iframeResult tr").css("background-color","#f1f1f1");  
 }
}

function markSelector(x,sel) {
//    $(x).animate({backgroundColor:"#FF6666"},100); 
    $(x).animate({borderColor:"#FF6666"},10);     
//    $(x).animate({backgroundColor:""},100);     
//    $(x).animate({backgroundColor:"#FF6666"},100);             
    $(x).animate({backgroundColor:"#FFFF99"},100,function () { paintElements(sel,2); });         
}

function markRadioSelector(x) {
//    $(x).animate({outlineColor:"#ff0000"},100);     
//    $(x).animate({outlineColor:""},100);     
//    $(x).animate({outlineColor:"#FF0000"},100);             
//    $(x).animate({outlineColor:""},100);     
    $(x).animate({outlineColor:"#FF0000"},100);             
}

</script>