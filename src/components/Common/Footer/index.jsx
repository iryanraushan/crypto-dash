const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary-color w-full max-w-screen-xl mx-auto rounded-lg p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-primary-color mb-4 md:mb-0">
          RCrypto
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.iryanraushan.com"
            className="hover:underline"
            aria-label="Visit Ryan Raushan's website"
          >
            Ryan Raushan™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
