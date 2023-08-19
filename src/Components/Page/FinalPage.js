import Logo from "../Design/logo";
import SiteTheme from "../Design/SiteTheme";
import IntroChat from "../Design/IntroChat";
import DemoUsage from "../Demo/DemoUsage";
import DesignType from "../Design/DesignType";
import WorkingIntro from "../Working/WorkingIntro";
import SubscribeDetail from "../Subscription/SubscribeDetail";
import RelatedQandA from "../Questions/RelatedQandA";
import Footer from "../Design/Footer";

const FinalPage = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <section>
        <SiteTheme />
        <IntroChat />
        <DemoUsage />
        <DesignType />
        <WorkingIntro />
        <SubscribeDetail />
        <RelatedQandA />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default FinalPage;
