import React from "react";
import btcChart from "../assets/images/chart/bitcoin-chart.svg";
import btcIcon from "../assets/images/currency/crypto/btc.svg";

const Table = () => {
  return (
    <div className="card border-0 rounded-4 overflow-hidden">
      <div className="table-responsive">
        <table className="price-table table table-vcenter card-table" dir="ltr">
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>ارز</th>
              <th>قیمت</th>
              <th>قیمت ریالی</th>
              <th>معاملات روزانه</th>
              <th>حجم بازار</th>
              <th>روزانه</th>
              <th>هفتگی</th>
              <th>نمودار هفتگی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </td>
              <td>1</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <img className="me-2" src={btcIcon} width="24" alt="btc" />
                  <div className="font-3.5 font-Inter">
                    <span className="me-1 fw-bold">Bitcoin</span>
                    <span className="text-muted fw-bolder">BTC</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="font-Inter">$138,120.19</span>
              </td>
              <td>
                <div>۶۴۲,۶۱۴,۴۶۵</div>
                <div className="text-muted">تومان</div>
              </td>
              <td>
                <div>27.30</div>
                <div className="text-muted">میلیارد دلار</div>
              </td>
              <td>
                <div>387.9</div>
                <div className="text-muted">میلیارد دلار</div>
              </td>
              <td className="text-green fw-bold">2.90%</td>
              <td className="text-red fw-bold">0.48%</td>
              <td className="w-48">
                <img
                  src={btcChart}
                  alt="btc chart"
                  style={{
                    filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </td>
              <td>1</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <img className="me-2" src={btcIcon} width="24" alt="btc" />
                  <div className="font-3.5 font-Inter">
                    <span className="me-1 fw-bold">Bitcoin</span>
                    <span className="text-muted fw-bolder">BTC</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="font-Inter">$138,120.19</span>
              </td>
              <td>
                <div>۶۴۲,۶۱۴,۴۶۵</div>
                <div className="text-muted">تومان</div>
              </td>
              <td>
                <div>27.30</div>
                <div className="text-muted">میلیارد دلار</div>
              </td>
              <td>
                <div>387.9</div>
                <div className="text-muted">میلیارد دلار</div>
              </td>
              <td className="text-green fw-bold">2.90%</td>
              <td className="text-red fw-bold">0.48%</td>
              <td className="w-48">
                <img
                  src={btcChart}
                  alt="btc chart"
                  style={{
                    filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
