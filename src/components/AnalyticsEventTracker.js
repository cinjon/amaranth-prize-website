import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_ANALYTICS_TRACKING_ID 
ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
        siteSpeedSampleRate: 100
    }
})

const AnalyticsEventTracker = (category) => {    
    const eventTracker = (action, label) => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}
export default AnalyticsEventTracker;
