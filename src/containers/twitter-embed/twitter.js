import {useContext, useEffect} from "react";
import "./twitter.scss";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

// If the Twitter iframe hasn't loaded within 10s after mount, replace with a friendly error.
function startTwitterTimeout() {
  return setTimeout(() => {
    const el = document.getElementById("twitter");
    if (el && !el.innerHTML.includes("iframe")) {
      el.innerHTML = cantDisplayError;
    }
  }, 10000);
}

export default function Twitter() {
  useContext(StyleContext);

  useEffect(() => {
    const tid = startTwitterTimeout();
    return () => clearTimeout(tid);
  }, []);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    // Twitter embed commented out temporarily per request.
    // To re-enable, restore the JSX below and remove the early return.
    /*
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: widthScreen}}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onLoad={() => {}}
            />
          </div>
        </div>
      </Suspense>
    );
    */
    return null; // commented out
  } else {
    return null;
  }
}
