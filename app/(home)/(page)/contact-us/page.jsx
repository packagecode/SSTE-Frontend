import PageLayout from "../../../component/PageLayout";

import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <PageLayout
        title="Contact Us"
        bg="https://img.freepik.com/premium-vector/modern-simple-black-gold-abstract-background-suitable-business-card-presentation-flyer-brochure-print-certificate-template_181182-16606.jpg?w=740"
      >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a feature? Need
              details about our Addmission? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                    htmlFor="email"
                  className="block mb-3 text-sm font-medium text-gray-800 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                  placeholder="name@gmail.com"
                  required
                ></input>
              </div>
              <div>
                <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                ></input>
              </div>

              <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default ContactUsPage;
