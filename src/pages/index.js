import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Homepage/Hero-Section/HeroSection"
import Logos from "../components/Homepage/Logo-Section/Logos"
import FifthSection from "../components/Homepage/LetsRestSection/FifthSection"
import FourthSection from "../components/Homepage/AverageBusiness/FourthSection"
import SixthSection from "../components/Homepage/OtherFolks/SixthSection"
import SeventhSection from "../components/Homepage/LessWorkMeans/SeventhSection"
import EightSection from "../components/Homepage/SaveTime/EightSection"
import TenthSection from "../components/Homepage/BuildYourBusiness/TenthSection"
import ElevenSection from "../components/Homepage/LevelPlayingField/ElevenSection"
import ThirdSection from "../components/Homepage/SmallBusiness/ThirdSection"
import NinthSection from "../components/Homepage/FourSteps/NinthSection"
import Twelvesection from "../components/Homepage/OverMillionUsers/TwelveSection"
import Footer from '../components/Footer/footer'
import WovenImageList from "../components/Homepage/ImageList"
import Tabs from '../components/Homepage/Tabs'
const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Logos />
    <ThirdSection />
    <Tabs/>
    <FourthSection />
    <FifthSection />
    <SixthSection />
    <SeventhSection />
    <EightSection />
    <NinthSection />
    <TenthSection />
    <ElevenSection />
    <Twelvesection />
    {/* <WovenImageList/> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
