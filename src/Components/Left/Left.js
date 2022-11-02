import React from 'react'

export default function Left() {
    return(
        <>
            <div id="center_bars">
                <div id="left_sidebar">
                    <div id="view_links">
                        <a href="#" id="dashboard_link" class="open"><span></span> Dashboard</a>
                        <a href="#" id="notifications_link"><i class="icon-flag"></i> Recent activity</a>
          
                        <div class="expense_filter_links">
                            <a href="#" id="group--1"><i class="icon-list"></i> All expenses</a>
                            <div class="tags">
                            <div class="header">
                                Groups
                                <a href="#"><i class="icon-plus"></i> Add</a>
                            </div>
              
                            <div class="no-groups">
                                You do not have any groups yet.&nbsp;
                                <i class="icon-question-sign icon-large" ></i>
                            </div>
                        </div>
                        <div class="people">
                            <div class="header">
                                Friends
                                <a href="#invite_friends"><i class="icon-plus"></i> Add</a>
                            </div>
                            <div style="padding: 5px 10px; text-align: center; color: #ccc; font-size: 12px; white-space: normal">
                                You have not added any friends yet.
                            </div>
                        </div>
                    </div>
                    <div style="background: #5bc5a7; color: #fff; border: 1px solid #39a385; font-weight: bold; font-size: 14px; padding: 3px 5px; margin: 15px 0 0 5px; text-shadow: 0 -1px 0 #3eaf8f">
                        Invite friends
                    </div>
                    <div class="sidebar_invites" style="margin: 0 0 0 5px; border: 1px solid #ccc; border-top: none; padding: 5px">
                        <div >Send a message to</div>
                            <input class="invite_email" type="email" placeholder="Enter an email address" style="width: 145px; margin: 0 0 5px"/><br/>
                            <button class="btn btn-cancel send_invite" style="font-size: 12px; padding: 2px 6px">Send invite</button>
                            &nbsp; <img class="invite_indicator" style="display: none" src="https://assets.splitwise.com/assets/ajax-114d999f10c3c983ba14dfc2b38f2d29c1aa3d4406abd7e73f54bffab6f33c7e.gif"/>
                        </div>
                        <div class="social">
                            <a href="http://www.facebook.com/dialog/share?app_id=293864780643203&amp;display=popup&amp;redirect_uri=https%3A%2F%2Fwww.splitwise.com%2Fthanks&amp;href=&amp;href=https%3A%2F%2Fwww.splitwise.com" class="btn btn-facebook">
                            <img src="https://assets.splitwise.com/assets/fat_rabbit/social/facebook-1080e416a74acaf0738d7e91f16d08ef671ee62285160f5c189b9840dc753b3b.png"/>
                            Share
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=Splitwise+makes+it+easy+to+split+expenses+with+housemates%2C+trips%2C+groups%2C+friends%2C+and+family.+Check+it+out%21&amp;url=https%3A%2F%2Fwww.splitwise.com" class="btn btn-twitter">
                                <img src="https://assets.splitwise.com/assets/fat_rabbit/social/twitter-5685d291f9c14a83b9aabe241b608a48a01e9caaf6f22ae4da6c289166b098c6.png"/>
                                Tweet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
