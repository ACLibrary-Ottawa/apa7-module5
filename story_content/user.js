function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MxbRfByVFw":
        Script1();
        break;
      case "5m7cO49b1cZ":
        Script2();
        break;
      case "6kyPhmeqAAz":
        Script3();
        break;
      case "6htLfDysi1i":
        Script4();
        break;
      case "5ZlaESWT011":
        Script5();
        break;
      case "6rXK4mtdVPr":
        Script6();
        break;
      case "6Ph3dShPLkH":
        Script7();
        break;
      case "6RkizsVZNcP":
        Script8();
        break;
      case "6qPqD79idjM":
        Script9();
        break;
      case "5nryVL2KHEB":
        Script10();
        break;
      case "61W3qBsvUvV":
        Script11();
        break;
      case "6k77qF23q1j":
        Script12();
        break;
      case "5xs2WTad6R0":
        Script13();
        break;
      case "6KS2rOJTh6R":
        Script14();
        break;
      case "5oHZGAU5UZo":
        Script15();
        break;
  }
}

function Script1()
{
  $('.btn.cs-button.volume').hide()
}

function Script2()
{
  $('.btn.cs-button.volume').hide()
}

function Script3()
{
  $('.btn.cs-button.volume').show()
}

function Script4()
{
  $('.btn.cs-button.volume').hide()
}

function Script5()
{
  $('.btn.cs-button.volume').hide()
}

function Script6()
{
  $('.btn.cs-button.volume').show()
}

function Script7()
{
  $('.btn.cs-button.volume').hide()
}

function Script8()
{
  $('.btn.cs-button.volume').show()
}

function Script9()
{
  $('.btn.cs-button.volume').hide()
}

function Script10()
{
  $('.btn.cs-button.volume').show()
}

function Script11()
{
  $('.btn.cs-button.volume').hide()
}

function Script12()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script13()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var theScore =(
player.GetVar("correctcounter")
)

var theA1Q1 =(
player.GetVar("A1Q1")
)

var theA1Q2 =(
player.GetVar("A1Q2")
)

var theA1Q3 =(
player.GetVar("A1Q3")
)

var theA1Q4 =(
player.GetVar("A1Q4")
)

var theA1Q5 =(
player.GetVar("A1Q5")
)

var theA2Q1 =(
player.GetVar("A2Q1")
)

var theA2Q2 =(
player.GetVar("A2Q2")
)

var theA2Q3 =(
player.GetVar("A2Q3")
)

var theA2Q4 =(
player.GetVar("A2Q4")
)

var theSA1 =(
player.GetVar("StudentAnswerA1q1")
)

var theSA2 =(
player.GetVar("StudentAnswerA1q2")
)

var theSA3 =(
player.GetVar("StudentAnswerA1q3")
)

var theSA4 =(
player.GetVar("StudentAnswerA1q4")
)

var theSA5 =(
player.GetVar("StudentAnswerA1q5")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate + "&" + theScore + "&" + theA1Q1 + "&" + theA1Q2 + "&" + theA1Q3 + "&" + theA1Q4 + "&" + theA1Q5 + "&" + theA2Q1 + "&" + theA2Q2 + "&" + theA2Q3 + "&" + theA2Q4 + "&" + theSA1 + "&" + theSA2 + "&" + theSA3 + "&" + theSA4  + "&" + theSA5  );

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

function Script14()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script15()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

