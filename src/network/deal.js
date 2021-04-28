import {request1} from "./request"

export function getDealDetail(dealId) {
  return request1({
    url: "/deal/" + dealId,
  })
}

export function dataDeal(res) {
  const deal = res
  deal.menu = JSON.parse(deal.menu)
  deal.menu = deal.menu[0]
  let count = -1
  let oMenu = deal.menu
  let nMenu = []
  oMenu.forEach(value => {
    if(value.type === '0') {
      let list = []
      list.push(value)
      nMenu.push(list)
      count += 1
    }
    else {
      nMenu[count].push(value)
    }
  })
  deal.menu = nMenu
  return deal
}
