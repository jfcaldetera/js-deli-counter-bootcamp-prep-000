var katzDeli = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`)
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length < 1)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var name = katzDeliLine.shift()
    return ("Currently serving " + name + ".")
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length == 0)
  {
    return ("The line is currently empty.")
  }
  else
  {
    var line = ""
    for (var i = 0; i < katzDeliLine.length; i++)
    {
      line += `${i + 1}. ${katzDeliLine[i]},  `
    }

    return ("The line is currently: " + line.slice(0, -1) + '.')
  }
}
