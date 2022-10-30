import Image from 'next/image'
export default function Home() {
  return (
    <section>
      <h1 className="my-10 text-center text-3xl">Más sobre nosotros</h1>
      <div className="grid grid-cols-3 mt-10">
        <article>
          <div>
            <div className="text-center">
              <Image
                src="https://media.istockphoto.com/photos/customer-shopping-for-tools-at-a-hardwarestore-and-talking-to-a-picture-id1323082614?s=612x612"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-2xl text-center my-3">Seguridad</h3>
            <p className=" text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              blanditiis eius! Numquam labore vel, alias maxime impedit ducimus
              dolores, iste quis aliquid maiores est dignissimos consequatur
              eius praesentium voluptatum veniam!
            </p>
          </div>
        </article>
        <article>
          <div>
            <div className="text-center">
              <Image
                src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732?s=612x612"
                width={100}
                height={100}
              />
            </div>

            <h3 className="text-2xl text-center my-3">El mejor precio</h3>
            <p className=" text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              blanditiis eius! Numquam labore vel, alias maxime impedit ducimus
              dolores, iste quis aliquid maiores est dignissimos consequatur
              eius praesentium voluptatum veniam!
            </p>
          </div>
        </article>
        <article>
          <div>
            <div className="text-center">
              <Image
                src="https://media.istockphoto.com/photos/smart-chatbot-business-internet-technology-picture-id1251245805?s=612x612"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-2xl text-center my-3">A tiempo</h3>
            <p className=" text-sm text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              blanditiis eius! Numquam labore vel, alias maxime impedit ducimus
              dolores, iste quis aliquid maiores est dignissimos consequatur
              eius praesentium voluptatum veniam!
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
