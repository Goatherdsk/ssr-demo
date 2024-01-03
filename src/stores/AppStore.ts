import { observable, action, makeObservable } from 'mobx'

export default class AppStore {
  @observable num: number = 0;

  constructor() {
    //mbox 6后需要添加这个组件才会更新
    makeObservable(this);
  }

  @action.bound
  setNum (val: number) {
    this.num = val;
    console.log('setNum', this)
  } 
}