import store from '@/store/index.js'

export default {
  delay(x) {
    console.log("store1",store.state.persona)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, x);
    });
  },
  CombinationFormula(p1,p2) {  //兩體合成公式
    if(p1.rare&&p2.rare) {
      return null
    }
    if(!p1.rare&&!p2.rare) {
      return Math.floor((p1.Lv+p2.Lv)/2+Number(1))
    }
    if(p1.rare||p2.rare) {
      if(p1.rare) {
        return p1.bound[p2.Arcana]
      }
      if(p2.rare) {
        return p2.bound[p1.Arcana]
      }
    }
  },
  getSimilarNum(arr,num) {  //在陣列中尋找最相近的值，返回index值
    let pushArr=[]
    for(let item of arr) {
      pushArr.push(Math.abs(item-num))
    }
    let minNum=Math.min(...pushArr)
    let index=pushArr.indexOf(minNum)
    console.log(index)
  },
  twoCombination(p1,p2) {  //兩體合體結果
    console.log("twoCombination",p1,p2)
    let best=""  //最佳匹配
    let Arcana=""
    let haveRare=false
    if(!p1||!p2) return 0
    for(let item of store.state.combination) {
      for(let item2 of item.item) {
        if(p1.Arcana==p2.Arcana) {
          Arcana=p1.Arcana
          break;
        }
        if((item2[0]==p1.Arcana||item2[1]==p1.Arcana)&&(item2[0]==p2.Arcana||item2[1]==p2.Arcana)) {
          Arcana=item.Name
          break;
        }
      }
    }
    if(p1.rare) {
      Arcana=p2.Arcana
      haveRare=true
    }
    if(p2.rare) {
      Arcana=p1.Arcana
      haveRare=true
    }
    if(p1.rare&&p2.rare) {
      return 0
    }
    let num=this.CombinationFormula(p1,p2)
    let personaList=this.getPersonaByArcana(Arcana).reverse()
    for(let item of personaList) {
      if(!haveRare) {
        if(p1.Arcana!=p2.Arcana) {
          if(item.Lv >= num) {
            best=item
          }
        }
      }
      else {
        let LvList=personaList.map(res=>res.Lv)
        if(p1.rare) {
          let index=LvList.indexOf(p2.Lv)
          best=personaList[index-num]
        }
        if(p2.rare) {
          let index=LvList.indexOf(p1.Lv)
          best=personaList[index-num]
        }  
      }
      /*else {
         if(item.Lv <= num) {
          best=item
        }         
      }*/
    }
    console.log("平均值+1",num)
    console.log(Arcana)
    console.log(personaList)
    console.log(best)
    //this.mode1Data.result=best
    return best
  },
  getPersonaByArcana(x) {  //透過阿爾卡納篩選Persona
    return store.state.persona.filter(res=>res.Arcana==x)
  },
  async toGetCombinationListByPersona() {
    store.state.loading=true
    await this.$global.delay(0)
    await this.getCombinationListByPersona()
    store.state.loading=false
  },
  getArcanaList(changePersona) {  //取得所選Persona阿爾卡納的合成表
    return store.state.combination.filter(res=>res.Name==changePersona.Arcana)[0].item
  },
  getCombinationListByPersona(changePersona) {  //兩體合成所有組合
    return new Promise((resolve) => {
      let arr=[]
      console.log("透過阿爾卡納篩選Persona",this.getPersonaByArcana(changePersona.Arcana))
      console.log("求出列表")
      for(let item of this.getArcanaList(changePersona)) {
        let p1=this.getPersonaByArcana(item[0])
        let p2=this.getPersonaByArcana(item[1])
        console.log(p1,p2)
        for(let p1Item of p1) {
          for(let p2Item of p2) {
            let result=this.twoCombination(p1Item,p2Item) ? this.twoCombination(p1Item,p2Item) : {Name:""}
            if(result.Name==changePersona.Name) {
              arr.push([p1Item,p2Item])
            }
          }
        }
      }
      //console.log(arr)
      console.log(changePersona)
      //this.allList.result=arr
      console.log(arr.length)
      resolve(arr);
    });
  }
}