const list = document.querySelectorAll('[data-lista]')

function selectQuotation(name, value){
  list.forEach((selectedList) => {
    if(selectedList.id == name) {
      printQuotation(selectedList, name, value)
    }
  })
}

function printQuotation(list, name, value) {
  list.innerHTML = ''

  for(let multiplier = 1; multiplier <= 1000; multiplier *= 10) {
    const itemList = document.createElement('li')
    itemList.innerHTML = `${multiplier} ${name}: R$${(value * multiplier).toFixed(2)}`
    list.appendChild(itemList)
  }
}

export default selectQuotation