function BasicCalculator() {
  return (
    <section className="max-container p-10 text-xl border-2 bg-slate-300">
      <div className="flex flex-col justify-center items-center">
        <h2 className="block text-center mb-4">Basic Calculator</h2>
        <div className="h-[4rem] w-[20rem] border-2 border-slate-700 mb-6 ">
          <p className="block text-center p-5  ">Result:</p>
        </div>

        <ul className="flex flex-col justify-between items-center gap-5 ">
          <div className="flex justify-between items-center gap-5 ">
            <li className="cal-column">1</li>
            <li className="cal-column">2</li>
            <li className="cal-column">3</li>
          </div>
          <div className="flex justify-between items-center gap-5 ">
            <li className="cal-column">4</li>
            <li className="cal-column">5</li>
            <li className="cal-column">6</li>
          </div>
          <div className="flex justify-between items-center gap-5 ">
            <li className="cal-column">7</li>
            <li className="cal-column">8</li>
            <li className="cal-column">9</li>
          </div>
          <div className="flex justify-between items-center gap-5 ">
            <li className="cal-column">0</li>
            <li className="cal-column">.</li>
            <li className="cal-column">-</li>
          </div>
          <div className="flex justify-between items-center gap-5 ">
            <li className="cal-column">+</li>
            <li className="cal-column">x</li>
            <li className="cal-column">%</li>
          </div>
        </ul>
      </div>
    </section>
  );
}
export default BasicCalculator;
