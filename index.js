var katzDeli = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeli.length + 1} in line.`)
}
