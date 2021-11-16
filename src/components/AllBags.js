import {useState} from "react"
import BagCard from "./BagCard";

function AllBags({activeBagName,setActiveBagName,activeBag,setActiveBag,activeUser,setActiveBagNum}) {
  return (
    <div>
      <BagCard setActiveBagNum={setActiveBagNum} bagname={activeUser.bag1} bagitems={activeUser.items1} bagnum={1} activeBag={activeBag} setActiveBag={setActiveBag} activeBagName={activeBagName} setActiveBagName={setActiveBagName} activeUser={activeUser} />
      <BagCard setActiveBagNum={setActiveBagNum} bagname={activeUser.bag2} bagitems={activeUser.items2} bagnum={2} activeBag={activeBag} setActiveBag={setActiveBag} activeBagName={activeBagName} setActiveBagName={setActiveBagName} activeUser={activeUser} />
      <BagCard setActiveBagNum={setActiveBagNum} bagname={activeUser.bag3} bagitems={activeUser.items3} bagnum={3} activeBag={activeBag} setActiveBag={setActiveBag} activeBagName={activeBagName} setActiveBagName={setActiveBagName} activeUser={activeUser}/>
      <BagCard setActiveBagNum={setActiveBagNum} bagname={activeUser.bag4} bagitems={activeUser.items4} bagnum={4} activeBag={activeBag} setActiveBag={setActiveBag} activeBagName={activeBagName} setActiveBagName={setActiveBagName} activeUser={activeUser}/>
      <BagCard setActiveBagNum={setActiveBagNum} bagname={activeUser.bag5} bagitems={activeUser.items5} bagnum={5} activeBag={activeBag} setActiveBag={setActiveBag} activeBagName={activeBagName} setActiveBagName={setActiveBagName} activeUser={activeUser}/>
    </div>
  );
}

export default AllBags;
