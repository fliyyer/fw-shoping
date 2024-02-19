import React from 'react';
import CardFaq from '../../CardFaq';
import { CiMail } from 'react-icons/ci';
import { FiCreditCard } from 'react-icons/fi';
import { FiSlash, FiTruck, FiTag } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa6';

const ListFaq = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 mt-[70px] md:grid-cols-3 gap-10">
        <CardFaq
          icons={<CiMail />}
          title="How do I change my account email?"
          desc="You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email."
        />
        <CardFaq
          icons={<FiCreditCard />}
          title="What should I do if my payment fails?"
          desc="If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days."
        />
        <CardFaq
          icons={<FiSlash />}
          title="What is your cancellation policy?"
          desc="You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made"
        />
        <CardFaq
          icons={<FiTruck />}
          title="How do I check order delivery status ?"
          desc="Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status."
        />
        <CardFaq
          icons={<FaDollarSign />}
          title="What is Instant Refunds?"
          desc="Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns."
        />
        <CardFaq
          icons={<FiTag />}
          title="How do I apply a coupon on my order?"
          desc="You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site."
        />
      </div>
      <div className="flex justify-center mx-auto items-center max-w-5xl my-[70px]">
        <div className="bg-[#2CBF83] p-4 rounded-xl w-[894px] flex justify-between mx-auto">
          <div className="flex flex-col">
            <p className="text-black text-sm font-semibold">
              Still have questions?
            </p>
            <p className="text-xs text-black mt-1 font-medium">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="bg-[#040404] text-white text-sm font-semibold px-4 p-1 rounded-xl">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListFaq;
