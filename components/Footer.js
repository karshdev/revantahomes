
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });


const Footer = ({lang}) => {
  return (
    <div className="relative bg-[url('/explore_images/explore_bg.png')] bg-brand w-full bg-blend-multiply py-12">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-3 gap-y-12 p-2">
        <div className="flex col-span-3 lg:col-span-1 flex-col gap-4 items-center justify-center sm:items-start">
          <Image src={"/assets/logo.png"} alt="logo" width={100} height={100} />
          <p className="text-white font-bold text-sm">{lang.Footer.title}</p>
        </div>
        <div className="flex col-span-3 lg:col-span-1 items-center justify-center md:items-start md:justify-start">
          <div className="w-full h-full text-white space-y-6">
            <h3 className={`text-lg text-center md:text-start ${tenor.className}`}>{lang.Footer.Contact}</h3>
            <div className="gap-2 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
              <div className="flex-none bg-white w-8 h-8 rounded-full flex justify-center items-center">
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.52244 10.7894L3.52245 10.7894L3.52665 10.7938C3.7815 11.0635 4.20039 11.0694 4.46226 10.8069C4.46631 10.8029 4.47031 10.7988 4.47426 10.7946C6.8249 8.3149 8 6.05942 8 4.02837C8 1.80359 6.20917 0 4 0C1.79083 0 0 1.80359 0 4.02837C0 6.04931 1.17399 8.30305 3.52244 10.7894ZM4 2.73799C4.7408 2.73799 5.34135 3.35646 5.34135 4.11935C5.34135 4.88228 4.7408 5.50074 4 5.50074C3.2592 5.50074 2.65865 4.88228 2.65865 4.11937C2.65865 3.35646 3.2592 2.73799 4 2.73799Z"
                    fill="#315245"
                  />
                </svg>
              </div>
              <div>
                <p className="text-center md:text-left">
                {lang.Footer.address}
                </p>
              </div>
            </div>
            <div className="gap-2 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
              <div className="flex-none bg-white w-8 h-8 rounded-full flex justify-center items-center">
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.67289 1.33849C3.20309 0.652528 2.82626 0.424236 2.32133 0.521296C2.10346 0.563101 1.96898 0.63835 1.72166 0.857191L1.53324 1.02659L1.1667 1.33813L1.07089 1.42392C1.01696 1.47481 0.977927 1.51662 0.927896 1.57478C-0.00354498 2.65517 -0.261509 4.34482 0.280678 5.93341C0.670641 7.07487 1.36647 8.20906 2.35859 9.34252C3.41067 10.5447 4.29492 11.3012 5.31188 11.853C6.11025 12.2856 6.72163 12.4754 7.43201 12.4975C8.29071 12.5248 9.04686 12.326 9.66818 11.9137C9.76853 11.8458 9.86367 11.7701 9.95276 11.6872L10.0734 11.5745L10.3111 11.3477L10.3917 11.2743L10.5507 11.1336C10.8714 10.8406 10.9754 10.6574 10.9967 10.3677C11.0286 9.92561 10.8335 9.58136 10.2728 9.08988L9.8935 8.76452L9.71715 8.60676L9.55037 8.46026C9.00854 8.00185 8.60722 7.85354 8.092 7.93315C7.73859 7.98731 7.53491 8.11418 7.17405 8.50133L7.01473 8.6751C6.75215 8.95864 6.60241 9.06661 6.38099 9.11205C6.05703 9.17858 5.73519 9.00699 5.21288 8.57222C4.53976 8.0124 3.98125 7.36933 3.50116 6.60484C3.16832 6.07155 3.03703 5.66695 3.13816 5.2987C3.17932 5.14966 3.27867 5.0446 3.48838 4.87847L3.7066 4.7098L3.74173 4.68181L4.07279 4.40517C4.36553 4.15434 4.4844 3.98348 4.54685 3.72175C4.67637 3.18337 4.55395 2.7366 4.07492 1.96775L3.84747 1.60641L3.76657 1.47918L3.67289 1.33849Z"
                    fill="#315245"
                  />
                </svg>
              </div>
              <p className="mt-1">94256-50333, 94256-60333</p>
            </div>
          </div>
        </div>
        <div className="flex col-span-3 lg:col-span-1 items-center justify-center md:items-start md:justify-start">
          <div className="flex flex-col items-center justify-center h-full gap-y-4">
            <h3 className={`text-lg text-white ${tenor.className} text-center w-fit`}>
            {lang.Footer.links}
            </h3>
            <div className="gap-4 flex ">
              <Link
                prefetch={false}
                target="_blank"
                href={"revantahomesmp@gmail.com"}
                className="flex-none bg-white rounded-full flex justify-center items-center"
              >
                <svg
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-8 h-8 m-2"
                >
                  <g clipPath="url(#clip0_31_1538)">
                    <path
                      d="M2.51295 0.358663L10.7741 9.76165C11.0055 10.0256 11.2906 10.2371 11.6102 10.382C11.9299 10.5269 12.2769 10.6019 12.6279 10.6019C12.9789 10.6019 13.3258 10.5269 13.6455 10.382C13.9652 10.2371 14.2503 10.0256 14.4816 9.76165L22.595 0.519857C22.6626 0.44653 22.7421 0.385209 22.8301 0.338514C22.4761 0.184779 22.0944 0.104794 21.7085 0.103439H3.57415C3.19618 0.0992827 2.82134 0.172421 2.47266 0.318365L2.51295 0.358663Z"
                      fill="#50645C"
                    />
                    <path
                      d="M24.079 1.44678C24.041 1.54489 23.9865 1.63576 23.9178 1.71543L15.8044 10.8901C15.4073 11.3414 14.9185 11.703 14.3707 11.9507C13.8229 12.1983 13.2287 12.3264 12.6275 12.3264C12.0263 12.3264 11.432 12.1983 10.8842 11.9507C10.3364 11.703 9.84772 11.3414 9.45062 10.8901L1.19614 1.52066C1.17541 1.49964 1.15939 1.47446 1.14913 1.44678C0.882521 1.88841 0.743065 2.3951 0.746144 2.91096V15.5916C0.747922 16.335 1.04449 17.0473 1.5708 17.5724C2.09711 18.0974 2.81018 18.3923 3.55361 18.3923H21.6879C22.0557 18.3923 22.4199 18.3199 22.7597 18.1791C23.0995 18.0384 23.4083 17.8321 23.6684 17.572C23.9284 17.3119 24.1347 17.0032 24.2755 16.6634C24.4162 16.3236 24.4887 15.9594 24.4887 15.5916V2.91096C24.4894 2.3945 24.3476 1.88786 24.079 1.44678Z"
                      fill="#50645C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_1538">
                      <rect
                        width="23.7627"
                        height="18.2888"
                        fill="white"
                        transform="translate(0.746094 0.103516)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                prefetch={false}
                target="_blank"
                href={"https://www.instagram.com/revantabetul/"}
                className="flex-none bg-white rounded-full flex justify-center items-center"
              >
                <svg
                  className=" w-8 h-8 m-2"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_31_1543)">
                    <path
                      d="M18.6769 4.32033C18.3959 4.319 18.1207 4.39997 17.8865 4.55297C17.6522 4.70596 17.4694 4.92408 17.3612 5.17962C17.253 5.43516 17.2244 5.71661 17.2789 5.98823C17.3334 6.25985 17.4686 6.50939 17.6673 6.70517C17.8661 6.90095 18.1194 7.03413 18.3951 7.08782C18.6709 7.14151 18.9566 7.11328 19.216 7.00671C19.4754 6.90015 19.6968 6.72005 19.8521 6.48928C20.0074 6.25852 20.0896 5.9875 20.0883 5.71063C20.0865 5.34244 19.9372 4.98984 19.6729 4.72949C19.4086 4.46914 19.0507 4.32209 18.6769 4.32033Z"
                      fill="#50645C"
                    />
                    <path
                      d="M12.3898 6.12061C11.2153 6.12061 10.0671 6.4637 9.09048 7.10651C8.11388 7.74931 7.35271 8.66296 6.90323 9.73191C6.45374 10.8009 6.33614 11.9771 6.56528 13.1119C6.79443 14.2467 7.36003 15.289 8.19056 16.1072C9.02109 16.9253 10.0793 17.4825 11.2312 17.7082C12.3832 17.9339 13.5773 17.8181 14.6624 17.3753C15.7476 16.9325 16.6751 16.1827 17.3276 15.2207C17.9802 14.2587 18.3284 13.1276 18.3284 11.9706C18.3248 10.4202 17.698 8.93427 16.5851 7.83795C15.4722 6.74163 13.9637 6.12415 12.3898 6.12061ZM12.3898 15.7184C11.6373 15.7184 10.9018 15.4986 10.2761 15.0868C9.65046 14.6749 9.16283 14.0896 8.87487 13.4048C8.58691 12.72 8.51157 11.9664 8.65837 11.2395C8.80517 10.5125 9.16752 9.84467 9.69959 9.32054C10.2317 8.7964 10.9096 8.43946 11.6476 8.29486C12.3856 8.15025 13.1506 8.22447 13.8457 8.50813C14.5409 8.79178 15.1351 9.27214 15.5532 9.88846C15.9712 10.5048 16.1944 11.2294 16.1944 11.9706C16.189 12.9617 15.786 13.9105 15.0732 14.61C14.3605 15.3096 13.3959 15.7032 12.3898 15.7049V15.7184Z"
                      fill="#50645C"
                    />
                    <path
                      d="M17.1016 23.8379H7.47429C5.55263 23.8361 3.71019 23.0833 2.35137 21.7448C0.992545 20.4063 0.228368 18.5913 0.226563 16.6983L0.226562 7.21475C0.228368 5.32177 0.992545 3.50683 2.35137 2.16829C3.71019 0.829745 5.55263 0.0769736 7.47429 0.0751953H17.1016C19.0232 0.0769736 20.8657 0.829745 22.2245 2.16829C23.5833 3.50683 24.3475 5.32177 24.3493 7.21475V16.6983C24.3475 18.5913 23.5833 20.4063 22.2245 21.7448C20.8657 23.0833 19.0232 23.8361 17.1016 23.8379ZM7.47429 2.31176C6.15424 2.31176 4.88825 2.82833 3.95483 3.74781C3.02141 4.6673 2.49702 5.9144 2.49702 7.21475V16.6983C2.49702 17.9987 3.02141 19.2458 3.95483 20.1653C4.88825 21.0848 6.15424 21.6013 7.47429 21.6013H17.1016C18.4216 21.6013 19.6876 21.0848 20.621 20.1653C21.5544 19.2458 22.0788 17.9987 22.0788 16.6983V7.21475C22.0788 6.57088 21.9501 5.93331 21.7 5.33846C21.4498 4.7436 21.0832 4.2031 20.621 3.74781C20.1588 3.29253 19.6102 2.93138 19.0063 2.68498C18.4024 2.43858 17.7552 2.31176 17.1016 2.31176H7.47429Z"
                      fill="#50645C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_1543">
                      <rect
                        width="24.1227"
                        height="23.7627"
                        fill="white"
                        transform="translate(0.226562 0.0751953)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                prefetch={false}
                target="_blank"
                href={"https://www.facebook.com/revantabetul"}
                className="flex-none bg-white rounded-full flex justify-center items-center"
              >
                <svg
                  className=" w-8 h-8 m-2"
                  viewBox="0 0 13 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0139 13.4409L12.6856 9.14236H8.54825V6.34833C8.54825 5.17296 9.12586 4.02445 10.9729 4.02445H12.8803V0.364001C11.7695 0.185574 10.6471 0.0890451 9.52213 0.0751953C6.1169 0.0751953 3.89377 2.13714 3.89377 5.86475V9.14236H0.119141V13.4409H3.89377V23.8379H8.54825V13.4409H12.0139Z"
                    fill="#50645C"
                  />
                </svg>
              </Link>
            </div>
            <div className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
