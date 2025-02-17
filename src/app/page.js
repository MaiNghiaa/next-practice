import Image from "next/image";

export default function Home() {
  const datawed = [
    {
      icon: "/Activity.svg",
      title: "Grow Your Business",
      desc: "We help identify the best ways to improve your business",
    },
    {
      icon: "/Activity.svg",
      title: "Grow Your Business",
      desc: "We help identify the best ways to improve your business",
    },
    {
      icon: "/Activity.svg",
      title: "Grow Your Business",
      desc: "We help identify the best ways to improve your business",
    },
  ];

  const dataarchived = [
    {
      icon: "./project-plan.svg",
      name: "Completed Projects",
      desc: "100 +",
    },
    {
      icon: "./colaboration.svg",
      name: "Customer Satisfaction",
      desc: "20 %",
    },
    {
      icon: "./raise.svg",
      name: "Raised by Clients",
      desc: "$ 10M",
    },
    {
      icon: "./timeline.svg",
      name: "Years in Business",
      desc: "2 yrs",
    },
  ];

  const testimonicalData = [
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
    {
      desc: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      imgURL: "/Mask.png",
      name: "Emily Stones",
      role: "CEO, Marketing Guru",
    },
  ];
  return (
    <div>
      <header className="header py-[15px] px-[100px] bg-[#D7F5DC] flex items-center justify-between h-20">
        <div className="logo">
          <a>
            <img src="/DesignAGENCY.svg" />
          </a>
        </div>
        <div className="navigation flex items-center justify-center gap-[30px]">
          <nav className="nav">
            <div className="nav-list flex items-center justify-center gap-[30px]">
              <div className="nav-items font-medium text-base p-2.5">
                Services
              </div>
              <div className="nav-items font-medium text-base p-2.5">
                About Us
              </div>
              <div className="nav-items font-medium text-base p-2.5">
                Contact Us
              </div>
            </div>
          </nav>
          <div className="button-act flex items-center justify-center gap-[30px]">
            <button className="btn-login font-medium text-bas py-2.5 px-[25px] text-[#000000] border border-[#20B15A] bg-transparent hover:bg-[#20B15A] rounded-[10px] hover:text-[#ffffff] transition">
              Login
            </button>
            <button className="btn-register font-medium text-base py-2.5 px-[25px] text-[#000000] border border-[#20B15A] bg-transparent hover:bg-[#20B15A] rounded-[10px] hover:text-[#ffffff] transition">
              Register
            </button>
          </div>
        </div>
      </header>
      <main className="main w-full h-full">
        <div className="hero bg-[#D7F5DC] pt-10 pb-[37px]">
          <div className="slider  pl-[100px] pr-[90px]">
            <div className="slider-inner flex items-center gap-4">
              <div className="slider-content w-[550px]">
                <div className="slider-content-text mb-[27px]">
                  <h1 className="content-text-title font-bold text-[50px] leading-[65px]">
                    Increase Your Customers Loyalty and Satisfaction
                  </h1>
                  <p className="content-text-description font-medium text-[20px] leading-[27.32px] mt-2.5">
                    We help businesses like yours earn more customers, standout
                    from competitors, make more money
                  </p>
                </div>
                <div className="slider-content-btn w-[175px] font-medium text-[20px] leading-[30px] text-[#ffffff] py-5 px-[30px] bg-[#20B15A] rounded-2xl">
                  Get Started
                </div>
              </div>
              <div className="slider-img px-3">
                <img src="/contentImg.png" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="Our_partners w-full bg-[#ffffff] h-[120px] pt-[46.26px] pb-[44.64px]">
            <div className="our_partner_inner w-full flex items-center justify-center gap-[150px]">
              <div className="item-partner">
                <img src="/google.svg" />
              </div>
              <div className="item-partner">
                <img src="/Trello.svg" />
              </div>
              <div className="item-partner">
                <img src="/monday.svg" />
              </div>
              <div className="item-partner">
                <img src="/Notion.svg" />
              </div>
              <div className="item-partner">
                <img src="/Slack.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="what_we_do pt-[67px] px-[105px] pb-[48px]">
          <div className="wed-inner">
            <div className="wed-top w-[495px]">
              <p className="wed-sub-title font-medium text-[20px] leading-[30px] text-[#20B15A] mb-[15px]">
                WHAT WE DO
              </p>
              <h2 className="wed-title font-semibold text-[30px] leading-[45px]">
                We provide the Perfect Solution to your business growth
              </h2>
            </div>
            <div className="wed-list mt-10 flex items-center justify-between gap-[45px]">
              {datawed.map((item) => (
                <div className="wed-items pt-[50px] pr-[51px] pl-[30px]">
                  <div className="wed-items-box">
                    <div className="wed-items-img p-[30px] bg-[#D7F5DC] w-[93.33px] h-[93.33px] rounded-[20px] overflow-hidden">
                      <img
                        src={item.icon}
                        className="w-full h-full object-cover"
                      ></img>
                    </div>
                    <div className="wed-items-text mt-[15px] mb-[43px]">
                      <p className="wed-items-title font-semibold text-2xl leading-9 mb-[15px]">
                        {item.title}
                      </p>
                      <p className="wed-items-desc font-normal text-[18px] leading-[24.58px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="wed-items-button">
                    <button className="font-normal text-[14px] leading-[24.58px] py-[15px] px-5 flex items-center justify-between gap-2.5">
                      <span>LEARN MORE</span> <img src="/arrowright.svg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="preview_archive">
          <div className="pa-inner py-[80.5px] px-[251px]">
            <div className="pa-list flex justify-center items-center">
              {dataarchived.map((item) => (
                <div className="pa-items p-10 flex flex-col items-center gap-[15px] border-r border-r-[#C4C4C480] last:border-none">
                  <div className="pa-items-img flex flex-col items-center justify-center gap-2.5">
                    <img src={item.icon} />
                    <p className="pa-items-title font-medium text-base text-center whitespace-nowrap">
                      {item.name}
                    </p>
                  </div>
                  <div className="pa-items-sesc font-extrabold text-[40px] leading-[60px] text-[#20B15A] whitespace-nowrap">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="our_portfolio mt-[62px] mr-[109.85px] mb-[71.48px] ml-[113px]">
          <div className="our_portfolio_inner">
            <div className="op-top w-[495px]">
              <p className="op-sub-title font-medium text-[20px] leading-[30px] text-[#20B15A] mb-[73px]">
                Our Portfolio
              </p>
              <h2 className="op-title font-semibold text-[30px] leading-[45px]">
                We provide the Perfect Solution to your business growth
              </h2>
            </div>
          </div>
        </div>
        <div className="testimonicals">
          <div className="testimonicals_inner pt-[122px] pl-[112px] pb-[118px] pr-[117px]">
            <div className="testimonical-top flex items-start justify-between mb-24">
              <div className="testimonical-top-left w-[495px]">
                <p className="op-sub-title font-medium text-[20px] leading-[30px] text-[#20B15A]">
                  TESTIMONIALS
                </p>
                <h2 className="op-title font-semibold text-[30px] leading-[45px]">
                  See what our customer say about us
                </h2>
              </div>
              <div className="testimonical-top-right flex items-center gap-[21px]">
                <button className="flex items-center justify-center arrow-left bg-[#ffffff] border border-[#000000] hover:bg-[#D7F5DC] hover:border-[#D7F5DC] rounded-full p-5 w-[80px] h-[80px]">
                  <img src="./arrowl.svg" className="rotate-180" />
                </button>
                <button className="flex items-center justify-center arrow-right bg-[#ffffff] border border-[#000000] hover:bg-[#D7F5DC] hover:border-[#D7F5DC] rounded-full p-5 w-[80px] h-[80px]">
                  <img src="./arrowl.svg" className="" />
                </button>
              </div>
            </div>
            <div className="testimonical-content">
              <div className="testimonicals-list flex items-center gap-[45px] justify-start overflow-scroll flex-shrink-0">
                {testimonicalData.map((item) => (
                  <div className="testimonical-items w-[470px] h-[260px] flex flex-col items-start justify-start p-10 rounded-[20px] flex-shrink-0 gap-5 shadow-[0px_4px_4px_0px_#00000040]">
                    <div className="testimonicals-items-desc font-normal text-[18px] leading-[25px]">
                      {item.desc}
                    </div>
                    <div className="testimonicals-infor flex items-center justify-normal gap-2.5">
                      <div className="testimonicals-infor-img">
                        <img src={item.imgURL} />
                      </div>
                      <div className="testimonicals-infor-detail flex flex-col items-start gap-[5px]">
                        <p className="testimonicals-infor-detail-name font-semibold text-xl leading-[25px]">
                          {item.name}
                        </p>
                        <p className="testimonicals-infor-detail-role font-normal text-[18px] leading-[25px]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="subcribe mb-3">
          <div className="subscribe-inner px-[422px] pt-[91px] pb-[137px] flex items-center flex-col gap-10">
            <div className="subcribe-top flex items-center flex-col w-[516px]">
              <p className="subscribe-sub-title font-medium text-[20px] leading-[30px] text-[#20B15A] mb-[22px]">
                SUBSCRIBE
              </p>
              <h2 className="subscribe-title font-semibold text-[35px] text-center  leading-[45px] mb-[5px]">
                Subscribe To Get The Latest News About Us
              </h2>
              <p className="subcribe-desc font-medium text-sm leading-[21.86px] text-[#8B8B8B]">
                Please drop your email below to get daily update about what we
                do
              </p>
            </div>
            <div className="enterInput w-full relative max-w-lg mx-auto">
              <input
                className="relative py-4 px-4 rounded-lg border border-black placeholder:text-sm placeholder:leading-[21.86px] placeholder:font-normal bg-transparent w-full"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="outline-none absolute top-1 right-1 btn-subcribe flex items-center justify-center px-6 py-3 text-sm md:text-base rounded-lg bg-[#F55F1D] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="footer bg-[#00CA72]">
        <div className="footer-inner pt-[57px] px-[116px] pb-[29px]">
          <div className="row-link">
            <div className="col">
              <h2 className="footer-title font-bold text-[39.2px] leading-[58.8px] p-[19.6px]">
                WEB LOGO
              </h2>
              <p className="footer-desc font-normal text-[20px] leading-[27.32px]">
                Some footer text about the Agency. Just a little description to
                help people understand you better
              </p>
              <div className=" footer-icon-list-contact flex items-center justify-start gap-[15.31px] mt-5">
                <div className="footer-icon-items w-[40.82px] h-[40.82px] bg-[#20B15A] flex items-center justify-center rounded-full">
                  <img src="/footer_fb.svg" />
                </div>
                <div className="footer-icon-items w-[40.82px] h-[40.82px] bg-[#20B15A] flex items-center justify-center rounded-full">
                  <img src="/footer_twitter.svg" />
                </div>
                <div className="footer-icon-items w-[40.82px] h-[40.82px] bg-[#20B15A] flex items-center justify-center rounded-full">
                  <img src="/footer_in.svg" />
                </div>
                <div className="footer-icon-items w-[40.82px] h-[40.82px] bg-[#20B15A] flex items-center justify-center rounded-full">
                  <img src="/footer_ig.svg" />
                </div>
              </div>
            </div>
            <div className="col-quick-links">
              <div className="ql-inner flex flex-col items-center gap-4">
                <p className="ql-title font-semibold text-[20px] leading-[30px]">
                  Quick Links
                </p>
                <div className="ql-list flex flex-col gap-[25px]">
                  <div className="ql-items font-medium text-[18px] leading-[24.59px]">
                    Services
                  </div>
                  <div className="ql-items font-medium text-[18px] leading-[24.59px]">
                    Portfolio
                  </div>
                  <div className="ql-items font-medium text-[18px] leading-[24.59px]">
                    About Us
                  </div>
                  <div className="ql-items font-medium text-[18px] leading-[24.59px]">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
            <div className="Address">
              <div className="Address-inner flex flex-col items-center gap-[26px]">
                <p className="Address-title font-semibold text-[20px] leading-[30px]">
                  Address
                </p>
                <div className="Address-desc">
                  Design Agency Head Office. Airport Road United Arab Emirate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright font-medium text-[20px] leading-[27.32px]">
          Copyright Design Agency 2022
        </div>
      </div>
    </div>
  );
}
