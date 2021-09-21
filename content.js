try{
  console.log("%c[pitchground-team-balance] waiting for data loading...",'background:#222; color:#ED1C24')
  setTimeout(function(){
    try{
      const balanceXPath = 'div.ant-col:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2) > span:nth-child(1)'
      const balanceDiv = document.querySelector(balanceXPath)
      let balance = balanceDiv.innerText
      let teamBalance = balance*40/100
      balanceDiv.innerText += ` (\$ ${teamBalance})`
      console.log("%c[pitchground-team-balance] team balance: ",'background:#222; color:#ED1C24', `\$ ${teamBalance}`)
    }catch(e){
      console.log('error in timeout function: ', e)
    }
  },7000)
} catch(e) {
  console.log('error in finding pitchground balance: ', e)
}
