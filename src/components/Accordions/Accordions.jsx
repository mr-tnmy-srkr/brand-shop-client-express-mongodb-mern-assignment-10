
export default function Accordions() {
    return (
        
<div className="">
<h1 className="text-3xl md:text-5xl font-bold text-center pb-10">Frequently asked questions</h1>
<div className="collapse collapse-plus bg-base-200 dark:bg-gray-600 dark:text-gray-100">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How do I place an order on your e-shop?
  </div>
  <div className="collapse-content"> 
    <p>Answer: Provide step-by-step instructions on how customers can browse, select products, add them to their cart, and complete the purchase process.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 dark:bg-gray-600 dark:text-gray-100">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What payment methods do you accept?

</div>
  <div className="collapse-content"> 
    <p>Answer: List the payment options available, such as credit/debit cards, PayPal, Apple Pay, Google Pay, and any other relevant methods.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 dark:bg-gray-600 dark:text-gray-100">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is my payment information secure on your website?

</div>
  <div className="collapse-content"> 
    <p>Answer: Yes, your payment information is completely secure. We use industry-standard SSL encryption to protect your data during the checkout process, and we do not store your payment details on our servers.</p>
  </div>
</div><div className="collapse collapse-plus bg-base-200 dark:bg-gray-600 dark:text-gray-100">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return and refund policy?
  </div>
  <div className="collapse-content"> 
    <p>Answer: Our return and refund policy allows you to return products within 30 days of purchase if you're not completely satisfied. We offer a full refund or exchange for eligible items. Please refer to our Return and Refund Policy for more details.</p>
  </div>
</div><div className="collapse collapse-plus bg-base-200 dark:bg-gray-600 dark:text-gray-100">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Do you offer international shipping?  </div>
  <div className="collapse-content"> 
    <p>Answer: Yes, we offer international shipping to many countries. Shipping costs and delivery times vary based on your location. During the checkout process, you can select your country for shipping options.</p>
  </div>
</div>
</div>

    );
}