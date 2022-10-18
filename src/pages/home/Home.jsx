import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "../../components/Header/index";
import SearchInput from "../../components/SearchInput/index";
import Section from "../../components/Section/index";
import "semantic-ui-css/semantic.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Icon } from "semantic-ui-react";
import EventsToday from "../../components/EventsToday/index";
import ActivityItem from "../../components/ActivityItem/index";
import ProgressItem from "../../components/ProgressItem/index";
import ProgressBar from "../../components/ProgressBar/index";
import SideBar from "../../components/SideBar/index";

export default function Home() {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className={styles.page_container}>
      <Header />
      <div className={styles.page_body}>
        <SideBar />
        <div className={styles.body_wrapper}>
        <div className={styles.body_container}>
          <div className={styles.searchWrapper}>
            <SearchInput />
          </div>
          <Section line={false} tittle={"Dashboard"} marginBottomTittle={60}>

            <div className={styles.language_container}>
              <small>Currently Learning</small>
              <div className={styles.icon_language_container}>
                <i className={styles.icon_language}>
                  <Image alt="" src={"/images/usaIcon.png"} layout="fill" objectFit="cover"/>
                </i>
                <p>English</p>
              </div>
            </div>
            
            <div className={styles.square_container}>
              <div className={styles.info_container}>
                <div className={styles.img_container}>
                  <Image
                    alt=""
                    src={"/images/imgCarttom.svg"}
                    layout="fill"
                    priority
                  />
                </div>
                <p className={styles.text_first_section}>
                  Welcome back, Clarence
                  <br />
                  <small>Ta-da! You’re up to date. 🥳</small>
                </p>
              </div>
            </div>
          </Section>

          <Section line={true} tittle={"Events"} marginBottomTittle={10}>
            <div className={styles.event_section_container}>
                <div className={styles.slider_container}>
                  <div className={styles.slider_txt}>
                    <h2>Youth Talent & Education</h2>
                    <p>May, 20</p>
                  </div>
                  <div className={styles.student_class}>SCIENCE</div>
                  <Slider {...settings}>
                    <div className={styles.img_slider_container}>
                      <Image alt="" src={"/images/sliderImg.png"} layout="fill" objectFit="cover" />
                    </div>
                    <div className={styles.img_slider_container}>
                      <Image alt="" src={"/images/sliderImg.png"} layout="fill" objectFit="cover" />
                      </div>
                  </Slider>
                </div>
                <Section line={true} tittle={ <small className={styles.small_tittle}>EVENTS TODAY</small> }  marginBottomTittle={0}>
                  <div className={styles.events_container}>
                    <EventsToday
                      event_hour={"10:30AM"}
                      event_tittle={"Webinar: the basics of…"}
                      event_img={"thumbnail@1,5x.svg"}
                    />
                    <EventsToday
                      event_hour={"10:30AM"}
                      event_tittle={"Webinar: the basics of…"}
                      event_img={"thumbnail@1,5x.svg"}
                    />
                  </div>
                </Section>
            </div>
          </Section>
          <Section line={true} tittle={"Activity"} marginBottomTittle={10}>
            <ActivityItem
              img={"ic-followers@3x.png"}
              description={
                "You have new 5 followers including Kathryn Crawford and Piper Shaw"
              }
            />
            <ActivityItem
              img={"ic-events@3x.png"}
              description={"3 new events were added to your calendar"}
            />
            <ActivityItem
              img={"ic-assignments@3x.png"}
              description={"You have 3 pending readings to complete 🤓"}
            />
          </Section>
          <div className={styles.progressBar_progress_confirm_container}>
            <ProgressBar totalHours={50} completeHours={20} />
            <div className={styles.progress_confirm_right}>
                    <Section line={true} tittle={"Progress"} marginBottomTittle={10}>
                      <div className={styles.progressItems_container}>
                        <ProgressItem text={"Total Webinars"} number={9} />
                        <ProgressItem text={"Pending Assignments"} number={0} />
                        <ProgressItem text={"Total Readings"} number={14} />
                        <ProgressItem text={"Total Videos"} number={5} active />
                        <ProgressItem text={"Total"} number={5} />
                      </div>
                    </Section>
                    <div className={styles.confirm_acount_warning_wrapper}>
                      <div className={styles.confirm_acount_warning}>
                        <p>
                          Confirm your account details
                        </p>
                        <p>
                          Please confirm your email and phone number.
                        </p>
                          <p>
                          😰
                          </p>
                      </div>
                    </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
