const WsInstructions = () => {
  return (
    <section className="mb-10 bg-blue-300 p-8 justify-left">
      <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-[#333333] mb-4">
        Compare Two Blocks of Text
      </h1>
      <p className="max-w-2xl text-md leading-relaxed text-[#333333] md:text-left">
        The WordSnip engine will help you identify differences between two text
        versions
      </p>
      <ol className="list-decimal pl-6">
        <li>Paste the text that you want to compare in the left text box.</li>
        <li>
          Paste the text that you are using as your reference in the right text
          box.
        </li>
      </ol>
    </section>
  );
};

export default WsInstructions;
