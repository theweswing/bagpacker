import BagCard from "./BagCard";

function CurrentBag({currentBag}) {

  function spawnCards(){
    console.log(currentBag)
    const bagItems=currentBag.items
    console.log(bagItems)
    const itemsToDisplay=bagItems.map((givenItem) =>{
      return ( <BagCard item={givenItem} key={givenItem} /> )
    })
    return itemsToDisplay
  }

  return (
      <table>
        <tr>
          <th>Remove Item</th>
          <th>Item</th>
          <th>In Bag?</th>
        </tr>
        {currentBag.items? spawnCards() : null}
        </table>
      
  );
}

export default CurrentBag;
