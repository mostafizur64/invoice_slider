import React from 'react';

const SecondSlider = () => {
    return (
        <div>
             <div>
            <h2>Slider Second</h2>
            <div>
    <div className="py-4">
      <div className="px-14 py-6">
        <table className="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td className="w-full align-top">
                <div>
                  <img src="https://menkoff.com/assets/brand-sample.png" className="h-12" />
                </div>
              </td>

              <td className="align-top">
                <div className="text-sm">
                  <table className="border-collapse border-spacing-0">
                    <tbody>
                      <tr>
                        <td className="border-r pr-4">
                          <div>
                            <p className="whitespace-nowrap text-slate-400 text-right">Date</p>
                            <p className="whitespace-nowrap font-bold text-main text-right">April 26, 2023</p>
                          </div>
                        </td>
                        <td className="pl-4">
                          <div>
                            <p className="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                            <p className="whitespace-nowrap font-bold text-main text-right">BRA-00335</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-100 px-14 py-6 text-sm">
        <table className="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td className="w-1/2 align-top">
                <div className="text-sm text-neutral-600">
                  <p className="font-bold">Supplier Company INC</p>
                  <p>Number: 23456789</p>
                  <p>VAT: 23456789</p>
                  <p>6622 Abshire Mills</p>
                  <p>Port Orlofurt, 05820</p>
                  <p>United States</p>
                </div>
              </td>
              <td className="w-1/2 align-top text-right">
                <div className="text-sm text-neutral-600">
                  <p className="font-bold">Customer Company</p>
                  <p>Number: 123456789</p>
                  <p>VAT: 23456789</p>
                  <p>9552 Vandervort Spurs</p>
                  <p>Paradise, 43325</p>
                  <p>United States</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lg:px-14 px-2 py-10 text-sm text-neutral-700 overflow-auto">
        <table className="w-full border-collapse border-spacing-0">
          <thead>
            <tr>
              <td className="border-b-2 border-main pb-3 pl-3 font-bold text-main">#</td>
              <td className="border-b-2 border-main pb-3 pl-2 font-bold text-main">Product details</td>
              <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Price</td>
              <td className="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Qty.</td>
              <td className="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">VAT</td>
              <td className="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Subtotal</td>
              <td className="border-b-2 border-main pb-3 pl-2 pr-3 text-right font-bold text-main">Subtotal + VAT</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-3 pl-3">1.</td>
              <td className="border-b py-3 pl-2">Montly accountinc services</td>
              <td className="border-b py-3 pl-2 text-right">$150.00</td>
              <td className="border-b py-3 pl-2 text-center">1</td>
              <td className="border-b py-3 pl-2 text-center">20%</td>
              <td className="border-b py-3 pl-2 text-right">$150.00</td>
              <td className="border-b py-3 pl-2 pr-3 text-right">$180.00</td>
            </tr>
            <tr>
              <td className="border-b py-3 pl-3">2.</td>
              <td className="border-b py-3 pl-2">Taxation consulting (hour)</td>
              <td className="border-b py-3 pl-2 text-right">$60.00</td>
              <td className="border-b py-3 pl-2 text-center">2</td>
              <td className="border-b py-3 pl-2 text-center">20%</td>
              <td className="border-b py-3 pl-2 text-right">$120.00</td>
              <td className="border-b py-3 pl-2 pr-3 text-right">$144.00</td>
            </tr>
            <tr>
              <td className="border-b py-3 pl-3">3.</td>
              <td className="border-b py-3 pl-2">Bookkeeping services</td>
              <td className="border-b py-3 pl-2 text-right">$50.00</td>
              <td className="border-b py-3 pl-2 text-center">1</td>
              <td className="border-b py-3 pl-2 text-center">20%</td>
              <td className="border-b py-3 pl-2 text-right">$50.00</td>
              <td className="border-b py-3 pl-2 pr-3 text-right">$60.00</td>
            </tr>
            <tr>
              <td colspan="7">
                <table className="w-full border-collapse border-spacing-0">
                  <tbody>
                    <tr>
                      <td className="w-full"></td>
                      <td>
                        <table className="w-full border-collapse border-spacing-0">
                          <tbody>
                            <tr>
                              <td className="border-b p-3">
                                <div className="whitespace-nowrap text-slate-400">Net total:</div>
                              </td>
                              <td className="border-b p-3 text-right">
                                <div className="whitespace-nowrap font-bold text-main">$320.00</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-3">
                                <div className="whitespace-nowrap text-slate-400">VAT total:</div>
                              </td>
                              <td className="p-3 text-right">
                                <div className="whitespace-nowrap font-bold text-main">$64.00</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-[#5c6ac4] p-3">
                                <div className="whitespace-nowrap font-bold text-white">Total:</div>
                              </td>
                              <td className="bg-[#5c6ac4] p-3 text-right">
                                <div className="whitespace-nowrap font-bold text-white">$384.00</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-14 text-sm text-neutral-700">
        <p className="text-main font-bold">PAYMENT DETAILS</p>
        <p>Banks of Banks</p>
        <p>Bank/Sort Code: 1234567</p>
        <p>Account Number: 123456678</p>
        <p>Payment Reference: BRA-00335</p>
      </div>

      <div className="px-14 py-10 text-sm text-neutral-700">
        <p className="text-main font-bold">Notes</p>
        <p className="italic">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
          for previewing layouts and visual mockups.</p>
        </div>

        <footer className="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
          Supplier Company
          <span className="text-slate-300 px-2">|</span>
          info@company.com
          <span className="text-slate-300 px-2">|</span>
          +1-202-555-0106
        </footer>
      </div>
    </div>
        </div>
        </div>
    );
};

export default SecondSlider; 