import { Fragment } from 'react';

import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';

function FeedbackPage(props) {
  return (
    <Fragment>
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>{item.text} </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
