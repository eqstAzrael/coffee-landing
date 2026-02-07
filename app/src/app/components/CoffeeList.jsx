import Image from "next/image"; 
import coffeeData from '../coffeeData';
import Link from "next/link";

function CoffeeList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-4">
      {coffeeData.map(coffee => (
        <li key={coffee.id} className="flex flex-col justify-center items-center bg-[#E2BFA1] rounded-3xl p-6 shadow-md gap-4 transition-transform hover:scale-105">
          <Image 
            src={coffee.image} 
            alt={coffee.name} 
            width={184} 
            height={184} 
            className="object-contain"
          />
          <h2 className="font-light text-xl text-[#452812]">{coffee.name}</h2>
          <span className="font-medium text-lg">${coffee.price}</span>
          <Link 
            href={`/coffee/${coffee.id}`} 
            className="bg-[#452812] font-light text-center text-white rounded-full py-2 px-8 w-full max-w-[150px] hover:bg-[#321d0d] transition-colors"
          >
            BUY NOW
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CoffeeList;