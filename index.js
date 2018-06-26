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
