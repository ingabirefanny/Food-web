import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[#FFF9F4]">
        <header className="p-4 flex justify-between items-center">
          <div className="text-2xl font-cursive text-[#FFB830]">FoodHouse</div>
          <nav>
            <ul className="flex space-x-12 text-[20px] gap-[30px] my-[42px]" >
              <li><Link href="/" className="text-[#FFB830]">HOME</Link></li>
              <li><Link href="/Restaurant" className="text-gray-500">RESTAURANT</Link></li>
              <li><Link href="/services" className="text-gray-500">SERVICES</Link></li>
              <li><Link href="/cart" className="text-gray-500">CART</Link></li>
            </ul>
          </nav>
          <button className="text-gray-500 text-[23px] mr-[53px]">Sign In</button>
        </header>
        <main className="container mx-auto px-4 py-12 flex">
          <div className="w-1/2 pr-9 my-[100px]">
            <h1 className="text-6xl font-bold mb-4">
              Enjoy Delicious<br />
              Food in <span className="text-[#FFB830]">Healthy Life</span>
            </h1>
            <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
              Tandoori masala is an Indian spice blend consisting of a
              variety of spices Tandoori masala is an Indian spice blend
              consisting of a variety of spices
            </p>
            <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg">
              ORDER NOW
            </button>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/images/full.png"
              alt="Roasted Chicken"
              width={600}
              height={11}

              className="rounded-full"
            />
          </div>
        </main>
      </div>
      <div className="font-bold  mt-8 text-center text-[45px]">
        <p className="italic">Online store</p>
        <h1 className="font-bold text-center text-[45px]">Popular Foods  </h1>
        <div className="border-b-4 border-yellow-400 w-20 mx-auto mb-12"></div>
      </div>
      <div className="flex ml-[100px] my-[43px] ">
        <div className="w-1/2 relative text-centre">
          <Image
            src="/images/fish.png"
            alt="Roasted Chicken"
            width={300}
            height={11}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[54px] " >Fruit Dish</p>
          <br />
          <p className="ml-[74px] font-light">Dinko Food</p>
          <br />
          <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
            Add to cart  $ 678
          </button>
        </div>
        <div className="w-1/2 relative ml-[73px] ">
          <Image
            src="/images/fruits.png"
            alt="Roasted Chicken"
            width={300}
            height={11}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
          <br />
          <p className="ml-[74px] font-light">Dinko Food</p>
          <br />
          <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
            Add to cart  $ 678
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/stake.png"
            alt="Roasted Chicken"
            width={300}
            height={11}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
          <br />
          <p className="ml-[74px] font-light">Dinko Food</p>
          <br />
          <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
            Add to cart  $ 678
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/pizza.png"
            alt="Roasted Chicken"
            width={300}
            height={11}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[64px] " >Fruit Dish</p>
          <br />
          <p className="ml-[74px] font-light">Dinko Food</p>
          <br />
          <p className="ml-[74px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full">
            Add to cart  $ 678
          </button>

        </div>
      </div>
      <div className="special flex gap-60 mt-80 ml-40">
        <div><br /><br />

          <h1 className="offer text-4xl	font-bold">Our Special Offer</h1><br />

          <p className="guys text-slate-500 ">Best cooks and best delivery guys all at your service.Hot tasty food will reach you in 60 minutes.</p><br /><br />

          <button className="bg-yellow-400 px-5 py-3 rounded-lg text-white">
            See All Menu <span>&gt;</span>
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/offer.png"
            alt="Roasted Chicken"
            width={600}
            height={11}

            className="rounded-full"
          />

        </div>
      </div>
      <div className=" hunger mt-60">

        <p className="quality text-center"> Quality Food</p>

        <h1 className="best text-4xl text-center">Get The Best Offers</h1> <br />

        <p className="door text-center text-slate-500 ">The food at your doorstep.Why starve when you have us.you hunger <br />
          partner. Straight out of the oven to your doorstep</p>
      </div><br /><br /><br /><br />



      <div className="all flex gap-36 ml-24">
        <div className="three flex gap-2">
          <div>
            <h1 className="day font-bold">Any day <br />offers</h1> <br />
            <p>New phenonomon <br />Burger taste </p>
            <p className="dollar text-amber-400 ">$12.90</p>
          </div>
          <Image
            src="/images/burger.png"
            alt="Roasted Chicken"
            width={250}
            height={11}

          //  className="rounded-full"
          />
        </div>

        <div className="three flex gap-2">
          <div>
            <h1 className="day font-bold">Any day <br />offers</h1> <br />
            <p>New phenonomon <br />Burger taste </p>
            <p className="dollar text-amber-400 ">$12.90</p>
          </div>
          <Image
            src="/images/imboga.png"
            alt="Roasted Chicken"
            width={250}
            height={11}

          //  className="rounded-full"
          />
        </div>
        <div className="three flex gap-2">
          <div>
            <h1 className="day font-bold">Any day <br />offers</h1> <br />
            <p>New phenonomon <br />Burger taste </p>
            <p className="dollar text-amber-400 ">$12.90</p>
          </div>
          <Image
            src="/images/location.png"
            alt="Roasted Chicken"
            width={200}
            height={11}

          //  className="rounded-full"
          />
        </div>


      </div><br /><br />



      <h1>Our Service</h1><br /><br />

      <div className="spoons flex gap-20 ml-48">

        <div>
          <Image
            src="/images/spoon.png"
            alt="Roasted Chicken"
            width={280}
            height={11}
          />

          <figcaption className="spo mb-28 ml-7"> 55+ Restaurants</figcaption>
        </div>

        <div>
          <Image
            src="/images/perc.png"
            alt="Roasted Chicken"
            width={280}
            height={11}
          />

          <figcaption className="spo mb-28 ml-7"> Good Quality</figcaption>
        </div>

        <div>
          <Image
            src="/images/hat.png"
            alt="Roasted Chicken"
            width={280}
            height={11}
          />

          <figcaption className="spo mb-28 ml-7"> DiscIount System</figcaption>
        </div>
        <div>
          <Image
            src="/images/motto.png"
            alt="Roasted Chicken"
            width={280}
            height={11}
          />

          <figcaption className="spo mb-28 ml-7"> Fast Delivery</figcaption>
        </div>


      </div>

      <div className="text-center mt-[150px]">
        F



        <h1 className="font-bold text-[20px]">Testimonial</h1>
        <h1 className="text-[55px] font-bold text-center mt-[20px]">What Our Clients Say</h1>
        <img src="./image/icon1.png" alt="" className="object-cover ml-[840px]" />
        <p className="font-light text-[20px] text-[25px]">Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt</p>
        <p className="font-light text-[20px] text-[25px]">ut labore dolore aliqua. Ut enim ad veniam, quis nostrud exercitation</p>
        <p className="font-light text-[20px] text-[25px]">ullamco laboris nisi ut aliquip ex ea cammodo</p>


      </div>




      <div className="flex ml-[620px] mt-[100px]">

        <img src="./images/people.png" alt="people" className="object-cover ml-24" />

      </div>

      <div className="text-center">
        <h1 className="font-bold text-[20px]">Mitchelle Marsh</h1>
        <p>CEO, Bexon Agency</p>
      </div>

      <div className="flex mt-[25px] gap[45px] ml-[860px]">
        <img src="./image/icon.png" alt="next-icon" className="object-cover" />
      </div>

      <div className="flex mt-[250px] gap-[200px]">

        <img src="./images/phone.png" alt="phone-app" className="ml-[400px] object-cover" />

        <div className="mt-[150px] font-bold">
          <p className="text-yellow-500 text-[20px]">Download Our App</p>
          <h1 className="mt-[15px] text-[45px]">It's all here.</h1>
          <h1 className="text-[45px]">All in one app.</h1>

          <div className="mt-[40px] font-medium text-[20px] text-zinc-400">
            <p>Discover local on-demand delivery or Pickup from</p>
            <p>restaurants, nearbygrocery and convinience stores</p>
            <p>and more</p>
          </div>

          <div className="flex gap-[50px] mt-[50px]">
            <img src="./images/appstore.png" alt="apple-button" className="object-cover" />
            <img src="./images/google.png" alt="google-play-button" className="object-cover" />
          </div>

        </div>

      </div>


      <div className="flex ml-[200px] gap-[50px]">
        <div>
          <h1 className="text-[45px] font-bold mt-[100px]">Subscribe Our Newsletter</h1>
          <p className="mt-[20px] font-medium text-[20px] text-zinc-500">Subscribe on our newsletter to get our</p>
          <p className="font-medium text-[20px] text-zinc-500">news</p>
        </div>
        <div className="my-[190px]  text-zinc-500 text-[20px] ml-[100px] ">
          <p>Your email address..</p>
        </div>
        <div>
          <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[300px] text-amber-500 min-h-[85px] text-[35px] rounded-lg mr-[60px] mt-[160px]">Subscribe</button>
        </div>
      </div>
















      <footer className="bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
              <p className="text-sm text-gray-400 mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4">

              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Press Info</Link></li>
                <li><Link href="#">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Fudo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Why Fudo</Link></li>
                <li><Link href="#">How it Works</Link></li>
                <li><Link href="#">Why Choose Us</Link></li>
                <li><Link href="#">Client Stories</Link></li>
                <li><Link href="#">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Breakfast</Link></li>
                <li><Link href="#">Lunch</Link></li>
                <li><Link href="#">Dinner</Link></li>
                <li><Link href="#">Fast Foods</Link></li>
                <li><Link href="#">Drinks</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 py-4 text-center text-[#1a0f0f]">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <p className="text-white">Copyright 2021 Besnik All Right Reserved</p>
            <div className="space-x-4">
              <Link href="#" className="hover:underline text-white ">Terms</Link>
              <Link href="#" className="hover:underline text-white">Privacy</Link>
              <Link href="#" className="hover:underline text-white ">Security</Link>
            </div>
          </div>
        </div>
      </footer>




    </main>
  );
}



