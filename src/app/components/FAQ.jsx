export default function FAQ() {
  return (
    <section className="md:px-12 px-8 flex flex-col gap-8 md:text-base text-sm">
      <h2
        className="text-4xl md:text-8xl text-6xl font-normal
            "
      >
        FAQ
      </h2>
      <ul className="flex flex-col gap-4">
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿De donde salen las utilidades semestrales?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿Es legal?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿Que tipo de productos importan?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿Cuales son los canales de venta?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿Tengo que vender los productos que compro?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
        <li>
          <details className="border-b border-black pb-6">
            <summary
              className="font-semibold cursor-pointer
            list-image-[url(./icons/down-arrow.svg)]"
            >
              ¿Cuanto tiempo tiene la empresa?
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </li>
      </ul>
    </section>
  );
}
