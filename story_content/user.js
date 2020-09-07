function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qrtovsJycu":
        Script1();
        break;
      case "6Amcw467sd0":
        Script2();
        break;
      case "5xFVqeyRjOV":
        Script3();
        break;
      case "67ylHTajGj9":
        Script4();
        break;
      case "6gi5FgDbF8f":
        Script5();
        break;
      case "5Ya0WZUpLlG":
        Script6();
        break;
      case "6dZ3yiKHFnQ":
        Script7();
        break;
      case "6TUOMCXcOAp":
        Script8();
        break;
      case "5pQLRYbq6ww":
        Script9();
        break;
      case "5jJSyOiMuIp":
        Script10();
        break;
      case "5cBDEhxRBQX":
        Script11();
        break;
      case "6EcmuPGSRAq":
        Script12();
        break;
      case "5q3FecvBAFs":
        Script13();
        break;
      case "6X1poNl9UqW":
        Script14();
        break;
      case "5uSVVtz6O1M":
        Script15();
        break;
      case "5niydjra0zZ":
        Script16();
        break;
      case "6dKaqkq4WDM":
        Script17();
        break;
      case "5yMsj1tEI4n":
        Script18();
        break;
      case "6RQSp7GoZch":
        Script19();
        break;
      case "5enzrNtT3Lp":
        Script20();
        break;
      case "6bt1ivzgAIy":
        Script21();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  $("#tab-customlink").hide();
}

function Script15()
{
  $("#tab-customlink").hide();
}

function Script16()
{
  $("#tab-customlink").hide();
}

function Script17()
{
  $("#tab-customlink").hide();
}

function Script18()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script19()
{
  $("#tab-customlink").show();
}

function Script20()
{
  $("#tab-customlink").hide();
}

function Script21()
{
  window.print();
}

