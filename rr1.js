var http=require("http");

function samp(req,res)

{

if(req.url=="/")

{

res.writeHead(200,{"Content-Type":"text/html"});
res.write("<img src='https://wallpapercave.com/dwp1x/wp5983735.jpg' width='110%'  height='700px'>");
res.write("<center ><html><body><form style='position:absolute;top:200px;left:100px'><h1>log in  form</h1>name:<input type='text' name='uname' value=''><br><br>Email   :<input type='text' name='email' value=''><br><br>password:<input type='password' name='text' value=''><br><br><pre><input type='button' value='Register' width='100%'></pre></form></body></html></center>");
res.write("<h3 style='position:absolute;top:30px;left:500px'>What is womens security?<br><br>Women's safety involves strategies, practices and policies which aim to reduce gender-based violence (or violence against women), including women's fear of crime. Women's safety involves safe spaces. Space is not neutral. Space which causes fear restricts movement and thus the community's use of the space.</h3>")
res.write("<h3 style='position:absolute;top:200px;left:500px ' >Why is it important to have women in security?<br><br>By increasing the inclusion of women, we strengthen security and conflict prevention in a pragmatic way. This ultimately leads to more stable and sustainable security for all. Women's leadership in security is not just a benefit, it is a necessity.</h3>");
res.write("<h3 style='position:absolute;top:350px;left:500px ' >What is the duty of a woman?<br><br>Women's multiple roles<br>As a daughter, a woman is traditionally responsible for taking care of her parents. As a wife, she is expected to serve her husband, preparing food, clothing and other personal needs. As a mother, she has to take care of the children and their needs, including education.</h3>");
}

else if(req.url=="/reg")

{

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<img src='https://wallpapercave.com/dwp1x/wp8245492.png' width='110%'  height='700px'>");
    res.write("<center ><html><body><form style='position:absolute;top:30px;left:100px'><h1>register form</h1>name:<input type='text' name='uname' value=''><br><br>Email   :<input type='text' name='email' value=''><br><br>gender:<input type='text' name='text' value=''><br><br>phone number:<input type='text' name='mblno' value=''><br><br>address:<input type='text' name='address' value=''><br><br>organs :<input type='radio' name='radio1' value='heart'>heart<input type='radio' name='radio1' value='kidney'><input type='radio' name='radio1' value='eyes'>eyes<br><br>Menus   :<input type='radio' name='radio2' value='donor'>donor    <input type='radio' name='radio2' value='receiver'>receiver<br><br>blood group :<select><option>a+</option><option>a-</option><option>o+</option><option>ab-</option></select><pre><input type='button' value='Register' width='100%'></pre></form></body></html></center>");
    res.write("<h1><ul style='position:absolute;left:400px;top:60px'><h2>ways to secure</h2><li>Create Awareness Among the Employees: ...</li><li>Encourage Women to Express: ...</li><li>Internal Complaints Committee (ICC) on Women's Safety:</li><li>Mental illness. Psychiatric illness should be identified and treated promptly</li><li>Restriction on use of alcohol.</li>Strengthening the institution of marriage</li></ul></h1>");
    

}

else if(req.url=="/last")

{

res.writeHead(200,{"Content-Type":"text/html"});
res.write("<img src='https://wallpapercave.com/dwp1x/wp3463124.jpg' width='110%'  height='700px'>");
res.write("<h1 style='position:absolute;top:30px;left:500px'>some videos to learn </h1><br>");
res.write("<a href='https://www.youtube.com/watch?v=S946c52cVG8'><h1 style='position:absolute;top:100px;left:500px'>how to secure yourself</a></h1>");
res.write("<a href='https://www.youtube.com/results?search_query=women+security'><h1 style='position:absolute;top:200px;left:500px '>how to defend</a></h1>");
res.write("<a href='https://www.youtube.com/results?search_query=women+security'><h1 style='position:absolute;top:300px;left:500px ' >how to learn self of secrity</a></h1>");

res.end("invalid request");
}
}

var server=http.createServer(samp);

server.listen(5001);

console.log("server running");















