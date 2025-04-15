import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:w-[1200px] lg:mx-auto mt-5">
      <section>
        <div className=" flex flex-col justify-center items-center">
          <div className=" ">
            <Image src="/2.png" alt="1" width={800} height={1200} />
          </div>
          <div className=" text-5xl font-bold">STREAM YOUR FAVORIUTE SPORT</div>
          <div>
            <div className=" btn btn-error mt-3 btn-lg">Watch Now</div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className=" grid grid-cols-3 gap-3">
          <div>
            <h2 className=" text-2xl font-bold">LIVE NOW</h2>
            <div className=" mt-3">
              <div className=" bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className=" font-bold mt-2">TEAM A vs TEAM B</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">FEATURED</h2>
            <div className="mt-3">
            <div className=" bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className=" mt-2 font-bold">

                Sport Center
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">BASKETBALL</h2>
            <div className=" mt-3">
            <div className="bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="mt-2 font-bold">LEAGUE MATCH</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div className=" grid grid-cols-2">
          <div className=" image">

          </div>
          <div className=" app flex flex-col">
              <h2 className=" text-4xl">
                ABOUT SPORT TV
              </h2>
              <p className=" text-xl mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi quasi labore at consequuntur, inventore alias fugit eius.
              </p>
              <div className=" mt-20">
                1 ,2
              </div>
          </div>  
        </div>
      </section>
    </div>
  );
}
