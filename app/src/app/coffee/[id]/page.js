import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import coffeeData from '../../coffeeData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const coffee = coffeeData.find((c) => c.id === Number(id));
  
  if (!coffee) return { title: 'Coffee Not Found' };
  
  return {
    title: `${coffee.name} | Premium Coffee Selection`,
    description: coffee.description,
  };
}

export default async function CoffeePage({ params }) {
  const { id } = await params;
  const coffee = coffeeData.find((c) => c.id === Number(id));

  if (!coffee) {
    notFound();
  }

  const relatedProducts = coffeeData
    .filter((c) => c.id !== coffee.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#E2BFA1] pb-16">
      <div className="w-full overflow-hidden leading-[0] rotate-180" aria-hidden="true">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#F2EAD7"
          />
        </svg>
      </div>

      <article className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
   
          <figure className="flex-1 w-full bg-[#F2EAD7] p-6 rounded-3xl shadow-xl">
            <div className="relative aspect-square">
              <Image
                src={coffee.image}
                alt={`Photo of ${coffee.name} brewing`}
                fill
                priority 
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </figure>


          <section className="flex-1 bg-[#F2EAD7] p-8 rounded-3xl shadow-xl">
            <header className="mb-6">
              <span className="inline-block bg-[#E2BFA1] text-[#473932] px-4 py-1 rounded-full text-sm font-semibold mb-3">
                Premium Coffee
              </span>
              <h1 className="text-4xl font-bold text-[#473932] mb-2">
                {coffee.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <data value={coffee.price} className="text-3xl font-bold text-[#452812]">
                  ${coffee.price.toFixed(2)}
                </data>
                <div className="flex text-yellow-500" aria-label="Rating: 5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </header>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[#473932] mb-3">Description</h2>
                <p className="text-[#452812] text-lg leading-relaxed">
                  {coffee.description}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#473932] mb-3">Flavor Profile</h2>
                <ul className="flex flex-wrap gap-3">
                  {['Chocolate', 'Creamy', 'Sweet', 'Aromatic'].map((flavor) => (
                    <li 
                      key={flavor}
                      className="bg-[#E2BFA1] text-[#473932] px-4 py-2 rounded-full font-medium"
                    >
                      {flavor}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="button" 
                  className="flex-1 bg-[#452812] text-white px-8 py-4 rounded-3xl font-bold text-lg hover:bg-[#351f0e] transition-colors shadow-md active:scale-95"
                >
                  Add to Cart - ${coffee.price.toFixed(2)}
                </button>
                <button 
                  type="button" 
                  className="flex-1 bg-[#E2BFA1] text-[#473932] px-8 py-4 rounded-3xl font-bold text-lg border-2 border-[#452812] hover:bg-[#d8b08e] transition-colors"
                >
                  Save for Later
                </button>
              </div>

  
              <dl className="mt-8 pt-6 border-t border-[#E2BFA1] flex items-center justify-between text-[#452812]">
                <div className="text-center">
                  <dt className="text-sm opacity-80">Prep Time</dt>
                  <dd className="font-bold text-2xl">5 min</dd>
                </div>
                <div className="h-10 w-px bg-[#E2BFA1]" aria-hidden="true" />
                <div className="text-center">
                  <dt className="text-sm opacity-80">Serving</dt>
                  <dd className="font-bold text-2xl">Hot/Iced</dd>
                </div>
                <div className="h-10 w-px bg-[#E2BFA1]" aria-hidden="true" />
                <div className="text-center">
                  <dt className="text-sm opacity-80">Calories</dt>
                  <dd className="font-bold text-2xl">150 cal</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>


        <aside className="mt-20">
          <h2 className="text-2xl font-bold text-[#473932] mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link 
                key={item.id}
                href={`/coffee/${item.id}`}
                className="group bg-[#F2EAD7] p-4 rounded-3xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-videomb-4 overflow-hidden rounded-2xl">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    width={1024/2}
                    height={1024/2}
                    className="object-cover transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-[#473932] text-lg mb-1">{item.name}</h3>
                <p className="text-[#452812] font-semibold">${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </main>
  );
}


function StarIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
