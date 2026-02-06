/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import Image from "next/image"; 
import coffeeData from '../coffeeData';


function CoffeeList() {
  return (
    <div className="flex flex-row justify-evenly gap-30">
      {coffeeData.map(coffee => (
        <div key={coffee.id} className="flex flex-col justify-center items-center bg-[#E2BFA1] rounded-3xl p-5 shadow gap-2">
            <Image src={coffee.image} alt={coffee.name} width={736/4} height={736/4}/>
          <h2 className='font-light'>{coffee.name}</h2>
          <span>${coffee.price}</span>
          <button className="bg-[#452812] font-light text-white rounded-3xl p-2 w-30">
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
}

export default CoffeeList;