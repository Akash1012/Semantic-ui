import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './comment-detail'
import ApprovalCard from './approval.card'



const App = () => {
    return (
        <div>
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail
                        author="Sam"
                        timeAgo="Today at 4.45 Pm"
                        content="Nice Blog Post ... "
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));