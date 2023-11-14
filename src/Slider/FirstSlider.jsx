import React from "react";

const FirstSlider = () => {
  return (
    <div>
      <h2>Slider First</h2>
      <div className="invoice-wrapper" id="print-area">
        <div className="invoice">
          <div className="invoice-container">
            <div className="invoice-head">
              <div className="invoice-head-top">
                <div className="invoice-head-top-left text-start">
                  <img src="images/logo.png" alt="Logo" />
                </div>
                <div className="invoice-head-top-right text-end">
                  <h3 className="text-blue text-3xl font-bold">Invoice</h3>
                </div>
              </div>
              <div className="hr border-t-2 border-gray-400"></div>
              <div className="invoice-head-middle">
                <div className="invoice-head-middle-left text-start">
                  <p>
                    <span className="text-bold">Date</span>: 05/12/2020
                  </p>
                </div>
                <div className="invoice-head-middle-right text-end">
                  <p>
                    <span className="text-bold">Invoice No:</span>16789
                  </p>
                </div>
              </div>
              <div className="hr border-t-2 border-gray-400"></div>
              <div className="invoice-head-bottom">
                <div className="invoice-head-bottom-left">
                  <ul>
                    <li className="text-bold">Invoiced To:</li>
                    <li>Smith Rhodes</li>
                    <li>15 Hodges Mews, High Wycombe</li>
                    <li>HP12 3JL</li>
                    <li>United Kingdom</li>
                  </ul>
                </div>
                <div className="invoice-head-bottom-right">
                  <ul className="text-end">
                    <li className="text-bold">Pay To:</li>
                    <li>Koice Inc.</li>
                    <li>2705 N. Enterprise</li>
                    <li>Orange, CA 89438</li>
                    <li>contact@koiceinc.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="overflow-view">
              <div className="invoice-body">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className="text-bold">Service</td>
                      <td className="text-bold">Description</td>
                      <td className="text-bold">Rate</td>
                      <td className="text-bold">QTY</td>
                      <td className="text-bold">Amount</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Design</td>
                      <td>Creating a website design</td>
                      <td>$50.00</td>
                      <td>10</td>
                      <td className="text-end">$500.00</td>
                    </tr>
                    <tr>
                      <td>Development</td>
                      <td>Website Development</td>
                      <td>$50.00</td>
                      <td>10</td>
                      <td className="text-end">$500.00</td>
                    </tr>
                    <tr>
                      <td>SEO</td>
                      <td>Optimize the site for search engines (SEO)</td>
                      <td>$50.00</td>
                      <td>10</td>
                      <td className="text-end">$500.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="invoice-body-bottom">
                  <div className="invoice-body-info-item border-b-2 border-gray-400">
                    <div className="info-item-td text-end text-bold">
                      Sub Total:
                    </div>
                    <div className="info-item-td text-end">$2150.00</div>
                  </div>
                  <div className="invoice-body-info-item border-b-2 border-gray-400">
                    <div className="info-item-td text-end text-bold">Tax:</div>
                    <div className="info-item-td text-end">$215.00</div>
                  </div>
                  <div className="invoice-body-info-item">
                    <div className="info-item-td text-end text-bold">
                      Total:
                    </div>
                    <div className="info-item-td text-end">$21365.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-foot text-center">
              <p>
                <span className="text-bold">NOTE:&nbsp;</span>This is a
                computer-generated receipt and does not require a physical
                signature.
              </p>

              <div className="invoice-btns mt-4">
                <button
                  type="button"
                  className="invoice-btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => window.print()}
                >
                  <span>
                    <i className="fa-solid fa-print"></i>
                  </span>
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  className="invoice-btn bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                >
                  <span>
                    <i className="fa-solid fa-download"></i>
                  </span>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
