import ReactGA from "react-ga4";

const TRACKING_ID = process.env.REACT_APP_ANALYTICS_TRACKING_ID
if (TRACKING_ID !== undefined) {
    ReactGA.initialize(TRACKING_ID, {
        legacyDimensionMetric: false,
        gaOptions: {
            siteSpeedSampleRate: 100
        }
    })    
}

const AnalyticsEventTracker = (category) => {    
    const eventTracker = (action, label) => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}
export default AnalyticsEventTracker;
