import {request1} from "./request"

export function getDealDetail(dealId) {
  return request1({
    url: "/deal/" + dealId,
  })
}

export function getDealComment(Id) {
  return request1({
    url: '/getcomment',
    params: {
      type: 'deal',
      Id,
    }
  })
}

export function dataDeal(res) {
  const deal = res
  deal.menu = JSON.parse(deal.menu)
  deal.menu = deal.menu[0]
  let count = -1
  let oMenu = deal.menu
  let nMenu = []
  oMenu.forEach((value,index) => {
    if(index == 0 && value.type !== '0')
    {
      let list = []
      list.push(value)
      nMenu.push(list)
      count += 1
    }
    else if(value.type === '0') {
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
  console.log(deal.menu);
  return deal
}
